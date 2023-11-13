import NumerologyData from "../../../../../Components/Calculate/CalculateNumber";
import BirDayNumberContent from "../../../../../Components/Content/Report/BirdDayNumber";
import { DemoContent } from "../../../../../Components/Content/Report";

const BirdDayNumberRp = () => {
  const { day } = NumerologyData();
  const BirdDayNumberContentDemo = DemoContent.BirthDayNumber;
  return (
    <div>
      <div>{BirdDayNumberContentDemo}</div>
      <h4>Ngày sinh của bạn là {day}</h4>
      <p>{BirDayNumberContent[`num${day}`]}</p>
    </div>
  );
};
export default BirdDayNumberRp;
