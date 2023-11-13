import NumerologyData from "../../../../../Components/Calculate/CalculateNumber";
import NummainContent from "../../../../../Components/Content/Report/Nummain";
import { DemoContent } from "../../../../../Components/Content/Report";

const NummainRp = () => {
  const { numMain } = NumerologyData();
  return (
    <div>
      {/* <div>{DemoContent.Nummain}</div> */}
      <h3>Số chủ đạo của bạn là {numMain}</h3>
      <div>{NummainContent[`num${numMain}`]}</div>
    </div>
  );
};
export default NummainRp;
