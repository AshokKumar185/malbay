import React, { useState } from "react";
import citypic from '../city.jpeg'
import driverpic from '../driver.png'
import car1 from '../alphard-blue.png'
import car2 from '../alphard-white.png'
import "./home.css"
import '../Styles/Accordion.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link,useNavigate } from "react-router-dom";

 const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const navigate = useNavigate();
  const toggleForm = () => {
    // setIsFormOpen(!isFormOpen);
    navigate('/contact')
    window.scrollTo(20, 20);
  };
  ///accordion
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = index => {
    console.log("Button clicked for index:", index);
    if (activeIndex === index) {
        setActiveIndex(null);

    } else {
        setActiveIndex(index);
        console.log("Updated activeIndex:", activeIndex);

    }
};
const handleBooking=()=>{
  navigate('/pricing');
  window.scrollTo(0, 0);
}
const handlePricing = ()=>{
  navigate('/pricing');
  window.scrollTo(0, 0);
}



    const accordionItems = [
        'SENAI AIRPORT',
        'KSL CITY MALL',
        'LEGOLAND JOHOR BAHRU',
        'JOHOR PREMIUM OUTLET',
        'SG -JB/SG-JB 1DAY TRIP',
        'JOHOR BHARU AREA',
        'KUKUP',
        'MALACCA'
    ];

    const accordionContent = `
Toyota Innova : SGD 100
Toyota Alphard : SGD 130
Hyundai Starex : SGD 130
    `;
    const settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div className="home">
 <div className="homequote">
  <h1 className="animated-heading">TRANSFORMING YOUR COMMUTE EXPERIENCE <br/> CONNECTING PEOPLE AND PLACES</h1> 
</div>

      <div className="bgpic" style={{ backgroundImage: `url(${citypic})` }}>
      </div>
      <div className="homecontparas">
        <h2 className="Headinghome">MALBAY EXPRESS TRANSPORT SOLUTIONS</h2><br />
       
        <p className="padding20px fontpara parahome">At MalaBay Express Transport Solutions, we specialize in the safe and efficient transportation of people from singapore to malaysia. As a dedicated transport company, we understand the importance of reliable and comfortable 
        transportation for individuals. Whether you need a convenient airport transfer, a dependable shuttle service, or private transportation for events, our experienced drivers are here to ensure you reach your destination with ease. Our commitment to safety, punctuality, and exceptional customer service sets us apart. We take pride in offering a range of
         vehicles to accommodate your specific needs, and our drivers are trained to provide a pleasant and secure journey. Trust us to be your partner in personal transportation, and experience the convenience and peace of mind that MalBay Express Transport Solutions brings to every ride.</p>

        <button onClick={toggleForm} className="know-more-btn"> {isFormOpen ? "Close" : "Get Info"}</button>
      <br/>
        {isFormOpen && (
         <div className="form-container">
         <h2>Get Your Instant Quote</h2>
         
         <form className="forminhome">
           <div className="row">
           <div className="col-12 mb-3">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="tripType" id="oneWay" value="oneWay" required />
                    <label className="form-check-label" htmlFor="oneWay">One-way</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="tripType" id="twoWay" value="twoWay" required />
                    <label className="form-check-label" htmlFor="twoWay">Two-way</label>
                </div>
            </div>
             {/* Name */}
             <div className="col-md-6 mb-3">
               <input type="text" className="form-control" placeholder="Name" required />
             </div>
       
             {/* Email */}
             <div className="col-md-6 mb-3">
               <input type="email" className="form-control" placeholder="Email" required />
             </div>
       
             {/* Country */}
             <div className="col-md-6 mb-3">
               <select className="form-control" placeholder="Country">
                 {/* Example countries */}
                 <option value="" disabled selected>Select Country</option>
                 <option value="USA">USA</option>
                 <option value="Canada">Canada</option>
                 {/* ... other countries ... */}
               </select>
             </div>
       
             {/* Phone Number */}
             <div className="col-md-6 mb-3">
               <input type="tel" className="form-control" placeholder="Phone Number" required />
             </div>
       
             {/* Car */}
          
       
             {/* Pickup Date */}
             <div className="col-md-6 mb-3">
               <input type="date" className="form-control" placeholder="Pickup Date" required />
             </div>
       
             {/* Pickup Time */}
             <div className="col-md-6 mb-3">
               <select className="form-control" placeholder="Pickup Time">
            <option value="" disabled selected>Select Pickup Time</option>
                 <option value="09:00">09:00 AM</option>
                 <option value="10:00">10:00 AM</option>
                
               </select>
             </div>
       
             {/* Pickup Location */}
             <div className="col-md-6 mb-3">
               <input type="text" className="form-control" placeholder="Pickup Location" required />
             </div>
       
             {/* Drop Off Location */}
             <div className="col-md-6 mb-3">
               <input type="text" className="form-control" placeholder="Drop Off Location" required />
             </div>
       
             {/* Flight Info */}
             <div className="col-md-6 mb-3">
               <input type="text" className="form-control" placeholder="Flight Info" />
             </div>
       
             {/* No of Adults */}
             <div className="col-md-6 mb-3">
               <input type="number" className="form-control" placeholder="No of Adults" required />
             </div>
       
             {/* Number Of Children */}
             <div className="col-md-6 mb-3">
               <input type="number" className="form-control" placeholder="Number Of Children" />
             </div>
       
             {/* Additional Info */}
             <div className="col-md-12 mb-3">
               <textarea className="form-control " rows="1" placeholder="Additional Info Request"></textarea>
             </div>
           </div>
       
           {/* Submit Button */}
           <div className="mt-3">
             <button type="submit" className="btn btn-primary btn-block" >Submit</button>
           </div>
         </form>
       </div>
       
        )}
      </div>

      <div className="bgpic2" style={{ backgroundImage: `url(${driverpic})` }}>
      </div>
      <div className="fleet-outer">
            <div className="fleet-container">

