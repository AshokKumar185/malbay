import React from "react"
import  {RedirectFunction} from "react-router-dom"
import { Link ,useNavigate} from "react-router-dom"
import driverpic from '../driver.png'
import car1 from '../alphard-blue.png'
import car2 from '../alphard-white.png'
import city from "../city.jpeg"
import { MdHealthAndSafety } from "react-icons/md";
import { BsFillAlarmFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import "./about.css"

const About = () => {
    const navigate = useNavigate();
const handleKnowmore=()=>{
    navigate('/pricing');

    window.scrollTo(0, 0);
}
const handleServices=()=>{
    navigate('/services');

    window.scrollTo(0, 0);
}
    return(
        <div className="about-container">
            <div className="transport-container">
                <div className='welcome-container'>
                    <h1 className="welcome-heading">Welcome to Sincere Transport Services</h1>
                    <p className="welcome-desc">Sincere Transport Services offers a dependable, secure, and budget-friendly MVP Private Car service,
                        catering to travel between Singapore and Johor Bahru, Legoland Malaysia, as well as various other destinations in Malaysia.<span className="welcome-span"> Our range of private transport options is designed to meet the unique needs of every traveler, providing private transfers and hire-with-driver services for individuals, families, groups,
                        and both leisure and business travelers.All our transport services include a dedicated driver, ensuring a seamless and enjoyable journey.</span> 
                    </p>
                    <button type='button' onClick={handleKnowmore} className='know-more-bt'>KNOW MORE</button>
                </div>
                <img src={car2} alt="car" width={450} style={{marginBottom:"45px"}} className="about-car-img" />
            </div>
            <div style={{display:"flex",alignItems:"flex-end",justifyContent:"flex-end"}}>
            <img src={car1} alt="xc" className='half-image' width={300} height={180} style={{marginTop:"40px",borderRadius:"10px",marginRight:"50px",marginTop:"40px"}}/>
            </div>
            <div className='travel-container'>
                <div className='choose-container'>
                <h1 className='welcome-heading'>WHY CHOOSE OUR TRAVEL SERVICES</h1>
                <p className='travel-desc'>At Sincere Transport Services, we prioritize your safety and comfort. Our commitment extends to providing private car transportation at exceptionally affordable rates,
                     ensuring that every family's visit to Legoland Malaysia is both accessible and enjoyable.</p>
                    </div>
                    <ul className='choose-list-container'>
                          <li className='choose-list-item-container'>
                            <MdHealthAndSafety className='safety-icon'/>
                             <h1 className='safety-heading'>Your Safety is Our Priority</h1>
                             <p className='safety-desc'>At Sincere Transport Services, safety is paramount. We adhere to the highest road safety standards to ensure the well-being and security of all passengers throughout their journey.</p>
                          </li>
                          <li className='choose-list-item-container'>
                            <BsFillAlarmFill className='safety-icon'/>
                             <h1 className='safety-heading'>Punctuality Matters</h1>
                             <p className='safety-desc'>At Sincere Transport Services, we prioritize punctuality to guarantee exceptional private car services that enhance the quality of your extraordinary journey.</p>
                          </li>
                          <li className='choose-list-item-container'>
                            <FaTrophy className='safety-icon'/>
                             <h1 className='safety-heading'>Quality Service, Fair Prices</h1>
                             <p className='safety-desc'>At Sincere Transport Services, excellence doesn't come at a premium. Enjoy top-tier private car services at prices that make sense, reflecting our dedication to value and quality.</p>
                          </li>
                    </ul>
                    <div className='view-service-container'>
                <button type='button'onClick={handleServices} className='know-more-bt'>VIEW SERVICES</button>
                    </div>
            </div>
        </div>
    )
}

export default About