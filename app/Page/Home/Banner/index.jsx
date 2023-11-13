import "bootstrap/dist/css/bootstrap.css";
import "../homepage.css";
// import PrimaryButton from "../../../Components/Button";
const Banner = () => {
    // const scrollToForm = () =>{
    //     const form = document.getElementById("form-section");
    //     if (form) {
    //         return (form.scrollIntoView({ behavior: 'smooth' }));
    //       }
    // }
    return (
        <div className="homepageContainer container-fluid">
            <div className="row banner justify-content-center flex-md-row flex-column-reverse">
                <div className="flex-column d-flex align-items-center"> 
                    
                    <h3 className="p-2 text-white fw-bold mt-5 text-center">
                         KHÁM PHÁ BẢN THÂN QUA NHỮNG CON SỐ
                    </h3>
                    {/* <div className="position-fixed form-container zIndex col-11 col-sm-11 col-md-6 p3"><PrimaryButton btn primary large onClick={scrollToForm}>Tra Cứu Ngay</PrimaryButton></div> */}
                    {/* <p className="text-danger mt-0 text-center bg-white ps-3 pe-3 pt-1 pb-1 rounded">
                        Trang Web Tra Cứu Thần Số Học <p className="fw-bold reset-p">Được Hợp Tác Bởi Chuyên Gia Nước Ngoài</p>
                    </p> */}
                    <div className="thinker-banner d-flex align-items-center text-white justify-content-center">
                        <div className="row">
                            <div className="col-md-4 col-sm-12 justify-content-center d-flex align-items-center text-center mb-md-0">
                                <h2>2,385,368+</h2>
                            </div>
                            <div className="col-md-8 col-sm-12 justify-content-center d-flex align-items-center fs-5">
                                <p className="reset-p">
                                    Người Tin Tưởng Numology Trong 4 Năm Qua <br />
                                    Và Với Hơn 5 Ngàn Lượt Truy Cứu Hàng Ngày
                                </p>
                            </div>
                            {/* <h3 className="text-center">HIỆN TẠI WEBSITE VI.NUMOLOGY.COM ĐANG TIẾN HÀNH BẢO TRÌ</h3>
                            <p className="text-danger text-center">Khách hàng đã thanh toán trong ngày 25/10/2023 vui lòng liên hệ Zalo: 0342.394.855 để được hỗ trợ</p> */}
                        </div>
                    </div>
                    {/* <div className="banner1-2 justify-content-center d-flex">
                        <h2 className="text-black">Chào Mừng Bạn Đến Với Hành Trình Khám Phá Bản Thân <br /> Tại Numology.com</h2>
                        <p className="text-black">Numerology là một phương pháp tâm linh dựa trên việc phân tích và hiểu các số liên quan đến cuộc sống của bạn, bao gồm ngày sinh, tên và các yếu tố khác. Các số này được coi là có ảnh hưởng đến tính cách, sự kiện và cơ hội trong cuộc sống của bạn. <br /> <br />
                            Để bắt đầu, bạn có thể cung cấp thông tin như ngày, tháng và năm sinh của bạn, hoặc tên của bạn để tôi có thể giúp bạn khám phá thêm về các khía cạnh số học của bản thân. Tuy nhiên, hãy lưu ý rằng numerology không phải là một khoa học được chứng minh và tất cả những gì nó cung cấp chỉ là một góc nhìn tâm linh và giải thích tiềm năng.</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;
