import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { contentHeader } from "../Content";

const HookBlog = ({ header, img, content }) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22];
    
    return (
        <div className="d-flex">
            <div className="col-md-8 p-5">
                <h2>{header}</h2>
                <img className="w-100" src={img} alt="" />
                <p>{content}</p>
            </div>
            <div className="col-md-4">
                <h3 className="mt-5 p-3">Xem thêm</h3>
                {arr.map((num) => (
                    <Link key={num} to={`/than-so-hoc-${num}`}>
                       <div className="mb-3"> {contentHeader[`num${num}`]}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HookBlog;
