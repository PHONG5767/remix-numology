import React, { useContext, useState } from 'react';
import { inputContext } from "../index";
import 'bootstrap/dist/css/bootstrap.css';
import '../circlenew.css';
import '../../homepage.css'

const CircleComponent = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22];
  const { setContent } = useContext(inputContext);
  const [selectedItem, setSelectedItem] = useState(0)

  const handleButtonClick = (index) => {
    setContent(index);
    setSelectedItem(index)
  };

  const makeStyleForLi = (number, index) => {
    if (number === 22) {
      return {}
    }

    const INIT_ROTATE_IN_DEG = 37;
    const rotate = INIT_ROTATE_IN_DEG + (index + 1) * 36;

    return {
      transform: `rotate(${rotate}deg) skewX(56deg)`
    }
  }
  const handleChangBackgroundCircle = (index) => {
    if (selectedItem === index) {
      return index === 10 ? 'selected22' : 'selected'
    }
    return ''
  }

  return (
    <ul className='d-flex circleContainer col-md-12'>
      {numbers.map((num, index) => (
        <li
          key={index}
          className={`textNum text${index} ${handleChangBackgroundCircle(index)}`}
          onClick={() => handleButtonClick(index)}
          style={makeStyleForLi(num, index)}
        >
          <p className='number'>{num}</p>
        </li>
      ))}
    </ul>
  );
};

export default CircleComponent;
