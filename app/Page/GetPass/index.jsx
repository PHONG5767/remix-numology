import "bootstrap/dist/css/bootstrap.css";
import "./getpass.css";
import ContactForm from "./hook";
import { PDFObject } from "react-pdfobject";
import ReactDOMServer from "react-dom/server";

const GetPass = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div
            id="paymentform1"
            className="d-flex flex-column align-items-center mt-5"
          >
            <h3>
              Chỉ 49.000đ{" "}
              <span>
                <del>299.000đ</del>
              </span>{" "}
              để nắm bắt vận mệnh cuộc đời bạn
            </h3>
            <div></div>
          </div>
          <div>{ContactForm()}</div>
        </div>
      </div>
      <h3 className="pt-3 text-center pb-3">
        Bản xem trước của file PDF hơn 50 trang về cuộc đời bạn
      </h3>
      <PDFObject
        fallbackLink={ReactDOMServer.renderToString(
          <div
            style={{
              background: "#af3589",
              color: "white",
              padding: '10px',
              textAlign: "center",
              marginBottom: "30px"
            }}
          >
            Đây là file báo cáo mẫu xem trước với tên: <br /> <h5>Trần Đăng Đức Tài</h5> <h5> Sinh ngày:23/03/1994</h5>
            <a href="[url]">Download PDF</a> <br /><u>Chỉ với 49.000đ bạn hoàn toàn có thể xem báo cáo đầy đủ của riêng mình </u>
          </div>
        )}
        url="/report.pdf"
        height="700px"
      />
    </div>
  );
};

export default GetPass;
