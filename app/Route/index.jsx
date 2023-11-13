import { createContext, useState, useEffect } from "react";

const MyContext = createContext();

const FormValue = ({ children }) => {
  const [date, setDate] = useState(() => {
    if (typeof window !== "undefined") {
      const saveDate = localStorage.getItem("savedDate");
      return saveDate ? new Date(saveDate) : null;
    }
    return null;
  });

  const [name, setName] = useState(() => {
    if (typeof window !== "undefined") {
      const saveName = localStorage.getItem("savedName");
      return saveName || '';
    }
    return '';
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDate = localStorage.getItem("savedDate");
      const savedName = localStorage.getItem("savedName");

      if (savedDate) {
        setDate(new Date(savedDate));
      }

      if (savedName) {
        setName(savedName);
      }
    }
  }, []);

  return (
    <MyContext.Provider
      value={{
        date,
        setDate,
        name,
        setName,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, FormValue };
