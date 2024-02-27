import { useState, useContext } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import PrimaryButton from "../../../Components/Button";
import "bootstrap/dist/css/bootstrap.css";
import "./form.css";
import { MyContext } from "../../../Route";
import { useNavigate } from "@remix-run/react";
const Form = () => {
  const [value, setValue] = useState("");
  const { setDate, setName } = useContext(MyContext);
  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
    const newName = event.target.elements.Name.value;
    const newDate = value;
    localStorage.setItem("savedName", newName);
    localStorage.setItem("savedDate", newDate);

    const saveName = localStorage.getItem("savedName");
    const saveDate = localStorage.getItem("savedDate");
    setDate(saveDate);
    setName(saveName);
    setValue("");
    navigate("/report");
  };

  return (
    <div className="container-fluid d-flex justify-content-center containerForm">
      <form
        id="form-section"
        className="form col-md-8 d-flex justify-content-center"
        onSubmit={submitForm}
      >
        <div className="col-xl-8 col-lg-12 pt-5 pb-5 width85">
          <h2 className="text-center text-white">Tra Cứu Chi Tiết</h2>
          <div className="row-md-12">
            <p className="labelForm">Họ Tên Đầy Đủ</p>
            <input
              className="inputName input"
              type="text"
              name="Name"
              required
              placeholder="Ví dụ: Nguyễn Xuân A"
            />
          </div>
          <div className="row-md-12">
            <p className="labelForm">Ngày Tháng Năm Sinh</p>
            <DatePicker
              className="inputDate input"
              onChange={setValue}
              value={value}
              required
            />
          </div>
          <div className="pt-3">
            <PrimaryButton btn primary large type="submit">
              Xem Ngay
            </PrimaryButton>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Form;
