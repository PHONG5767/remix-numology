import { useContext } from "react";
import { inputContext } from "../index";
import TextCircle from "../../../../Components/Content/CircleContent";

const ContentCircle = () => {
    const { content } = useContext(inputContext);
    return (
        <p className="contentCircle">{TextCircle[`num${content}`]}</p>
    );
};

export default ContentCircle;
