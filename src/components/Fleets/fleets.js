import "./fleets.css"
import innova from "../../asset/Toyota-Innova-Hycross-Price-Images-Reviews-Specs-and-Features-removebg-preview.png"
import alphard from "../../asset/toyota-alphard-1538032589-removebg-preview.png"
import hyundai from "../../asset/post12343_8-removebg-preview.png"
import innova1 from "../../asset/toyota-innova.png"
import alphard1 from "../../asset/alphard_ogp_02-removebg-preview.png"
import hyundai1 from "../../asset/starex-exterior-hyper-silver-removebg-preview.png"

const Fleets = () => {
    return(
        <div className="fleets-container">
            <div className="fleets-top-container">
                <div className="ultimate-head-container">
                 <h1 className="ultimate-heading">FIND THE ULTIMATE BARGAINS</h1>
                 </div>
            </div>
            <ul className="fleet-list-container">
                <li className="fleet-list-item">
                    <img src={innova} alt="fleet-img" className="fleet-img" width={350} />
                    <h1  style={{marginTop:"20px"}}>Toyota Innova</h1>
                </li>
                <li className="fleet-list-item">
                    <img src={alphard} alt="fleet-img" className="fleet-img" width={350} />
                    <h1>Toyota Alphard</h1>
                </li>
                <li className="fleet-list-item">
                    <img src={hyundai} alt="fleet-img" className="fleet-img" width={350} />
                    <h1 style={{marginTop:"20px"}}>Hyundai Starex</h1>
                </li>
            </ul>
            <div className="innova-bg-container">
                <div className="innova-container">
                    <img src={innova1} alt="innova" className="innova-img" />
                    <div className="innova-heading-container">
                        <h1 className="innova-heading">Toyota Innova</h1>
                        <h4 className="innova-seats">7 SEATER LUXURY CAR</h4>
                        <p className="innova-desc">The Toyota Innova is a basic size MPV popular as limos throughout Asia. The Innova provides strong frame and ladder framework, dependability, big seating capability and ease of service.
                        The big travel luggage ability makes it great for airport transfers and cross border transfers in between Singapore and Malaysia.</p>
                        <ul className="car-details-list-container">
                            <li className="car-details-list-item">
                                <h1>5</h1>
                                <h4>Passengers</h4>
                            </li>
                            <li className="car-details-list-item">
                                <h1>3</h1>
                                <h4>Luggages</h4>
                            </li>
                            <li className="car-details-list-item">
                                <h1>4</h1>
                                <h4>Doors</h4>
                            </li>
                            <li className="car-details-list-item" >
                                <h1>7</h1>
                                <h4>SRS Airbags</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="alphard-bg-container">
                <div className="alphard-container">
                    <img src={alphard1} alt="innova" className="alphard-img" />
                    <div className="alphard-heading-container">
                        <h1 className="innova-heading">Elegant Transcendence</h1>
                        <h4 className="innova-seats">A Luxurious 8-Seater Journey</h4>
                        <p className="innova-desc">The Elegant Transcendence is a premium 8-seater MPV that exudes opulence and comfort, redefining travel standards. Highly favored as the quintessential limousine across Asia, this vehicle seamlessly blends robust security features, exceptional spaciousness, and luxury, setting it apart from ordinary MPVs. Its capacious luggage capacity makes it the ultimate choice for airport transfers and hassle-free cross-border journeys between Singapore and Malaysia.
                         Experience transcendent travel like never before with the Elegant Transcendence.</p>
                        <ul className="car-details-list-container">
                            <li className="car-details-list-item">
                                <h1>8</h1>
                                <h4>Passengers</h4>
                            </li>
                            <li className="car-details-list-item">
                                <h1>4</h1>
                                <h4>Luggages</h4>
                            </li>
                            <li className="car-details-list-item">
                                <h1>4</h1>
                                <h4>Doors</h4>
                            </li>
                            <li className="car-details-list-item" >
                                <h1>7</h1>
                                <h4>SRS Airbags</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="innova-bg-container">
                <div className="innova-container">
                    <img src={hyundai1} alt="innova" className="hyundai-img" />
                    <div className="innova-heading-container">
                        <h1 className="innova-heading">Hyundai Starex</h1>
                        <h4 className="innova-seats" style={{marginBottom:"13px"}}>10 SEATER LUXURY CAR</h4>
                        <p className="innova-desc">The Opulent Odyssey, embodied by the Hyundai Starex, 
                        stands as the ultimate symbol of elegance, style, and versatility. With a capacity to comfortably seat up to 10 passengers or accommodate 7 passengers along with 2 substantial luggage pieces and 4 convenient hand-carry items, it redefines the concept of spacious travel. Whether for family adventures or transporting large groups, the Opulent Odyssey is your ideal choice, ensuring a luxurious and comfortable journey for all.</p>
                        <ul className="car-details-list-container">
                            <li className="car-details-list-item">
                                <h1>10</h1>
                                <h4>Passengers</h4>
                            </li>
                            <li className="car-details-list-item">
                                <h1>4</h1>
                                <h4>Luggages</h4>
                            </li>
                            <li className="car-details-list-item">
                                <h1>4</h1>
                                <h4>Doors</h4>
                            </li>
                            <li className="car-details-list-item">
                                <h1>4</h1>
                                <h4>SRS Airbags</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fleets