import React, { useState, useEffect } from "react";
import { DemoContent } from "../../../../../Components/Content/Report";
import YourSelfNumberContent from "../../../../../Components/Content/Report/SubconsciousSelfNumber";
import FullName from "../../../../../Components/Calculate/CalculateChar";
import RepresentCharacters from "../../../../../Components/Calculate/CalculateChar/Hooks";

const SubconsciousRp = () => {
  const { characterArray } = FullName();
  const { resultArray } = RepresentCharacters(characterArray);
  const ComparisonNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [countYes, setCountYes] = useState(0);

  useEffect(() => {
    let newCountYes = 0;
    for (const ComparisonNumber of ComparisonNumbers) {
      const checkYesNo = checkSubconscious(ComparisonNumber);
      if (checkYesNo === "Có") {
        newCountYes++;
      }
    }
    setCountYes(newCountYes);
  }, [resultArray]);

  const checkSubconscious = (ComparisonNumber) => {
    const checked = resultArray.includes(ComparisonNumber) ? "Có" : "Không";
    return checked;
  };

  const SubconsciousContentDemo = DemoContent.SubconsciousSelfNumber;

  return (
    <div>
      <div>{SubconsciousContentDemo}</div>
      <ul>
        {ComparisonNumbers.map((ComparisonNumber) => (
          <li key={ComparisonNumber}>
            {ComparisonNumber}: {checkSubconscious(ComparisonNumber)}
          </li>
        ))}
      </ul>
      <h4>Số tiềm thức của bạn là: {countYes}</h4>
      <p>{YourSelfNumberContent[`num${countYes}`]}</p>
     </div>
  );
};

export default SubconsciousRp;
