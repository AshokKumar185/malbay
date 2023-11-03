// Contact.js
import React ,{useState}from "react";
import Contactpic from '../../asset/contact_page_banner_img.jpg';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        
        await fetch('http://localhost:3002/api/contactform/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    

    return (
        <div className="contact-container">
            <div className="contact-header">
                <div className="background-image">
                    <img src={Contactpic} alt="Contact Background" />
                </div>
                <div className="overlay-text">
                    <h1>Contact us</h1>
                </div>
            </div>
            <div className="contactparas">
                <h1>Malbay's Professional Car Service - Contact us</h1>
                <h3>
                    Malbay is dedicated to providing the highest-quality, on-time
                    chauffeured global ground transportation service worldwide. Our
                    chauffeur service will exceed your expectations in excellence and
                    quality!
                </h3>
            </div>
            <div className="contact-details">
                <div className="contact-info">
                    <h1>How can we assist you?</h1>
                    <h3>Contact details for Malbay Express car services</h3><br/>
                    <h2><FontAwesomeIcon icon={faPhone} /><span style={{color:'#333333',fontSize:'20px',marginLeft:'10px'}}>+++123456789</span> </h2>
                    <h2> <FontAwesomeIcon icon={faEnvelope} /> <span style={{color:'#333333',fontSize:'20px',marginLeft:'10px'}}>info@email.com</span></h2>
                </div>
                <div className="book-car-service">
                <h3>Book your car service</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-1">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-1">
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-1">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Subject" 
                            name="subject" 
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-1">
                        <textarea 
                            className="form-control" 
                            placeholder="Message" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="mb-2">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>


            </div>
        </div>
    );
};

export default Contact;
