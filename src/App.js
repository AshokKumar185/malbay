import "./App.css";
import Contact from "./components/Contact/contact";
import NavBar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Location from "./components/Locations/location";
import About from "./components/About/about";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Route, Routes,useLocation } from "react-router-dom";
import Service from "./components/Service/service"; // Corrected import
import Fleets from "./components/Fleets/fleets";
import Pricing from "./components/Pricing/pricing";
import FloatButtons from "./components/Floats/Float";
import { Booking } from "./components/Booking/Booking";
import Destination from "./components/Destination/destination";
import Payment from "./components/Payment/payment";
function ConditionalFooter() {
  const location = useLocation();
  if (location.pathname === '/payment') {
    return null;  // Don't render Footer on /payment route
  }
  return <Footer />;
}
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/locations" element={<Location />} />
            <Route exact path="/services" element={<Service />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/fleets" element={<Fleets />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/booking/:id" element={<Booking />} />
            <Route exact path="/destination" element={<Destination />} />
            <Route exact path="/payment" element={<Payment />} />
          </Routes>
        </div>
        <ConditionalFooter />
        <FloatButtons/>
      </Router>
    </>
  );
}

export default App;
