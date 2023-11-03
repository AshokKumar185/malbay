import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Collapse } from 'antd';
import { useNavigate } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import { ImLocation2 } from "react-icons/im";
import "./destination.css"

const Destination = () => {
    const [pricingArr, setPricingArr] = useState([]);
    const [isLoader, setLoader] = useState(true)
    const [openCollapsible, setOpenCollapsible] = useState(null); // State to track open collapsible item
    const navigate = useNavigate();

    const toggleCollapsible = (index) => {
        // Toggle the clicked collapsible item
        if (openCollapsible === index) {
            setOpenCollapsible(null); // Close the currently open collapsible
        } else {
            setOpenCollapsible(index); // Open the clicked collapsible
        }
    };

    const handleBookNowClick = () => {
        navigate('/booking');
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        axios
            .get('https://sg2mycabsing.onrender.com/api/packages/getallpackages')
            .then((response) => {
                setPricingArr(response.data);
                setLoader(!isLoader)
            })
            .catch((error) => {
                console.error('Error fetching pricingArr:', error);
            });
    }, []);


    return(
        <div>
            <div className='destination-heading-container'> 
            <h1 className='destination-heading'>SELECT A LOCATION <ImLocation2/> <span></span></h1>
            </div>

            {isLoader ? <div className='loader-container'>
                <BallTriangle type="ThreeDots" color="#C70039" height={50} width={50} />
            </div> :  <ul className="pricing-list-container">
                {pricingArr.map((pricingData, index) => (
                    <li key={pricingData._id} className="collapse-list-item">
                        <div className='collapsible-button-container'>
                            <button className="collapsible-button" onClick={() => toggleCollapsible(index)}>
                                {pricingData.location}
                            </button>
                        </div>
                        {openCollapsible === index && (
                            <div className="content">
                                <div className="flex-container">
                                    <ul className='carlists'>
                                        {pricingData.cars.map((carData, carIndex) => (
                                            <li key={carIndex}>
                                                {carData.carName} : {carData.price}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className='clasicbookkbtn' onClick={handleBookNowClick}>Book Now</button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>}
          
          
        </div>
    )
}

export default Destination