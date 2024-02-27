import PrimaryButton from "~/Components/Button";
import RepresentCharacters from "~/Components/Calculate/CalculateChar/Hooks";

import FullName from "../../../../Components/Calculate/CalculateChar";
import NumerologyData from "../../../../Components/Calculate/CalculateNumber";
import "../../getpass.css"

import "bootstrap/dist/css/bootstrap.css";

const DemoRpPayment = ({generatePDF,isCreatingPdf}) => {
    const { numMain, day, month, year } = NumerologyData();
    const { normalizedFullName, characterArray, vowelName} = FullName();
    const { sumCompact } = RepresentCharacters(characterArray);
    const {sumCompact: sumCompact1 } = RepresentCharacters(vowelName);

    return (
        <div>
            <div className="bgFixed pb-5">
                <h3 className="mt-5 text-white">Kết quả tra cứu</h3>
                <h4 className="text-warning">Tên của bạn là: {normalizedFullName}</h4>
                <h4 className="text-white">Ngày sinh: {day}/{month}/{year}</h4>
                <div className="row col-10 d-flex justify-content-center">
                    <div class="col-md-6  col-12 bg-GP">
                        <h3 className="text-center pt-5 text-white">Số chủ đạo:</h3>
                        <p className="text-GP text-center">{numMain}</p>
                        <p className="text-danger text-center">Thách thức và thuận lợi chủ đạo trong cuộc sống của bạn là gì?</p>
                        <div className="button w-75">
                            <PrimaryButton btn primary large onClick={generatePDF}>Xem Chi Tiết</PrimaryButton>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 bg-GP">
                        <h3 className="text-center pt-5 text-white">Số định mệnh:</h3>
                        <p className="text-danger text-center">Khả năng và tài năng của bạn cũng như và khuyết điểm của bạn?</p>

                        <p className="text-GP text-center">{sumCompact}</p>
                        <div className="button w-75">
                            <PrimaryButton btn primary large onClick={generatePDF}>Xem Chi Tiết</PrimaryButton>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 bg-GP">
                        <h3 className="text-center pt-5 text-white">Số linh hồn:</h3>
                        <p className="text-danger text-center">Số Linh Hồn nói về những điều mà bạn khao khát nhất là gì?</p>
                        <p className="text-GP text-center">{sumCompact1}</p>
                        <div className="button w-75">
                            <PrimaryButton btn primary large onClick={generatePDF}>Xem Chi Tiết</PrimaryButton>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 bg-GP">
                        <h3 className="text-center pt-5 text-white">Số ngày sinh:</h3>
                        <p className="text-danger text-center">Vũ khí mạnh nhất mà bạn được vũ trụ ban tặng?</p>
                        <p className="text-GP text-center">{day}</p>
                        <div className="button w-75">
                            <PrimaryButton btn primary large onClick={generatePDF}>Xem Chi Tiết</PrimaryButton>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 bg-GP">
                        <h3 className="text-center pt-5 text-white">Số tính cách:</h3>
                        <p className="text-danger text-center">Cách bạn ứng xử hằng ngày với mọi người?</p>

                        <p className="text-GP text-center">?</p>
                        <div className="button w-75">
                            <PrimaryButton btn primary large onClick={generatePDF}>Xem Chi Tiết</PrimaryButton>
                        </div>
                    </div>
                    <div class="col-md-6 col-12 bg-GP">
                        <h3 className="text-center pt-5 text-white">Số tiềm thức:</h3>
                        <p className="text-danger text-center">Những yếu tố tiềm ẩn trong tâm hồn và tiềm
                        thức của bạn?</p>

                        <p className="text-GP text-center">?</p>
                        <div className="button w-75">
                            <PrimaryButton btn primary large onClick={generatePDF}>Xem Chi Tiết</PrimaryButton>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default DemoRpPayment;
