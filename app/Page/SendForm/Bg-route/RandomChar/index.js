import React, { useState, useEffect } from "react";
import NumerologyData from "../../../../Components/Calculate/CalculateNumber";
import FullName from "../../../../Components/Calculate/CalculateChar";
import styles from "../route.module.css";

const RandomChar = () => {
  const { day, month, year } = NumerologyData();
  const { characterArray } = FullName();

  const splitHook = (num) => {
    return num.toString().split("");
  };

  const arrChar = [
    ...characterArray,
    ...splitHook(day),
    ...splitHook(month),
    ...splitHook(year),
  ];

  const RandomCharItem = ({ char }) => {
    const [moveX, setMoveX] = useState(Math.floor(Math.random() * 500));
    const [moveY, setMoveY] = useState(Math.floor(Math.random() * 500));
    const [randomColor, setRandomColor] = useState(
      "#" + Math.floor(Math.random() * 16777215).toString(16)
    );
    const [randomFontSize, setRandomFontSize] = useState(
      Math.floor(Math.random() * 60) + 20
    );

    useEffect(() => {
      const interval = setInterval(RandomCharChild, 10000);
      RandomCharChild()
      return () => clearInterval(interval);
    }, []);


    const RandomCharChild = () => {
      setMoveX(Math.floor(Math.random() * 1000));
      setMoveY(Math.floor(Math.random() * 500));
      setRandomColor("#" + Math.floor(Math.random() * 16777215).toString(16));
    };

    return (
      <div
        className={styles.ranChild}
        style={{
          color: randomColor,
          transform: `translate(${moveX}px, ${moveY}px)`,
          fontSize: `${randomFontSize}px`,
        }}
      >
        {char}
      </div>
    );
  };

  const items = arrChar.map((char, index) => (
    <RandomCharItem key={index} char={char} />
  ));

  return <div className={styles.randomContainer}>{items}</div>;
};

export default RandomChar;
