import "./location.css"
import sekinchan from "../../asset/sekinchan.jpg"
import mersing from "../../asset/mersing-1654740355.jpg"
import lumbur from "../../asset/kuala-lumpur-1654740535.jpg"
import highlands from "../../asset/cameron-highland-1654740575.jpg"
import { Link ,useNavigate} from "react-router-dom"
const Location = () => {

    const navigate = useNavigate();
    const handleBookNow=()=>{
        navigate('/destination');
    
        window.scrollTo(0, 0);
    }
    return(
        <div className="loacation-bg-container">
            <div className="sekinchan-container">
            <div className="framing-container">
                <h1 className="framing-heading">SEKINCHAN: Abundant Farming Haven</h1>
                  <p className="framing-desc">The name "Sekinchan" in Chinese translates to 'village ideal for cultivation'. The fertile land and favorable climate are perfect for cultivating rice, fruits, and oil palm trees. This area boasts the highest rice production per acre in Malaysia, making it a prime location for agriculture.
                    The total farming land dedicated to paddy fields and fruits spans approximately 4,300 acres.</p>
                      <button className="book-now-btn" onClick={handleBookNow}>BOOK NOW</button>
                </div>
                <img src={sekinchan} alt="location" width={600} style={{borderRadius:"5px"}} className="location-img" />
            </div>

            <div className="mersing-container">
            <img src={mersing} alt="location" width={600} style={{borderRadius:"5px"}} className="location-img" />
            <div className="framing-container">
                <h1 className="framing-heading">Mersing: Gateway to Natural Beauty and Heritage</h1>
                  <p className="framing-desc">Situated on the east coast of the Malaysian state of Johor, Mersing town beckons as a portal to nature and rich cultural heritage. Its fame stems from the bustling passenger boat jetty,
                   a launching point for daily boat excursions to an array of picturesque offshore islands.</p>
                   <button className="book-now-btn" onClick={handleBookNow}>BOOK NOW</button>
                </div>
                
            </div>

            <div className="lumbur-container">
            <div className="framing-container">
                <h1 className="framing-heading">Kuala Lumpur: Urban Marvel with Islamic Architecture</h1>
                  <p className="framing-desc">Kuala Lumpur, the vibrant capital of Malaysia, boasts a modern skyline dominated by the majestic Petronas Twin Towers. These iconic skyscrapers, standing tall at 451 meters, are adorned with elegant glass-and-steel architecture infused with intricate Islamic motifs. 
                  Visitors can explore the towers via a public skybridge and an observation deck, immersing themselves in the awe-inspiring cityscape.</p>
                  <button className="book-now-btn" onClick={handleBookNow}>BOOK NOW</button>
                </div>
                <img src={lumbur} alt="location" width={600} style={{borderRadius:"5px"}} className="location-img" />
            </div>

            <div className="highlands-container">
            <img src={highlands} alt="location" width={600} style={{borderRadius:"5px"}} className="location-img" />
            <div className="framing-container">
                <h1 className="framing-heading">Cameron Highlands: A Haven for Nature Enthusiasts</h1>
                  <p className="framing-desc">Cameron Highlands is a haven for nature enthusiasts seeking adventure and scenic pathways for exploration.
                   Take a leisurely stroll and uncover special spots like the enchanting Mossy Forest, making it an ideal destination for those who appreciate the beauty of the natural world.</p>
                   <button className="book-now-btn" onClick={handleBookNow}>BOOK NOW</button>
                </div>
                
            </div>
        </div>
    )
}

export default Location