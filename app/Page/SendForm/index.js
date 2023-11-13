import React, { useState, useEffect, useContext } from "react"; 
import { useNavigate } from "react-router-dom";
import DemoCalBirthDay from "./DemoCalBirthDay";
import BgRoute from "./Bg-route";
import { MyContext } from "../../Route"; 
import DemoRp from "./DemoRp";


function SendForm() {
  const navigate = useNavigate();
  const { date } = useContext(MyContext);

  useEffect(() => {
    if (date !== null ) {
      const timeout = setTimeout(() => {
        setShowBgContainer(false);
        setShowRoute(true);
      }, 10000);

      return () => clearTimeout(timeout);
    } else {
      return navigate("/");
    }
  }, [date]);

  const [showBgContainer, setShowBgContainer] = useState(date !== null);
  const [showRoute, setShowRoute] = useState(false);

  return (
    <>
      {showBgContainer && <DemoCalBirthDay />}
      {showRoute && <BgRoute />}
      <DemoRp />
    </>
  );
}

export default SendForm;