<div className="fleet-text">
  <h2>Seamless Transport Solutions<br/>Connecting Singapore and Malaysia</h2>
  <p>Our extensive fleet of modern vehicles, a team of skilled professionals, and a commitment to punctuality ensure that your journey with us is smooth, secure,
     and stress-free. Whether you're a business looking to optimize your supply chain, a traveler seeking convenience, or anyone in between, we're here to cater to your unique transport needs.</p>
</div>

<div className="fleet-images">
  <img src={car1} alt="Blue Alphard" className="car-left" />
  <img src={car2} alt="White Alphard" className="car-right" />
</div>

</div>
 <button className="clasicbtn" onClick={handleBooking}>BOOK NOW</button>

      </div>
  
      <div className="accord-wrapper">
            <h2 style={{textAlign:'center'}}>Our Packages</h2>
            <div className="accordion-container">
                {accordionItems.map((item, index) => (
 <div key={index} className={`accordion-item ${activeIndex === index ? 'open' : ''}`}>                        <button onClick={() => toggleAccordion(index)} className="accordion-title">{item}</button>
                        {activeIndex === index && (
                            <div className="accordion-content">
                                <pre>{accordionContent}</pre> {/* Using <pre> to preserve formatting */}
                            </div>
                        )}
                    </div>
                ))}
            </div>
          <Link to='/pricing'>  <button onClick={handlePricing} className="know-more-btn">Know More</button></Link>
        </div>
        <div className="content-wrapper">
    <h3>THE PERFECT SEAT</h3>
    <div className="h1-wrapper">
        <div className="line"></div>
        <h1>OUR FLEET</h1>
        <div className="line"></div>
    </div>
    <p>At MalBay Express, we are unwavering in our commitment to safety, maintenance, and aesthetic excellence. Our versatile fleet exclusively features the latest luxury sedan, SUV, minibus,
       and coach models. Discover our carefully curated collection, thoughtfully designed to cater to your unique preferences."</p>

    <Slider {...settings}>
        <div>
          <img className="carosal" src={car1} alt="Blue Alphard"/>
        </div>
        <div>
          <img className="carosal" src={car2} alt="White Alphard"/>
        </div>
        <div>
          <img className="carosal" src={car1} alt="Blue Alphard"/>
        </div>
      </Slider>
</div>
    </div>

  );
};


export default Home