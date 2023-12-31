import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../Home/home.css';
import "./Booking.css"

export const Booking = (props) => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [dropLocation, setLocation] = useState({})
  const [newBooking, setBooking] = useState({});
  const [car, setCars] = useState([]) //car details array
  const [isHovered, setHover] = useState(false)

  const { id } = useParams(); //get id from route


  const [formData, setFormData] = useState({
    tripType: "",
    name: "",
    email: "",
    country: "",
    phoneNumber: "",
    car: "",
    pickupDate: "",
    pickupTime: "",
    pickupLocation: "",
    dropLocation: "",
    flightInfo: "",
    numberOfAdults: "",
    numberOfChildren: "",
    additionalInfo: ""
  });



  useEffect(() => {
    if (dropLocation.location) {  // Check if location is defined to avoid setting undefined
      setFormData(prevFormData => ({
        ...prevFormData,
        dropLocation: dropLocation.location,
      }));
    }
  }, [dropLocation]);

 
  const clickToPayPage = (event) => {
    event.preventDefault();
    setBooking(formData);

    const selectedCar = car.find(eachCar => eachCar.carName === formData.car);
    const selectedCarPrice = selectedCar ? selectedCar.price : null;

    navigate("/payment", {
      state: {
        id,
        formData,
        selectedCarPrice
      }
    });

    window.scrollTo(20, 20);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');

        if (response.status === 200) {
          const countriesData = response.data;
          const countryNames = countriesData.map(country => country.name.common);
          setCountries(countryNames);
        } else {
          console.error('Failed to fetch data from the API');
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    const locationData = async () => {
      try {
        const response = await axios.get(`https://sg2mycabserver.onrender.com/api/packages/getpackage/${id}`)

        if (response.status === 200) {
          const locData = response.data
          setLocation(locData)
          setCars(response.data.cars)
          // console.log(response.data.cars[0].price);
        }
        else {
          console.error("Failed to fetch data from the API")
          console.log("error");
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
    fetchData();
    locationData();
  }, []);

  const clickToBack = () => {
    navigate("/pricing")
  }

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  const checkFill = formData.numberOfChildren.length && formData.numberOfAdults.length && formData.email.length && formData.country.length


  const { location } = dropLocation



  return (
    <div style={{ padding: '2% 6%' }}>
      <div className="form-container">
        <h2>Get Your Instant Quote</h2>
        <form className="forminhome" onSubmit={clickToPayPage}>
          <div className="row">
            <div className="col-12 mb-3">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="tripType"
                  id="oneWay"
                  onChange={handleInputChange}
                  value="oneWay"
                  required
                />
                <label className="form-check-label" htmlFor="oneWay">One-way</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="tripType"
                  id="twoWay"
                  value="twoWay"
                  required
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="twoWay">Two-way</label>
              </div>
            </div>
            {/* Name */}
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={handleInputChange}
              />
            </div>
            {/* Email */}
            <div className="col-md-6 mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                required
                onChange={handleInputChange}
              />
            </div>
            {/* Country */}
            <div className="col-md-6 mb-3">
              <select
                name="country"
                className="form-control"
                placeholder="Country"
                onChange={handleInputChange}
                style={{maxWidth:'100%'}}
              >
                <option value="" disabled>Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            {/* Phone Number */}
            <div className="col-md-6 mb-3">
              <input
                type="tel"
                name="phoneNumber"
                className="form-control"
                placeholder="Phone Number"
                required
                onChange={handleInputChange}
              />
            </div>
            {/* Car */}
            <div className="col-md-6 mb-3">
              <select
                name="car"
                className="form-control"
                placeholder="Car"
                onChange={handleInputChange}
                required
              >
                <option value="">Select cars</option>
                {car.map((eachCar) => <option value={eachCar.carName}>{eachCar.carName}</option>)}
              </select>
            </div>
            {/* Pickup Date */}
            <div className="col-md-6 mb-3">
              <input
                type="date"
                name="pickupDate"
                className="form-control"
                placeholder="Pickup Date"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Pickup Time */}
            <div className="col-md-6 mb-3">

              {/* <select
                name="pickupTime"
                className="form-control"
                placeholder="Pickup Time"
                onChange={handleInputChange}
                required
              >
                <option value="" >Select Pickup Time</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
              </select> */}

              <input type='time'
                className="input-time form-control"
                name="pickupTime"
                onChange={handleInputChange} />
            </div>

            {/* Pickup Location */}
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="pickupLocation"
                className="form-control"
                placeholder="Pickup Location"
                required
                onChange={handleInputChange}
              />
            </div>
            {/* Drop Off Location */}
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="dropLocation"
                className="form-control"
                placeholder="Drop Off Location"
                onChange={handleInputChange}
                value={location}
                required
              />
            </div>
            {/* Flight Info */}
            <div className="col-md-6 mb-3">
              <input
                type="text"
                name="flightInfo"
                className="form-control"
                required
                placeholder="Flight Info"
                onChange={handleInputChange}
              />
            </div>
            {/* No of Adults */}
            <div className="col-md-6 mb-3">
              <input
                type="number"
                name="numberOfAdults"
                className="form-control"
                placeholder="No of Adults"
                required
                onChange={handleInputChange}
              />
            </div>
            {/* Number Of Children */}
            <div className="col-md-6 mb-3">
              <input
                type="number"
                name="numberOfChildren"
                className="form-control"
                placeholder="Number Of Children"
                onChange={handleInputChange}
              />
            </div>
            {/* Additional Info */}
            <div className="col-md-12 mb-3">
              <textarea
                name="additionalInfo"
                className="form-control"
                rows="1"
                placeholder="Additional Info Request"
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* Submit Button */}
          <div className="back-next-btn-container">
            <button type="button"style={{marginBottom:'5px'}} className="btn btn-primary back-btn" onClick={clickToBack}>
              Back
            </button>
            <button type="submit" className={`btn btn-primary back-btn ${checkFill === 0 ? "no-access-btn" : ""}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              Next
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};
