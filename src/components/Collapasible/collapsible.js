import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./collapsible.css"


const Collapsible = (props) => {
    const {eachArr } = props
  const [isCollapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const toggleCollapsible = () => {
    setCollapsed(!isCollapsed);
  };
  const handleBookNowClick = () => {
    navigate('/booking');
    window.scrollTo(0, 0);
  };
  return (
    <li className="collapse-list-item">
        <div className='collapsible-button-container'> 
            <button className="collapsible-button" onClick={toggleCollapsible}>
       {eachArr}
      </button>
      </div>
      {isCollapsed && (
       <div className="content">
       <div className="flex-container">
         <ul className='carlists'>
           <li><p className='pararara'>Toyota Innova : SGD 100</p></li>
           <li><p className='pararara'>Toyota Alphard : SGD 130</p></li>
           <li><p className='pararara'>Hyundai Starex : SGD 130</p></li>
         </ul>
         <button className='clasicbookkbtn' onClick={handleBookNowClick}>Book Now</button>       </div>
     </div>
     
      )}
    </li>
  );
}


export default Collapsible;
