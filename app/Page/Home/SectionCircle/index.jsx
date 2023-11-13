import React, { useState, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CircleComponent from './circle/handleClickCircle';
import './circlenew.css';
import ContentCircle from './circle/contentComponent';
import PrimaryButton from '../../../Components/Button';

export const inputContext = createContext();

const Circle = () => {
    const [content, setContent] = useState(0);

    const numButton = () => {
        if (content <= 8) {
            return (content + 1);
        } else if (content === 9) {
            return 11;
        } else if (content === 10) {
            return 22;
        } else {
            return content; 
        }
    };

    return (
        <inputContext.Provider value={{ content, setContent }}>
            <div className="container-fluid section-Circle row">
                <div className="col-md-1"></div>
                <div className="circle col-md-4">
                    <CircleComponent />
                </div>
                <div className="contentCircle col-md-7 p-3">
                    <div className='col-md-8'>
                        <h2>Ý NGHĨA CÁC CON SỐ TRONG THẦN SỐ HỌC</h2>
                        <ContentCircle />
                        <PrimaryButton to={`/than-so-hoc-${numButton()}`} primary btn>XEM CHI TIẾT</PrimaryButton>
                    </div>
                </div>
            </div>
        </inputContext.Provider>
    );
};

export default Circle;
