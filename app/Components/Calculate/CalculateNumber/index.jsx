import React, { useContext } from "react";
import { MyContext } from "../../../Route";
import { sumNumerology, calculateNumerologyOfBirthDay } from "../Hooks";


const NumerologyData = () => {
  const dataFromContext = useContext(MyContext);
  const contextData = new Date(dataFromContext.date);

  const day = contextData.getDate();
  const month = contextData.getMonth() + 1;
  const year = contextData.getFullYear();
  const birthday = [day, month, year];

  const numMain = calculateNumerologyOfBirthDay(birthday);
  const numDay = sumNumerology(day);
  const numMonth = sumNumerology(month);
  const numYear = sumNumerology(year);
  return {
    numMain,
    numDay,
    numMonth,
    numYear,
    day,
    month,
    year
  };
};

export default NumerologyData;

