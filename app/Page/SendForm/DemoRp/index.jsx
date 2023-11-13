import HeartDesireRp from "../../Report/Calculate/Report/HeartDesire";
import ExpressionNumberRp from "../../Report/Calculate/Report/ExpressionNumber";
import NummainRp from "../../Report/Calculate/Report/Nummain";
import NumerologyData from "../../../Components/Calculate/CalculateNumber";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../Components/Button";


import "../sendForm.css";

const DemoRp = () => {
    const { numDay, numMonth, numYear, year } = NumerologyData();
    const navigate = useNavigate();

    const getPass = () => {
        navigate("/getpass");
    }

    return (
        <div className="bgFixed">
            <div className="col-sm-10 col-md-8 col-xl-8 col-12">
                <div className="containerContentDemoRp">
                    <h5 className="text-danger mb-4">
                        Báo cáo này bao gồm 11 mục về cuộc đời của bạn chi tiết như sau:
                    </h5>
                    <NummainRp />
                    <div className="d-flex justify-content-center">
                    <PrimaryButton  btn primary small onClick={getPass}>
                        Xem Phân Tích Chi Tiết 40 Trang PDF Tại Đây
                    </PrimaryButton>
                    </div>

                </div>
                <div className="containerContentDemoRp">
                    <h3>Chu kỳ đường đời</h3>
                    <p>
                        Chu kỳ đường đời trong thần số học là cách phân tích cuộc sống dựa
                        trên ngày sinh, tháng sinh và năm sinh của một người. Nó chia cuộc
                        sống thành các giai đoạn khác nhau, mỗi giai đoạn đại diện cho sự
                        phát triển và trải nghiệm riêng trong cuộc sống. Các hệ thống thần
                        số học khác nhau có cách tính và tên gọi riêng cho các chu kỳ đường
                        đời...
                    </p>
                    <div class="d-flex">
                        <div class="w-100 position-relative">
                            <div className="position-absolute PeriodNumberRpNum">{numDay}</div>
                            <img className="w-100 h-auto" src="https://xem.tracuuthansohoc.com/uploads/images/lifecircle1.png" alt="" />
                        </div>
                        <div class="w-100 position-relative">
                            <div className="position-absolute PeriodNumberRpNum">{numMonth}</div>
                            <img className="w-100 h-auto" src="https://xem.tracuuthansohoc.com/uploads/images/lifecircle2.png" alt="" />
                        </div>
                        <div class="w-100 position-relative">
                            <div className="position-absolute PeriodNumberRpNum">{numYear}</div>
                            <img className="w-100 h-auto" src="https://xem.tracuuthansohoc.com/uploads/images/lifecircle3.png" alt="" />
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="w-100 text-center">
                            <p>
                                Chu kỳ 1 <br /> <b>GIEO HẠT</b>
                                <br />
                                Đầu đời - 27 tuổi ({year + 27})
                            </p>
                        </div>
                        <div class="w-100 text-center">
                            <p>
                                Chu kỳ 2 <br /> <b> CHÍN</b>
                                <br />
                                28 - 54 tuổi ({year + 28}-{year + 54})
                            </p>
                        </div>
                        <div class="w-100 text-center">
                            <p>
                                Chu kỳ 3 <br /><b> THU HOẠCH</b>
                                <br />
                                55 tuổi về sau ({year + 55} trở đi)
                            </p>
                        </div>
                    </div>

                     <div className="d-flex justify-content-center">
                    <PrimaryButton  btn primary small onClick={getPass}>
                        Xem Phân Tích Chi Tiết 40 Trang PDF Tại Đây
                    </PrimaryButton>
                    </div>

                </div>
                <div className="containerContentDemoRp hidecontainerContentDemoRp">
                    <HeartDesireRp />
                     <div className="d-flex justify-content-center">
                    <PrimaryButton  btn primary small onClick={getPass}>
                        Xem Phân Tích Chi Tiết 40 Trang PDF Tại Đây
                    </PrimaryButton>
                    </div>

                </div>
                <div className="containerContentDemoRp hidecontainerContentDemoRp">
                    <ExpressionNumberRp />
                    <div className="d-flex justify-content-center">
                    <PrimaryButton  btn primary small onClick={getPass}>
                        Xem Phân Tích Chi Tiết 40 Trang PDF Tại Đây
                    </PrimaryButton>
                    </div>

                </div>
                <div className="containerContentDemoRp">
                    <h3>Con số đại diện cho ngày sinh của bạn</h3>
                    <p>
                        Con số này dựa trên ngày sinh của bạn và thể hiện tính cách cũng như
                        khả năng của bạn. Những người có con số này thường thích tự do,
                        phiêu lưu và sự thay đổi. Họ tò mò và hăng hái với những trải nghiệm
                        mới...
                    </p>
                    <div className="d-flex justify-content-center">
                    <PrimaryButton  btn primary small onClick={getPass}>
                        Xem Phân Tích Chi Tiết 40 Trang PDF Tại Đây
                    </PrimaryButton>
                    </div>

                </div>
                <div className="containerContentDemoRp">
                    <h3>Con số đại biểu cho những thử thách trong cuộc sống của bạn</h3>
                    <p>
                        Đây là những con số biểu thị những thách thức và khó khăn ẩn trong
                        cuộc sống của bạn. Chúng đại diện cho các khía cạnh của bản thân bạn
                        mà bạn cần đối mặt, vượt qua hoặc phát triển để đạt đến tiềm năng
                        đầy đủ của mình...
                    </p>
                    <div className="d-flex justify-content-center">
                    <PrimaryButton  btn primary small onClick={getPass}>
                        Xem Phân Tích Chi Tiết 40 Trang PDF Tại Đây
                    </PrimaryButton>
                    </div>

                </div>
                <div className="containerContentDemoRp">
                    <h3>Con số định mệnh</h3>
                    <p>
                        Con số này liên quan đến cách bạn tỏ bày bản thân và khả năng giao
                        tiếp của bạn. Nó thể hiện tài năng và khả năng trong việc diễn đạt ý
                        tưởng, suy nghĩ và cảm xúc. Nó cũng phản ánh tính cách và nguyên tắc
                        của bạn...
                    </p>
                    <div className="d-flex justify-content-center">
                    <PrimaryButton  btn primary small onClick={getPass}>
                        Xem Phân Tích Chi Tiết 40 Trang PDF Tại Đây
                    </PrimaryButton>
                    </div>

                </div>
                <div className="containerContentDemoRp">
                    <h3>Số tính cách</h3>
                    <p>
                        Con số này đại diện cho các đặc điểm cá nhân, hành vi và ảnh hưởng
                        của bạn đối với người khác. Nó cho thấy cách bạn trình bày bản thân
                        với thế giới bên ngoài và cách bạn tương tác với môi trường xung
                        quanh bạn...
                    </p>
                    <div className="d-flex justify-content-center">
                    <PrimaryButton  btn primary small onClick={getPass}>
                        Xem Phân Tích Chi Tiết 40 Trang PDF Tại Đây
                    </PrimaryButton>
                    </div>

                </div>
                <div className="containerContentDemoRp">
                    <h3>Số tiềm thức của Bản thân</h3>
                    <p>
                        Con số này đại diện cho những yếu tố tiềm ẩn trong tâm hồn và tiềm
                        thức của bạn. Nó giúp bạn hiểu những ảnh hưởng ẩn dấu mà bạn không
                        luôn nhận thức được và cách chúng ảnh hưởng đến quyết định và hành
                        vi của bạn...
                    </p>
                    <div className="d-flex justify-content-center">
                    <PrimaryButton  btn primary small onClick={getPass}>
                        Xem Phân Tích Chi Tiết 40 Trang PDF Tại Đây
                    </PrimaryButton>
                    </div>

                </div>
                <div className="containerContentDemoRp">
                    <h3>Số cân bằng</h3>
                    <p>
                        Con số này phản ánh mối quan hệ giữa các khía cạnh khác nhau của
                        cuộc sống của bạn và cách bạn cân bằng chúng. Nó giúp bạn nhận ra
                        cách hòa hợp các khía cạnh khác nhau của bản thân và đạt được sự cân
                        bằng trong cuộc sống...
                    </p>
                    <div className="d-flex justify-content-center">
                    <PrimaryButton  btn primary small onClick={getPass}>
                        Xem Phân Tích Chi Tiết 40 Trang PDF Tại Đây
                    </PrimaryButton>
                    </div>

                </div>
                <div className="containerContentDemoRp mb-5">
                    <h3>Số nghiệp chướng</h3>
                    <p>
                        "Số nghiệp chướng" trong thần số học đại diện cho các khó khăn và
                        thách thức trong cuộc sống. Chúng thể hiện những khía cạnh bạn cần
                        phát triển để vượt qua những thử thách này và đạt đến tiềm năng tối
                        đa của mình. Điều này thường xuất hiện dưới dạng các con số đặc biệt
                        trong biểu đồ thần số của bạn, và mỗi hệ thống thần số học có thể
                        định nghĩa các con số này khác nhau...
                    </p>
                    <div className="d-flex justify-content-center">
                    <PrimaryButton  btn primary small onClick={getPass}>
                        Xem Phân Tích Chi Tiết 40 Trang PDF Tại Đây
                    </PrimaryButton>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default DemoRp;
