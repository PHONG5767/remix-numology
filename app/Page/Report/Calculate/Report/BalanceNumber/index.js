import RepresentCharacters from "../../../../../Components/Calculate/CalculateChar/Hooks";
import FullName from "../../../../../Components/Calculate/CalculateChar";
import BalanceNumberContent from "../../../../../Components/Content/Report/BalanceNumber";
import { DemoContent } from "../../../../../Components/Content/Report";

const BalanceNumberRp = () => {
  const { firstFullName } = FullName();
  const { sum, sumCompact } = RepresentCharacters(firstFullName);
  const BalanceNumberContentDemo = DemoContent.BalanceNumber

  const showNameimgs = firstFullName.map((showNameimg) => {
    return <img src={`img/${showNameimg}1.png`} alt="" />;
  });
  return (
    <>
      <div>{BalanceNumberContentDemo}</div>
      <h4>Số cân bằng trong cuộc sống của bạn là: {sumCompact}</h4>
      <div>{showNameimgs}</div>
      <br/>
      <p><strong>Tổng số cân bằng của bạn là: {sum}</strong></p>
      <div><p>{BalanceNumberContent[`num${sumCompact}`]}</p></div>
    </>
  );
};
export default BalanceNumberRp;
