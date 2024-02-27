import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./footer.css";
import { Link } from "@remix-run/react";
import PrimaryButton from "~/Components/Button";
const Footer = () => {
  return (
    <div className="footer-container footerContainer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <img className="w-50" src="img/logo4.png" alt="" />
            <blockquote className="text-white">
              "Cuộc sống của chúng ta luôn luôn liên quan mật thiết đến với các
              con số. Thần Số Học Online tạo ra công cụ tính toán, tra cứu Thần
              Số Học để giúp bạn hiểu và làm chủ các con số của cuộc đời bạn!"
            </blockquote>
            <div className="e-btn text-center" id="e-btn"></div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 text-white">
            <h4>CHÍNH SÁCH</h4>
            <div className="d-flex flex-column">
              <Link className="text-white" to="/chinh-sach-bao-mat">
                Chính sách bảo mật
              </Link>
              <Link className="text-white" to="dieu-khoan-su-dung">
                Điều khoản sử dụng
              </Link>
              <Link className="text-white" to="/about">
                Về chúng tôi
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 text-white mt-3">
            <h4>TRỤ SỞ ĐIỀU HÀNH</h4>
            <div className="mb-3 d-flex flex-column">
              <li>
                158 Nguyễn Thị Nhung, KĐT Vạn Phúc, Hiệp Bình Phước, TP.Thủ Đức
              </li>
              <li>Hotline: 1900.2157</li>
              <li>Email: contact@numology.com</li>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.619271877833!2d106.71364007578453!3d10.840420458008587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175287a46dd997b%3A0x88b710fc1312ff3b!2zMTU4IE5ndXnhu4VuIFRo4buLIE5odW5nLCBIaeG7h3AgQsOsbmggUGjGsOG7m2MsIFRo4bunIMSQ4bupYywgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1693039194220!5m2!1svi!2s"
              width="100%"
              height="200"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
