import NummainRp from "./Report/Nummain";
import BirdDayNumberRp from "./Report/BirdDayNumber";
import ChallengeNumberRp from "./Report/ChallengeNumber";
import BalanceNumberRp from "./Report/BalanceNumber";
import ExpressionNumberRp from "./Report/ExpressionNumber";
import HeartDesireRp from "./Report/HeartDesire";
import KarmicLessonRp from "./Report/KarmicLesson";
import PeriodNumberRp from "./Report/PeriodNumber";
import PersonalityNumberRp from "./Report/PersonalityNumber";
import SubconsciousRp from "./Report/SubconsciousSelfNumber";

import FullName from "../../../Components/Calculate/CalculateChar";
import NumerologyData from "../../../Components/Calculate/CalculateNumber";

import "bootstrap/dist/css/bootstrap.css";
import "../../SendForm/sendForm.css";

const ReportCal = () => {
  const { numMain, day, month, year } = NumerologyData();
  const { normalizedFullName } = FullName();
  return (
    <div className="bgFixed">
      <div>
        <p className="text-white pt-5 d-flex">
          Tên của bạn là:{" "}
          <span className="text-uppercase">{normalizedFullName}</span>
        </p>
      </div>
      <div>
        <p className="text-white d-flex">
          Sinh ngày: {day}/{month}/{year}
        </p>
      </div>
      <div>
        <p className="text-white fs-3">Số chủ đạo của bạn là: </p>
      </div>
      <div className="text-white col-sm-4 col-md-4 col-xl-4 col-12 containerRoute">
        <div className="border__bg"></div>
        <div className="backgroungCanvas"></div>
        <div className="numMain">{numMain}</div>
      </div>
      <div className="col-sm-10 col-md-8 col-xl-8 col-12">
        <div className="containerContentDemoRp">
          {" "}
          <NummainRp />{" "}
        </div>

        <div className="containerContentDemoRp">
          {" "}
          <BirdDayNumberRp />{" "}
        </div>

        <div className="containerContentDemoRp">
          {" "}
          <ChallengeNumberRp />{" "}
        </div>

        <div className="containerContentDemoRp">
          {" "}
          <BalanceNumberRp />{" "}
        </div>

        <div className="containerContentDemoRp">
          {" "}
          <ExpressionNumberRp />{" "}
        </div>

        <div className="containerContentDemoRp">
          {" "}
          <HeartDesireRp />{" "}
        </div>

        <div className="containerContentDemoRp">
          {" "}
          <KarmicLessonRp />{" "}
        </div>

        <div className="containerContentDemoRp">
          {" "}
          <PeriodNumberRp />{" "}
        </div>

        <div className="containerContentDemoRp">
          {" "}
          <PersonalityNumberRp />{" "}
        </div>

        <div className="containerContentDemoRp mb-5">
          {" "}
          <SubconsciousRp />{" "}
        </div>
      </div>
    </div>
  );
};
export default ReportCal;
