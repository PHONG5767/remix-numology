import React, { useState } from "react";
import PrimaryButton from "../../../Components/Button";
import { useNavigate } from "@remix-run/react";
import axios from "axios";
import FullName from "../../../Components/Calculate/CalculateChar";
import NumerologyData from "../../../Components/Calculate/CalculateNumber";


function generateRandomString() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }
  return result;
}

const Randomcode = generateRandomString();


const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const { normalizedFullName } = FullName();
  const { day, month, year } = NumerologyData();


  const sendToTelegram = async (text) => {
    const chatId = "-4000088670";
    const telegramToken = "6398994985:AAGAfTuSQTCRu4edmZHWpX9eYi_04fK07pI";

    try {
      await axios.post(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        chat_id: chatId,
        text
      });
    } catch (error) {
      console.error('Error sending to Telegram:', error);
    }
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();

    const message = `Thông tin liên hệ:\n Nội dung chuyển khoản: ${Randomcode}\n Số tiền: 49.000đ \n Họ và tên: ${normalizedFullName} \n Ngày sinh: ${day} / ${month} / ${year} \nEmail: ${email}\nSố điện thoại: ${phoneNumber}`;
    try {
      // const paymentElement = document.getElementById('paymentForm');

      await sendToTelegram(message);
      // paymentElement.scrollIntoView({ behavior: 'smooth' });
      localStorage.setItem("Code", Randomcode);

      navigate('/thankyou')


    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="d-flex flex-column p-3" style={{ width: "100%" }} onSubmit={handleSubmit1}>
      <input
        type="email"
        required
        placeholder="Nhập email của bạn..."
        style={{
          padding: "1em",
          width: "100%",
          borderRadius: "10px",
          border: "1px solid #0D6EFD",
          backgroundColor: "white",
          marginBottom: "10px",
        }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        required
        placeholder="Nhập số điện thoại của bạn..."
        style={{
          padding: "1em",
          width: "100%",
          borderRadius: "10px",
          border: "1px solid #0D6EFD",
          backgroundColor: "white",
          marginBottom: "10px",
        }}
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div className="animationButton">
        <PrimaryButton btn primary large>
          Nhận Báo Cáo
        </PrimaryButton>
      </div>
    </form>
  );
};
export default ContactForm
export { Randomcode };
