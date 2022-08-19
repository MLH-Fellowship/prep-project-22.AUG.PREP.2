import "../assets/styles/RequiredItems.css"
import Cap from '../assets/img/cap.png'
import Gloves from '../assets/img/gloves.png' 
import Jacket from '../assets/img/jacket.png'
import RainCoat from '../assets/img/raincoat.png' 
import Scarf from '../assets/img/scarf.png' 
import SunGlasses from '../assets/img/sunglasses.png' 
import SunCream from '../assets/img/suncream.png' 
import Umbrella from '../assets/img/umbrella.png' 
import WaterProofBoots from '../assets/img/water_proof_boots.png' 
import Watch from '../assets/img/watch.png'
import Goggles from '../assets/img/goggles.png'
import FlashLight from '../assets/img/flashlight.png'
import Mask from '../assets/img/mask.png'


const RequiredItems = ({ weatherKind }) => {
    
    const getItems = (x) => {
        switch(x) {
            case 'Rain':
                return [RainCoat, WaterProofBoots, Umbrella]
            case 'Snow': 
                return [SunGlasses, Gloves, Jacket, Scarf]
            case 'Clear':
                return [SunGlasses, Cap, SunCream]
            case 'Clouds':
                return [Cap, Watch]
            case 'Tornado':
                return [Goggles, FlashLight]
            case 'Drizzle':
                return [RainCoat, Umbrella, WaterProofBoots]
            case 'Thunderstorm':
                return [RainCoat, FlashLight, WaterProofBoots]
            case 'Squall':
            case 'Ash':
            case 'Dust':
            case 'Sand':
            case 'Fog':
            case 'Haze':
            case 'Smoke':
            case 'Mist':
                return [Watch, Goggles, Mask]
            default:
                return undefined
        }
    }

    return (
        <div className="items-card-container">
            <h2>Items to Bring</h2>
            <div className='items-container'>
                {
                    getItems(weatherKind) !== undefined && 
                    getItems(weatherKind).map((ele, index) => { 
                        return (
                                <div key={index} className="items-card">
                                    <img src={ele} alt="required item" />
                                </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RequiredItems
