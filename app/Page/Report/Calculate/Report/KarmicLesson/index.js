import { KarmicLessonsContent } from "../../../../../Components/Content/Report";
import { DemoContent } from "../../../../../Components/Content/Report";
import RepresentCharacters from "../../../../../Components/Calculate/CalculateChar/Hooks";
import FullName from "../../../../../Components/Calculate/CalculateChar";

const KarmicLessonRp = () => {
  const KarmicLessonDemo = DemoContent.KarmicLesson;
  const { vowelName, characterArray } = FullName();
  const { resultArray, sumCompact } = RepresentCharacters(vowelName);
  const KarmicLessonNumbers = () => {
    const ComparisonsNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const newKarmicLessonNumber = ComparisonsNumber.filter(
      (element) => !resultArray.includes(element)
    );
    return newKarmicLessonNumber;
  };
  const showNameimgs = characterArray.map((showNameimg) => {
    return (
      <img src={`img/${showNameimg}${1}.png`} alt="" />
    );
  });
  const contentKarmicLessonMap = KarmicLessonNumbers().map(
    (KarmicLessonNumber) => {
      return (
        <div>
          <h4>Số nghiệp chướng {KarmicLessonNumber} đại biểu cho:</h4>
          <p>{KarmicLessonsContent[`num${KarmicLessonNumber}`]}</p>
        </div>
      );
    }
  );
  return (
    <div>
      <div>{KarmicLessonDemo}</div>
      <br />
      <div>{showNameimgs}</div>
      <br />
      <h4>Số nghiệp chướng của bạn là: {KarmicLessonNumbers().join(", ")}</h4>
      <div>{contentKarmicLessonMap}</div>
    </div>
  );
};
export default KarmicLessonRp;
