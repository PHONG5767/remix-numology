import "bootstrap/dist/css/bootstrap.css";
import "./getpass.css";
import ContactForm from "./hook";
import DemoRpPayment from "./hook/DemoRP";

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
      <DemoRpPayment />
    </div>
  );
};

export default GetPass;
