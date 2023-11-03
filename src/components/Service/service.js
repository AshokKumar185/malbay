import { FaUserAlt,FaMedal,FaCalendarCheck } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { FaCarRear } from "react-icons/fa6";
import "./service.css"
import car from "../../asset/Airport-Transfer.jpg"
import car1 from "../../asset/Private-Aviation.jpg"
import car2 from "../../asset/Hourly-Charter.jpg"
import car3 from "../../asset/Long-DistanceTrip.jpg"
import { Link ,useNavigate} from "react-router-dom";


const Service = () => {
    const navigate = useNavigate();
    const handleLearnmore=()=>{
        navigate('/pricing');
    
        window.scrollTo(0, 0);
    }
    return(
        <div className="service-bg-container">
            <div className="luxury-car-container">
                <h1 className="luxury-heading">Elevated Luxury Car Services</h1>
                <p className="luxury-desc">Experience the epitome of luxury with Mundi. Enjoy unparalleled comfort, uncompromised safety,<br/> and a touch of excellence in every ride.</p>
                <ul className="services-list-container">
                    <li className="services-list-item">
                        <FaUserAlt className="services-icon"/>
                        <p className="services-desc">Elite Chauffeurs of Excellence</p>
                    </li>
                    <li className="services-list-item">
                        <FaCalendarCheck className="services-icon"/>
                        <p className="services-desc">Reliable Pick-Up Service: Punctuality Guaranteed</p>
                    </li>
                    <li className="services-list-item">
                        <FaMedal className="services-icon"/>
                        <p className="services-desc">Transparent Pricing: No Hidden Costs</p>
                    </li>
                    <li className="services-list-item">
                        <AiFillCar className="services-icon"/>
                        <p className="services-desc">Luxury Fleet: Latest Market Models</p>
                    </li>
                </ul>
            </div>
            <div className="airport-bg-container">
                <div className="airport-transfer-container">
                      <h1>Seamless Airport Transfers</h1>
                      <p>Embark on a journey of comfort and safety with our chauffeured airport transfer services,
                         tailored to both business and leisure travelers. Our dedicated operations department operates 24/7,
                          ready to accommodate last-minute or pre-planned bookings for groups of any size. Choose Mundi for a 
                          luxurious and secure journey to the airport, ensuring you arrive in style and peace of mind.
                        </p>
                    <button className="btn btn-info" onClick={handleLearnmore}>Learn more</button>
                </div>
                <img src={car} alt="cars" style={{borderRadius:"10px"}} className="car-img" />
            </div>
            <div className="privat-bg-container">
                <img src={car1} alt="cars" style={{borderRadius:"10px"}} className="car-img"/>
                <div className="private-transfer-container">
                      <h1>Exclusive Ground Transportation for Private Aviation</h1>
                      <p>Experience a level of ground transportation service like never before with Mundi,
                         dedicated to serving the private aviation market. Our reach extends across private airfields throughout the U.S. and worldwide, where we designate a dedicated private aviation transportation specialist to each client. 
                        Choose Mundi for seamless access to private airports and FBOs, delivered with our premium car service.</p>
                        <button className="btn btn-info" onClick={handleLearnmore}>Learn more</button>
                </div>
            </div>
            <div className="airport-bg-container">
                <div className="airport-transfer-container">
                      <h1>Flexible Hourly Charter</h1>
                      <p>For any trip, whether it's a brief jaunt or an extended journey, 
                        Mundi offers an adaptable hourly service. Have a chauffeur at your beck and call for as long as you require.
                         No specific destination information is necessary to arrange this service.
                         Simply provide your pick-up details and choose your travel stops while en route.</p>
                         <button className="btn btn-info" onClick={handleLearnmore}>Learn more</button>
                </div>
                <img src={car2} alt="cars" style={{borderRadius:"10px"}} className="car-img" />
            </div>

            <div className="extended-bg-container">
            <img src={car3} alt="cars" style={{borderRadius:"10px"}} className="car-img" />
                <div className="private-transfer-container">
                      <h1>Extended Excursions</h1>
                      <p>Experience top-tier transportation services with Mundi on long-distance journeys from Miami to neighboring cities and regions. Whether it's for business purposes or leisurely exploration of tourist attractions and iconic locales, revel in the lap of luxury within our premium vehicles, accompanied by a private chauffeur.
                         Every mile becomes a private retreat, allowing you to make the most of your travel in comfort and style.</p>
                         <button className="btn btn-info" onClick={handleLearnmore}>Learn more</button>
                </div>
              
            </div>
        </div>
    )
}

export default Service