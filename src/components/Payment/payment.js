import {useParams} from "react-router-dom"
import { ImLocation2 } from "react-icons/im";
import { BiTransferAlt } from "react-icons/bi";
import qrCode from "../../asset/WhatsApp_Image_2023-10-25_at_10.58.26_AM-removebg-preview.png"
import "./payment.css"
import paynow from '../../asset/paynow2.jpg'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const Payment = () => {
  const location = useLocation();
  const { id, formData, selectedCarPrice } = location.state;
    console.log(id,formData,selectedCarPrice)
console.log(formData.pickLocation)
console.log(formData.dropLocation)
console.log(formData.selectedCarPrice)
console.log(formData.adults)
console.log(formData.children)
console.log(formData.carName)

// const GST =()=>{
//  gstPrice = numericPrice/0.18%
  
// }
const match = selectedCarPrice && selectedCarPrice.match(/\d+/);
const numericPrice = match ? parseInt(match[0], 10) : 0;

// State variables for GST and total price
const [gst, setGst] = useState(0);
const [totalPrice, setTotalPrice] = useState(0);
console.log(numericPrice);
useEffect(() => {
  if (numericPrice) {
    const gstAmount = numericPrice * 0.18;  // Assuming GST rate is 18%
    const totalPriceAmount = numericPrice + gstAmount;

    setGst(gstAmount);
    setTotalPrice(totalPriceAmount);
  }
}, [numericPrice]);

// Log values to console
console.log('GST Amount:', gst);
console.log('Total Price:', totalPrice);
  console.log(formData.dropLocation)

    return (
        <div className="payment-bg-container">
            <div className="detail-image-container">
                <div className="payment-card-container">
                    <div style={{display:'flex',justifyContent:'space-between'}} className="payment-destination"><p>{formData.pickLocation}</p> <p><BiTransferAlt style={{color: "#eadeded4",marginLeft:"20px"}}/></p><p> {formData.dropLocation}</p></div>
                    <h6 className="payment-location">Car Name  <span className="payment-destination">{formData.carName}</span></h6>
                    <h6 className="payment-location">No of Adults  <span className="payment-destination">{formData.adults}</span></h6>
                    <h6 className="payment-location">No of Children  <span className="payment-destination">{formData.children}</span></h6>
                    <hr/>
                    <h6 className="payment-location">Price  <span className="payment-destination">{numericPrice}</span></h6>
                    <h6 className="payment-location">GST  <span className="payment-destination">{gst}</span></h6>
                    <hr/>
                    <h6 className="payment-location">Amount  <span className="payment-destination">{totalPrice}</span></h6>

                    <button className="cancel-payment-btn">Cancel Payment</button>
                </div>
                <div className="payment-image-container">
                    <h2 className="invoice-heading">Pay Invoice</h2>
                    <p className="invoice-desc">Scan QR code with your <img style={{width:"18%"}} src={paynow} alt="PayNow"></img> <br/>to proceed with payment</p>
                <img src={qrCode} alt="qr code" className="qr-code-image" width={200} />
                <button className="payment-pay-btn">Pay Now</button>
                </div>
            </div>
        </div>
    )
}

export default Payment