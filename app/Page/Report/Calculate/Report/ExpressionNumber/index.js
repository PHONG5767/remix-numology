import RepresentCharacters from "../../../../../Components/Calculate/CalculateChar/Hooks";
import FullName from "../../../../../Components/Calculate/CalculateChar";
import {ExpressionNumberDescription} from "../../../../../Components/Content/Report";
import { DemoContent } from "../../../../../Components/Content/Report";

const ExpressionNumberRp = () => {
  const { characterArray } = FullName();
  const { sum, sumCompact } = RepresentCharacters(characterArray);
  const ExpressionNumbeContentDemo = DemoContent.ExpressionNumber
  const showNameimgs = characterArray.map((showNameimg) => {
    return <img src={`https://numology.com/img/${showNameimg}1.png`} alt="" />;
  });
  return (
    <>
    <div>{ExpressionNumbeContentDemo}</div>
    <br/>
      <div><p><strong>Tổng con số đệnh mệnh dựa theo tên của bạn là: {sum}</strong></p></div>
      <h4>Con số định mệnh của bạn là: {sumCompact}</h4>
      <div>{showNameimgs}</div>
      <br/>
      <div className="hideDemo">{ExpressionNumberDescription[`num${sumCompact}`]}</div>
    </>
  );
};
export default ExpressionNumberRp;
