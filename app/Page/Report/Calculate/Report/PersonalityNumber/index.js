import FullName from "../../../../../Components/Calculate/CalculateChar"
import RepresentCharacters from "../../../../../Components/Calculate/CalculateChar/Hooks"
import { DemoContent } from "../../../../../Components/Content/Report"
import {PersonalityNumberContent} from "../../../../../Components/Content/Report"
const PersonalityNumberRp = () =>{
    const {consonantName,characterArray} = FullName()
    const {sumCompact} = RepresentCharacters(consonantName)
    const PersonalityNumberContentDemo = DemoContent.PersonalytyNumber
    const showNameimgs = characterArray.map((showNameimg) => {
        const number = consonantName.includes(showNameimg) ? 1 : 0;
        return (
          <img src={`https://numology.com/img/${showNameimg}${number}.png`} alt="" />
        );
      });
    return (
        <div>
            <div>{PersonalityNumberContentDemo}</div>
            <h4>Chỉ số tính cách của bạn là: {sumCompact}</h4>
            <div>{showNameimgs}</div>
            <p>{PersonalityNumberContent[`num${sumCompact}`]}</p>
        </div>
    )
}
export default PersonalityNumberRp