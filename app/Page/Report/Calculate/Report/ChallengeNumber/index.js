import NumerologyData from "../../../../../Components/Calculate/CalculateNumber";
import {
  FourthChallenge,
  ThirdChallenge,
  FirstChallenge,
  SecondChallenge,
} from "../../../../../Components/Content/Report/ChallengeNumber";
import { DemoContent } from "../../../../../Components/Content/Report";

const ChallengeNumberRp = () => {
  const ChallengeNumberContentDemo = DemoContent.ChallengeNumber
  const { numDay, numMonth, numYear, numMain } = NumerologyData();
  return (
    <div>
      <div>{ChallengeNumberContentDemo}</div>
      <div>
        <h4>Thử thách đầu tiên của bạn là: {numDay}</h4>
        <div>{FirstChallenge[`num${numDay}`]}</div>
      </div>
      <div>
        <h4>Thử thách thứ hai của bạn là: {numMonth}</h4>
        <div>{SecondChallenge[`num${numMonth}`]}</div>
      </div>
      <div>
        <h4>Thử thách thứ ba của bạn là: {numYear}</h4>
        <div>{ThirdChallenge[`num${numYear}`]}</div>
      </div>
      <div>
        <h4>Thử thách thứ tư của bạn là: {numMain}</h4>
        <div>{FourthChallenge[`num${numMain}`]}</div>
      </div>
    </div>
  );
};
export default ChallengeNumberRp;
