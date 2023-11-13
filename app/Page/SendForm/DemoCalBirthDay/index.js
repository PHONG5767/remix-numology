import NumerologyData from "../../../Components/Calculate/CalculateNumber";
import FullName from "../../../Components/Calculate/CalculateChar";
import React, { useState, useEffect, useCallback } from "react";
import { Icon } from "@iconify/react";
// import "../../../index.css";
import "../sendForm.css";

const ConditionalBox = ({ children, myStep, currentStep, onComplete }) => {
  const [isVisible, setIsVisible] = useState(myStep <= currentStep);

  useEffect(() => {
    let timer = null;

    if (myStep === currentStep) {
      setIsVisible(true);

      timer = setTimeout(() => {
        onComplete();
      }, 500);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [myStep, currentStep]);

  return (
    <div
      style={{
        display: isVisible ? "block" : "none",
      }}
    >
      {children}
    </div>
  );
};

const DemoCalBirthDay = () => {
  const { numMain, numDay, numMonth, numYear, day, month, year } =
    NumerologyData();
  const { normalizedFullName, characterArray } = FullName();
  const [currentStep, setCurrentStep] = useState(1);

  const splits = (children) => {
    return children.toString().split("");
  };

  const numbersDay = splits(day);
  const numbersMonth = splits(month);
  const numbersYear = splits(year);

  const convertToSumString = (children) => {
    if (children.length > 1) {
      return children.join(" + ");
    } else {
      return children[0].toString();
    }
  };

  const handleStepComplete = useCallback(() => {
    setCurrentStep((step) => step + 1);
  }, []);

  return (
    <div className="bg-container-grid p-3">
      <p className="nameDemo">Xin chào: {normalizedFullName}</p>
      <div className="grid-container">
        {/* Day */}
        <div className="boxChild">
          <ConditionalBox
            myStep={1}
            currentStep={currentStep}
            onComplete={handleStepComplete}
          >
            {day}
          </ConditionalBox>
        </div>

        <div className="boxChild iconbg">
          <ConditionalBox
            myStep={2}
            currentStep={currentStep}
            onComplete={handleStepComplete}
          >
            <Icon icon="mingcute:arrow-right-fill" />
          </ConditionalBox>
        </div>

        <div className="boxChild col3">
          <ConditionalBox
            myStep={3}
            currentStep={currentStep}
            onComplete={handleStepComplete}
          >
            {convertToSumString(numbersDay)}
          </ConditionalBox>
        </div>

        <div className="boxChild iconbg">
          <ConditionalBox
            myStep={4}
            currentStep={currentStep}
            onComplete={handleStepComplete}
          >
            <Icon icon="mingcute:arrow-right-fill" />
          </ConditionalBox>
        </div>

        <div className="boxChild">
          <ConditionalBox
            myStep={5}
            currentStep={currentStep}
            onComplete={handleStepComplete}
          >
            {numDay}
          </ConditionalBox>
        </div>

        {/* Month */}
        <div className="boxChild">
          <ConditionalBox
            myStep={6}
            currentStep={currentStep}
            onComplete={handleStepComplete}
          >
            {month}
          </ConditionalBox>
        </div>

        <div className="boxChild iconbg">
          <ConditionalBox
            myStep={7}
            currentStep={currentStep}
            onComplete={handleStepComplete}
          >
            <Icon icon="mingcute:arrow-right-fill" />
          </ConditionalBox>
        </div>

        <div className="boxChild col3">
          <ConditionalBox
            myStep={8}
            currentStep={currentStep}
            onComplete={handleStepComplete}
          >
            {convertToSumString(numbersMonth)}
          </ConditionalBox>
        </div>

        <div className="boxChild iconbg">
          <ConditionalBox
            myStep={9}
            currentStep={currentStep}
            onComplete={handleStepComplete}
          >
            <Icon icon="mingcute:arrow-right-fill" />
          </ConditionalBox>
        </div>

        <div className="boxChild">
          <ConditionalBox
            myStep={10}
            currentStep={currentStep}
            onComplete={handleStepComplete}
          >
            {numMonth}
          </ConditionalBox>
        </div>

        {/* Year */}
        <div className="boxChild">
          <ConditionalBox
            myStep={11}
            currentStep={currentStep}
            onComplete={handleStepComplete}
          >
            {year}
          </ConditionalBox>
        </div>

        <div className="boxChild iconbg">
          <ConditionalBox
            myStep={12}
            currentStep={currentStep}
            onComplete={handleStepComplete}
          >
            <Icon icon="mingcute:arrow-right-fill" />
          </ConditionalBox>
        </div>

        <div className="boxChild col3">
          <ConditionalBox
            myStep={13}
            currentStep={currentStep}
            onComplete={handleStepComplete}
          >
            {convertToSumString(numbersYear)}
          </ConditionalBox>
        </div>

        <div className="boxChild iconbg ">
          <ConditionalBox
            myStep={14}
            currentStep={currentStep}
            onComplete={handleStepComplete}
          >
            <Icon icon="mingcute:arrow-right-fill" />
          </ConditionalBox>
        </div>

        <div className="boxChild">
          <ConditionalBox
            myStep={15}
            currentStep={currentStep}
            onComplete={handleStepComplete}
          >
            {numYear}
          </ConditionalBox>
        </div>

        {/* Final */}
        <div className="col6 boxChild iconbg">
          <ConditionalBox
            myStep={16}
            currentStep={currentStep}
            onComplete={handleStepComplete}
          >
            <Icon icon="typcn:arrow-right-outline" />
          </ConditionalBox>
        </div>

        <div className="col7 boxChild">
          <ConditionalBox
            myStep={17}
            currentStep={currentStep}
            onComplete={handleStepComplete}
          >
            {numMain}
          </ConditionalBox>
        </div>
      </div>
    </div>
  );
};

export default DemoCalBirthDay;
