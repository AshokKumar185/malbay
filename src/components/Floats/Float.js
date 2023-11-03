import React from 'react';
import './Float.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FloatButtons = () => {
  const phoneNumber = '+6582335292';
  const whatsappNumber = '+6582335292';

  const handlePhoneClick = () => {
    // Redirect to the WhatsApp call link when the phone icon is clicked
    window.location.href = `https://wa.me/${whatsappNumber}`;
  };

  return (
    <div className="float-buttons">
      <a href={`tel:${phoneNumber}`} className="contact-button">
        <FontAwesomeIcon icon={faPhone} onClick={handlePhoneClick} />
      </a>
      <a href={`https://wa.me/${whatsappNumber}`} className="whatsapp-button">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default FloatButtons;
