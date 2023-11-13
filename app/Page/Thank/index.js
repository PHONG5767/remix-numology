import React, { useState, useEffect } from "react";
import ImgFeedback from "../GetPass/hook/imgFeedback";

const Thankyou = () => {
  const [code, setCode] = useState(null);
  const [copied, setCopied] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCode = localStorage.getItem("code");
      if (storedCode) {
        setCode(new Date(storedCode));
      }
    }
  }, []);

  function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const textToCopy = element.textContent;
    const tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    setCopied({ ...copied, [elementId]: true });
  }

  return (
    <div>
      <h3 className="text-center pt-3">
        File sẽ được gửi tự động về email của bạn ngay sau khi thanh toán
      </h3>
      <div className="d-flex flex-row justify-content-center align-items-center flex-wrap" id="paymentForm">
        <div className="col-12 col-md-3">
          <img
            width="100%"
            src={`https://api.vietqr.io/image/970432-1799799789-jOLMoDx.jpg?accountName=NGUYEN%20XUAN%20PHONG&amount=49000&addInfo=${code}`}
            alt=""
          />
        </div>
        <div className="col-12 col-md-4 border rounded pt-3 ps-5">
          <h4>THÔNG TIN THANH TOÁN</h4>
          <div>
            <p>Ngân Hàng: VPBank</p>
            <p>Chủ tài khoản: Nguyễn Xuân Phong</p>
            <p>
              STK: <span id="stk">1799799789</span>{" "}
              <button
                className={`btn btn-primary ${copied["stk"] ? "disabled" : ""}`}
                onClick={() => copyToClipboard("stk")}
              >
                {copied["stk"] ? "Copied" : "Copy"}
              </button>
            </p>
            <p>
              Số tiền: <span id="soTien">49.000đ</span>{" "}
              <button
                className={`btn btn-primary ${copied["soTien"] ? "disabled" : ""}`}
                onClick={() => copyToClipboard("soTien")}
              >
                {copied["soTien"] ? "Copied" : "Copy"}
              </button>
            </p>
            <p>
              Nội dung chuyển khoản: <span id="noiDungChuyenKhoan">{code}</span>{" "}
              <button
                className={`btn btn-primary ${copied["noiDungChuyenKhoan"] ? "disabled" : ""}`}
                onClick={() => copyToClipboard("noiDungChuyenKhoan")}
              >
                {copied["noiDungChuyenKhoan"] ? "Copied" : "Copy"}
              </button>
            </p>
          </div>
          <div className="d-flex flex-row align-items-baseline">
            <p className="fw-bold">Liên hệ:</p>
            <a className="ms-3 me-3 mb-3" href="https://zalo.me/0342394855">
              <img height="50" src="https://classic.vn/wp-content/uploads/2022/07/zalo-icon.png" alt="" />
            </a>
            <a href="tel:0862135464">
              <img height="50" src="https://i.pinimg.com/originals/43/ac/f9/43acf98fb59be0b2aa824a682b8a2dc8.png" alt="" />
            </a>
          </div>
        </div>
        <div className="pt-3">
          <h3 className="text-center">Feedback của khách hàng</h3>
          <ImgFeedback />
        </div>
      </div>
    </div>
  );
};

export default Thankyou;
