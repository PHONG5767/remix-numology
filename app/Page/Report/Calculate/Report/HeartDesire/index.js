import { HeartDesireContent } from "../../../../../Components/Content/Report";
import { DemoContent } from "../../../../../Components/Content/Report";
import RepresentCharacters from "../../../../../Components/Calculate/CalculateChar/Hooks";
import FullName from "../../../../../Components/Calculate/CalculateChar";
import { useState } from "react";

const HeartDesireRp = () => {
  const HeartDesireContentDemo = DemoContent.HeartDesire;
  const { vowelName, characterArray } = FullName();
  const { sum, sumCompact } = RepresentCharacters(vowelName);
  const [shouldHideDemo, setShouldHideDemo] = useState(false); 
  const showNameimgs = characterArray.map((showNameimg) => {
    const number = vowelName.includes(showNameimg) ? 2 : 0;
    return (
      <img src={`https://numology.com/img/${showNameimg}${number}.png`} alt="" />
    );
  });
  return (
    <div>
      <div>{HeartDesireContentDemo}</div>
      <p><strong>Tổng số linh hồn của bạn là: {sum}</strong></p>
      <h4>Số linh hồn của bạn là {sumCompact}</h4>
      <br/>
      <div>{showNameimgs}</div>
      <br/>
      <div className="hideDemo">{HeartDesireContent[`num${sumCompact}`]}</div>
    </div>
  );
};
export default HeartDesireRp;
