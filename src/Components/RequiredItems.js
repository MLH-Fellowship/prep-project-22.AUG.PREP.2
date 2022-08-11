import RequiredItem from './RequiredItem'
import Cap from '../assets/img/cap.png'
import Gloves from '../assets/img/gloves.png' 
import Jacket from '../assets/img/jacket.png'
import RainCoat from '../assets/img/raincoat.png' 
import Scarf from '../assets/img/scarf.png' 
import SunGlasses from '../assets/img/sunglasses.png' 
import SunCream from '../assets/img/suncream.png' 
import Umbrella from '../assets/img/umbrella.png' 
import WaterProofBoots from '../assets/img/water_proof_boots.png' 

const RequiredItems = ({ weatherKind }) => {

    const items = {
        'Rain': [RainCoat, WaterProofBoots, Umbrella],
        'Snow': [SunGlasses, Gloves, Jacket, Scarf],
        'Clear': [SunGlasses, Cap, SunCream]
    }

    return (
        <>
            {items[weatherKind] !== undefined && items[weatherKind].map((ele, index) => { 
                return <RequiredItem img_src={ele} key={index} />})}
        </>
    )
}

export default RequiredItems
