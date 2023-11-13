import { DemoContent } from "../../../../../Components/Content/Report";
import NumerologyData from "../../../../../Components/Calculate/CalculateNumber";

import {
  FirstPeriodCycleContent,
  SecondPeriodCycleContent,
  ThirdPeriodCycleContent,
} from "../../../../../Components/Content/Report";
const PeriodNumberRp = () => {
  const PeriodNumberDemo = DemoContent.PeriodNumber;
  const { numDay, numMonth, numYear } = NumerologyData();
  return (
    <div>
      <div>{PeriodNumberDemo}</div>
      <h4>
        Các chu kỳ đường đời của bạn lần lượt là: {numMonth}, {numDay},{" "}
        {numYear}
      </h4>
      <p>{FirstPeriodCycleContent[`num${numMonth}`]}</p>

      <p>{SecondPeriodCycleContent[`num${numDay}`]}</p>

      <p>{ThirdPeriodCycleContent[`num${numYear}`]}</p>
    </div>
  );
};
export default PeriodNumberRp;
