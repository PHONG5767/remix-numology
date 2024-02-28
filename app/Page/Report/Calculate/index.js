import { useEffect,useState } from "react";
import pdfMake from "pdfmake/build/pdfmake.js";
import pdfFonts from "pdfmake/build/vfs_fonts.js";
import NumerologyData from "~/Components/Calculate/CalculateNumber";
import { DemoContent } from "../../../Components/Content/ReportPDF";
import { NummainContent } from "../../../Components/Content/ReportPDF";
import { BirthDayNumberContent } from "../../../Components/Content/ReportPDF";
import RepresentCharacters from "~/Components/Calculate/CalculateChar/Hooks";
import FullName from "~/Components/Calculate/CalculateChar";
import { BalanceNumberContent } from "../../../Components/Content/ReportPDF";
import { ExpressionNumberDescription } from "../../../Components/Content/ReportPDF";
import { HeartDesireContent } from "../../../Components/Content/ReportPDF";
import { KarmicLessonsContent } from "../../../Components/Content/ReportPDF";
import { PersonalityNumberContent } from "../../../Components/Content/ReportPDF";
import YourSelfNumberContent from "../../../Components/Content/ReportPDF/SubconsciousSelfNumber";
import PrimaryButton from "~/Components/Button";
import DemoRpPayment from "~/Page/GetPass/hook/DemoRP";
import {
  FirstChallenge,
  ThirdChallenge,
  SecondChallenge,
  FourthChallenge,
} from "../../../Components/Content/ReportPDF";

import {
  FirstPeriodCycleContent,
  SecondPeriodCycleContent,
  ThirdPeriodCycleContent,
} from "../../../Components/Content/ReportPDF";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const ReportCal = () => {
  const { numMain, day, month, year, numDay, numMonth, numYear } =
    NumerologyData();
  const {
    normalizedFullName,
    firstFullName,
    vowelName,
    characterArray,
    consonantName,
  } = FullName();
  const UptoCaseFullName = normalizedFullName.toUpperCase();
  const { sumCompact: sumCompactPersonality } =
    RepresentCharacters(consonantName);
  const { sumCompact } = RepresentCharacters(firstFullName);
  const { sumCompact: sumCompactExpression, resultArray } =
    RepresentCharacters(characterArray);
  const { sumCompact: sumCompactHeartDesire } = RepresentCharacters(vowelName);

  const KarmicLessonNumbers = () => {
    const ComparisonsNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const newKarmicLessonNumber = ComparisonsNumber.filter(
      (element) => !resultArray.includes(element)
    );
    return newKarmicLessonNumber;
  };

  const countYes = 9 - KarmicLessonNumbers().length;

  // useEffect(() => {
  //   generatePDF();
  // }, []);
  const [isCreatingPdf, setIsCreatingPdf] = useState(false);

  const generatePDF = async () => {
    setIsCreatingPdf(true);
    const standardPageSizes = {
      "4A0": [4767.87, 6740.79],
      "2A0": [3370.39, 4767.87],
      A0: [2383.94, 3370.39],
      A1: [1683.78, 2383.94],
      A2: [1190.55, 1683.78],
      A3: [841.89, 1190.55],
      A4: [595.28, 841.89],
      A5: [419.53, 595.28],
      A6: [297.64, 419.53],
      A7: [209.76, 297.64],
      A8: [147.4, 209.76],
      A9: [104.88, 147.4],
      A10: [73.7, 104.88],
      B0: [2834.65, 4008.19],
      B1: [2004.09, 2834.65],
      B2: [1417.32, 2004.09],
      B3: [1000.63, 1417.32],
      B4: [708.66, 1000.63],
      B5: [498.9, 708.66],
      B6: [354.33, 498.9],
      B7: [249.45, 354.33],
      B8: [175.75, 249.45],
      B9: [124.72, 175.75],
      B10: [87.87, 124.72],
      C0: [2599.37, 3676.54],
      C1: [1836.85, 2599.37],
      C2: [1298.27, 1836.85],
      C3: [918.43, 1298.27],
      C4: [649.13, 918.43],
      C5: [459.21, 649.13],
      C6: [323.15, 459.21],
      C7: [229.61, 323.15],
      C8: [161.57, 229.61],
      C9: [113.39, 161.57],
      C10: [79.37, 113.39],
      RA0: [2437.8, 3458.27],
      RA1: [1729.13, 2437.8],
      RA2: [1218.9, 1729.13],
      RA3: [864.57, 1218.9],
      RA4: [609.45, 864.57],
      SRA0: [2551.18, 3628.35],
      SRA1: [1814.17, 2551.18],
      SRA2: [1275.59, 1814.17],
      SRA3: [907.09, 1275.59],
      SRA4: [637.8, 907.09],
      EXECUTIVE: [521.86, 756.0],
      FOLIO: [612.0, 936.0],
      LEGAL: [612.0, 1008.0],
      LETTER: [612.0, 792.0],
      TABLOID: [792.0, 1224.0],
    };

    function toDataURL(src, outputFormat) {
      return new Promise((res, rej) => {
        var img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = function () {
          var canvas = document.createElement("CANVAS");
          var ctx = canvas.getContext("2d");
          canvas.height = this.naturalHeight;
          canvas.width = this.naturalWidth;
          ctx.drawImage(this, 0, 0);
          var dataURL = canvas.toDataURL(outputFormat);
          res(dataURL);
        };
        img.onerror = rej;
        img.src = src;
      });
    }

    function SubconsciousSelfNumberpdf(lowercaseCharacters) {
      const values = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 1,
        k: 2,
        l: 3,
        m: 4,
        n: 5,
        o: 6,
        p: 7,
        q: 8,
        r: 9,
        s: 1,
        t: 2,
        u: 3,
        v: 4,
        w: 5,
        x: 6,
        y: 7,
        z: 8,
      };

      const uniqueValues = Array.from(
        new Set(lowercaseCharacters.map((char) => values[char]))
      );

      const checklist = [];
      for (let i = 1; i <= 9; i++) {
        const checkValue = uniqueValues.includes(i) ? "Có" : "Không";
        checklist.push(`Number ${i}  - ${checkValue}`);
      }

      return checklist;
    }

    const buildPdfContent = async () => {
      const buildHeartDesireNumbersOfName = async (nameArr) => {
        const buildForCharacter = async (showNameimg) => {
          const imageUrl = `${showNameimg}`;
          return {
            alignment: "center",
            fit: [30, 50],
            image: await toDataURL(imageUrl),
          };
        };

        const TOTAL_CHARACTER_IN_1_LINE = 20;
        const totalChunks = Math.ceil(
          nameArr.length / TOTAL_CHARACTER_IN_1_LINE
        );
        const result = [];

        for (let i = 0; i < totalChunks; i++) {
          const start = i * TOTAL_CHARACTER_IN_1_LINE;
          const end = (i + 1) * TOTAL_CHARACTER_IN_1_LINE;
          const nameChunk = nameArr.slice(start, end);

          const names = await Promise.all(nameChunk.map(buildForCharacter));
          const transformNames =
            names.length === TOTAL_CHARACTER_IN_1_LINE
              ? names
              : names.concat(
                  Array(TOTAL_CHARACTER_IN_1_LINE - names.length).fill(" ")
                );

          result.push(transformNames);
        }

        return {
          layout: {
            hLineWidth: () => 0,
            vLineWidth: () => 0,
            paddingLeft: () => 0,
            paddingRight: () => 0,
            paddingTop: () => 0,
            paddingBottom: () => 0,
            fillColor: () => "#f7f2e6",
          },
          table: {
            headerRows: 0,
            widths: Array(TOTAL_CHARACTER_IN_1_LINE)
              .fill()
              .map(() => "*"),
            body: result,
          },
        };
      };

      return [
        {
          stack: [
            {
              image: await toDataURL("img/NUMEROLOGYREPORT.png"),
              fit: standardPageSizes.A4,
              margin: [-40, -90, -40, -80],
            },

            {
              table: {
                widths: [standardPageSizes.A4[0]],
                body: [
                  [
                    {
                      text: UptoCaseFullName,
                      fontSize: 24,
                      alignment: "center",
                      color: "white",
                      bold: true,
                    },
                  ],
                ],
              },
              absolutePosition: {
                y: standardPageSizes.A4[1] / 2 - 240,
              },
              layout: "noBorders",
            },

            {
              table: {
                widths: [standardPageSizes.A4[0]],
                body: [
                  [
                    {
                      text: `${day}/${month}/${year}`,
                      fontSize: 24,
                      alignment: "center",
                      color: "white",
                      bold: true,
                    },
                  ],
                ],
              },
              absolutePosition: {
                y: standardPageSizes.A4[1] / 2 - 210,
              },
              layout: "noBorders",
            },

            {
              table: {
                widths: [standardPageSizes.A4[0]],
                body: [
                  [
                    {
                      text: numMain,
                      fontSize: 108,
                      bold: true,
                      alignment: "center",
                      color: "black",
                    },
                  ],
                ],
              },
              absolutePosition: {
                y: standardPageSizes.A4[1] / 2 - 60,
              },
              layout: "noBorders",
            },
          ],
        },

        {
          toc: {
            title: { text: "Mục Lục", style: "header" },
          },
        },

        {
          text: "CHÀO MỪNG BẠN ĐẾN VỚI BÁO CÁO THẦN SỐ HỌC",
          style: "header",
          pageBreak: "before",
          tocItem: true,
        },

        {
          image: await toDataURL("img/Chaldean-Numerology-Calculator.png"),
          width: 300,
        },
        {
          text: " ",
          style: "small",
        },
        {
          text: `Xin chúc mừng ${UptoCaseFullName}!`,
          style: `subheader`,
        },
        {
          text: `Giờ đây, thật đáng tự hào khi bạn là chủ sở hữu của bản báo cáo thần số học này, một bài đánh giá đơn giản nhưng tiết lộ sâu sắc về tiềm năng của bản thân bạn. Chúng tôi rất vui vì bạn đã quyết định mang công cụ kỳ diệu, thú vị và đầy sâu sắc này vào cuộc sống của bạn`,
          style: "small",
        },
        {
          text: `Bạn thân mến, chúng tôi tin rằng Thần Số Học chính là chìa khóa giúp bạn mở ra một cuộc sống tràn ngập niềm vui, tình yêu và sự thịnh vượng. Một khi bạn có các công cụ để hiểu ra hơn điều gì đang tồn tại giữa bạn và mục tiêu của mình, bạn sẽ có thể đưa ra những lựa chọn tốt hơn, ngừng lặp lại những quyết định sai lầm và tự tin tiến tới một tương lai tốt đẹp hơn, đi đúng với tiềm năng của bạn.`,
          style: "small",
        },
        {
          text: `Mỗi một câu, một chữ của báo cáo Thần Số Học đã được điều chỉnh cho phù hợp với chính bản thân bạn. Chúng tôi đã sử dụng nhiều năm tích lũy nghiên cứu, với những tài liệu được xuất bản và chưa được công bố, bởi các nhà nghiên cứu Thần số học, các chuyên gia nước ngoài và kết hợp thông tin chi tiết này với hệ thống tính toán phức tạp của chúng tôi để tạo ra một bản báo cáo cực kỳ mạnh mẽ và chính xác về bạn!`,
          style: "small",
        },
        {
          text: `Trong bảo báo cáo này, bạn sẽ khám phá các luận giải về:`,
          style: "subheader",
        },
        {
          text: `- Ý nghĩa tên khai sinh của bạn, bao gồm ý nghĩa của họ tên đầy đủ, tên thường gọi
          - Chỉ số linh hồn của bạn có điều gì đang đợi chờ bạn
          - Chỉ số sứ mệnh của bạn đang có thử thách gì phía trước
          - Tên thường gọi có tác động bù trừ hay làm xấu đi biểu đồ ngày sinh của bạn?
          - Chỉ số đường đời và chu kì vận số năm hiện tại của bạn
          - Và rất nhiều các luận giải nâng cao khác...`,
          style: "small",
        },
        {
          text: `Ta không thể thay đổi hướng gió, nhưng có thể thay đổi hướng cánh buồm!`,
          style: "smallBold",
        },
        {
          text: `Chúng tôi chân thành hi vọng rằng thông điệp này sẽ hỗ trợ bạn trong cuộc hành trình của cuộc sống, giúp bạn đạt được mục tiêu thành công và trọn vẹn hạnh phúc.
          Thần số học là một công cụ mạnh mẽ, sâu sắc và thú vị có nguồn gốc từ phương Tây. Chúng tôi cam kết giúp bạn hiểu rõ hơn về những chỉ số và biểu đồ trong báo cáo này, để bạn có thể ứng dụng chúng vào cuộc sống cá nhân một cách hiệu quả.  
          Hãy tận hưởng việc khám phá chân thực về bản thân và biết cách cải thiện hạnh phúc và sức khỏe của bạn thông qua Thần số học!`,
          style: "small",
        },
        {
          text: `HIỂU VỀ BẢN BÁO CÁO CỦA BẠN`,
          style: "header",
          pageBreak: "before",
        },
        {
          text: `Báo cáo về Số học của bạn là một nghiên cứu toàn diện, khám phá các phương pháp Số học đa dạng được áp dụng vào cả tên và ngày tháng năm sinh của bạn.
          Chúng ta sẽ cùng nhau khám phá hai thành phần chính quan trọng: tên khai sinh và ngày tháng năm sinh dương lịch. 
          Tên cá nhân của bạn chứa những chỉ số quan trọng, bao gồm:
          - Chỉ số sứ mệnh: Điều này liên quan đến mục tiêu và nhiệm vụ trong cuộc sống.
          - Chỉ số linh hồn: Chúng ta sẽ tìm hiểu về tính cách bên trong và tâm hồn của bạn.
          - Chỉ cân bằng: Chúng ta sẽ khám phá các khía cạnh khác nhau của cá tính của bạn.
          - Số nghiệp chướng: Chúng ta sẽ thảo luận về những điểm yếu của bạn và khắc phục nó.
          Và nhiều chỉ số khác liên quan đến cách bạn tương tác và ảnh hưởng đến môi trường xã hội của bạn.
          Ngày tháng năm sinh của bạn là nguồn gốc của các chỉ số được tính toán từ ngày đó. Dù bạn có cảm giác rằng bạn không kiểm soát được cuộc đời, thì thực tế là ngày sinh của bạn và những yếu tố vũ trụ đã tạo nên bạn và ảnh hưởng đến cuộc sống của bạn. Điều này liên quan đến khái niệm của luân hồi nhân quả và có thể được giải thích bằng đạo Phật như sự tích nghiệp và đức tích của bạn từ kiếp trước. 
          Có một số khía cạnh có thể làm cho bạn cảm thấy thách thức, nhưng chúng ta sẽ cung cấp giải thích và hướng dẫn để bạn hiểu rõ hơn về bản thân và cách bạn có thể điều chỉnh để sống cuộc đời theo cách mà bạn mong muốn. Hãy kiên nhẫn đọc báo cáo này nhiều lần, và bạn sẽ khám phá những câu trả lời mà bạn cần.
          Màu sắc của bản báo cáo được lựa chọn dựa trên số chủ đạo của bạn. Bạn có thể xem đây là một gợi ý cho việc chọn màu sắc cho công việc hoặc vật phẩm quan trọng. Tuy nhiên, việc chọn màu là do sở thích cá nhân và không bắt buộc trong lĩnh vực Thần số học.`,
          style: "small",
        },
        {
          text: `CHỈ SỐ ĐƯỜNG ĐỜI (SỐ CHỦ ĐẠO)`,
          style: "header",
          pageBreak: "before",
          tocItem: true,
        },
        {
          image: await toDataURL(
            "img/The-Spiritual-Significance-of-Life-Path-Number-5.png"
          ),
          width: 300,
        },
        {
          text: ` `,
          style: "small",
        },
        {
          text: DemoContent.Nummain,
          style: "small",
        },
        {
          text: `Số chủ đạo của bạn là: ${numMain}`,
          style: "subheader",
        },
        {
          text: NummainContent["num" + numMain],
          style: "small",
        },
        {
          text: `CHU KỲ ĐƯỜNG ĐỜI`,
          style: "header",
          pageBreak: "before",
          tocItem: true,
        },
        {
          image: await toDataURL("img/chukyduongdoi.png"),
          width: 300,
        },

        {
          text: ` `,
          style: "small",
        },

        {
          text: DemoContent.PeriodNumber,
          style: "small",
        },
        {
          text: `Các chu kỳ đường đời của bạn lần lượt là: ${numMonth}, ${numDay} và
          ${numYear}`,
          style: "subheader",
        },
        {
          text: `Chu kỳ thứ nhất`,
          style: "smallBold",
        },
        {
          text: FirstPeriodCycleContent["num" + numMonth],
          style: "small",
        },
        {
          text: `Chu kỳ thứ 2`,
          style: "smallBold",
        },
        {
          text: SecondPeriodCycleContent["num" + numDay],
          style: "small",
        },
        {
          text: `Chu kỳ thứ 3`,
          style: "smallBold",
        },
        {
          text: ThirdPeriodCycleContent["num" + numYear],
          style: "small",
        },
        {
          text: `CHỈ SỐ CÁ NHÂN`,
          style: "header",
          pageBreak: "before",
          tocItem: true,
        },
        {
          image: await toDataURL("img/socanhan.png"),
          width: 300,
        },

        {
          text: ` `,
          style: "small",
        },
        {
          text: DemoContent.BirthDayNumber,
          style: "small",
        },
        {
          text: `Ngày sinh của bạn là: ${day}`,
          style: "smallBold",
        },
        {
          text: BirthDayNumberContent["num" + day],
          style: "small",
        },
        {
          text: "CÁC THỬ THÁCH TRONG CUỘC SỐNG",
          style: "header",
          pageBreak: "before",
          tocItem: true,
        },
        {
          image: await toDataURL("img/thachthuctrongcuocsong.png"),
          width: 300,
        },

        {
          text: ` `,
          style: "small",
        },
        {
          text: DemoContent.ChallengeNumber,
          style: "small",
        },
        {
          text: `Thử thách đầu tiên của bạn là:` + numDay,
          style: "smallBold",
        },
        {
          text: FirstChallenge[`num` + numDay],
          style: "small",
        },
        {
          text: `Thử thách thứ hai của bạn là:` + numMonth,
          style: "smallBold",
        },
        {
          text: SecondChallenge[`num` + numMonth],
          style: "small",
        },
        {
          text: `Thử thách thứ ba của bạn là:` + numYear,
          style: "smallBold",
        },
        {
          text: ThirdChallenge[`num` + numYear],
          style: "small",
        },
        {
          text: `Thử thách thứ tư của bạn là:` + numMain,
          style: "smallBold",
        },
        {
          text: FourthChallenge[`num` + numMain],
          style: "small",
        },
        {
          text: "SỐ CÂN BẰNG TRONG CUỘC SỐNG",
          style: "header",
          pageBreak: "before",
          tocItem: true,
        },
        {
          image: await toDataURL("img/canbang.png"),
          width: 300,
        },

        {
          text: ` `,
          style: "small",
        },
        {
          text: DemoContent.BalanceNumber,
          style: "small",
        },
        await buildHeartDesireNumbersOfName(
          firstFullName.map((showNameimg) => {
            return `img/${showNameimg}1.png`;
          })
        ),
        {
          text: " ",
          style: "small",
        },
        {
          text: "Số cân bằng trong cuộc sống của bạn là:" + sumCompact,
          style: "small",
        },
        {
          text: BalanceNumberContent[`num` + sumCompact],
          style: "small",
        },
        {
          text: "SỐ ĐỊNH MỆNH",
          style: "header",
          pageBreak: "before",
          tocItem: true,
        },
        {
          image: await toDataURL("img/sumenh.png"),
          width: 300,
        },

        {
          text: ` `,
          style: "small",
        },

        {
          text: DemoContent.ExpressionNumber,
          style: "small",
        },
        await buildHeartDesireNumbersOfName(
          characterArray.map((showNameimg) => {
            return `img/${showNameimg}1.png`;
          })
        ),
        {
          text: " ",
          style: "small",
        },
        {
          text: `Con số định mệnh của bạn là: ${sumCompactExpression}`,
          style: "smallBold",
        },
        {
          text: ExpressionNumberDescription[`num` + sumCompactExpression],
          style: "small",
        },
        {
          text: `CHỈ SỐ LINH HỒN`,
          style: "header",
          pageBreak: "before",
          tocItem: true,
        },
        {
          image: await toDataURL("img/linhhon.png"),
          width: 300,
        },

        {
          text: ` `,
          style: "small",
        },
        {
          text: DemoContent.HeartDesire,
          style: "small",
        },
        await buildHeartDesireNumbersOfName(
          characterArray.map((showNameimg) => {
            {
              const number = vowelName.includes(showNameimg) ? 2 : 0;
              return `img/${showNameimg}${number}.png`;
            }
          })
        ),
        {
          text: " ",
          style: "small",
        },
        {
          text: `Số linh hồn của bạn là: ${sumCompactHeartDesire}`,
          style: "smallBold",
        },
        {
          text: HeartDesireContent[`num` + sumCompactHeartDesire],
          style: "small",
        },
        {
          text: "CHỈ SỐ NGHIỆP CHƯỚNG",
          style: "header",
          pageBreak: "before",
          tocItem: true,
        },
        {
          image: await toDataURL("img/nghiepchuong.png"),
          width: 300,
        },

        {
          text: ` `,
          style: "small",
        },
        {
          text: DemoContent.KarmicLesson,
          style: "small",
        },
        await buildHeartDesireNumbersOfName(
          characterArray.map((showNameimg) => {
            return `img/${showNameimg}${1}.png`;
          })
        ),
        {
          text: " ",
          style: "small",
        },
        {
          text: `Số nghiệp chướng của bạn là: ${KarmicLessonNumbers().join(
            ", "
          )}`,
          style: "small",
        },
        KarmicLessonNumbers().map((KarmicLessonNumber) => {
          return {
            text:
              `Số ${KarmicLessonNumber} biểu thị cho: ` +
              KarmicLessonsContent[`num` + KarmicLessonNumber],
            style: "small",
          };
        }),
        {
          text: "SỐ TÍNH CÁCH",
          style: "header",
          pageBreak: "before",
          tocItem: true,
        },
        {
          image: await toDataURL("img/tinhcach.png"),
          width: 300,
        },

        {
          text: ` `,
          style: "small",
        },
        {
          text: DemoContent.PersonalytyNumber,
          style: "small",
        },
        await buildHeartDesireNumbersOfName(
          characterArray.map((showNameimg) => {
            const number = consonantName.includes(showNameimg) ? 1 : 0;
            return `img/${showNameimg}${number}.png`;
          })
        ),
        {
          text: " ",
          style: "small",
        },
        {
          text: "Số tính cách của bạn là: " + sumCompactPersonality,
          style: "smallBold",
        },
        {
          text: PersonalityNumberContent[`num` + sumCompact],
          style: "small",
        },
        {
          text: "SỐ TIỀM THỨC",
          style: "header",
          pageBreak: "before",
          tocItem: true,
        },
        {
          image: await toDataURL("img/tiemthuc.png"),
          width: 300,
        },

        {
          text: ` `,
          style: "small",
        },
        {
          text: "Tổng số tiềm thức của bạn là: " + countYes,
          style: "smallBold",
        },
        { ul: SubconsciousSelfNumberpdf(characterArray), style: `small` },
        {
          text: YourSelfNumberContent[`num` + countYes],
          style: "small",
        },
        {
          text: "HƯỚNG DẪN ÁP DỤNG",
          style: "header",
          pageBreak: "before",
          tocItem: true,
        },
        {
          text: `Thần số học giống như một tấm bản đồ, chỉ cho chúng ta những điểm mạnh và điểm yếu trong bản ngã của mình. Nó là công cụ để chúng ta tìm hiểu về bản thân, những con đường chúng ta nên đi để đạt được hạnh phúc và cuộc sống viên mãn. Trong cuộc hành trình của chúng ta, đôi khi chúng ta phải nỗ lực và kiên trì rất nhiều để đạt được mục tiêu. Một số người có thể đến đích nhanh chóng, trong khi có người khác thì cần thời gian hơn. Khi bạn đọc những thông tin về thần số học và kết quả của nó, hãy đặt câu hỏi cho chính bản thân mình để hiểu rõ hơn về mình và biết được những gì cần làm để đạt được hạnh phúc và sống một cuộc đời trọn vẹn.
          Sử dụng thông tin trong tài liệu này như một hướng dẫn để tìm con đường riêng của bạn. Chúng tôi rất vui vì có cơ hội giúp bạn trên hành trình của bạn và hy vọng rằng những thông tin này sẽ giúp bạn tự tìm ra con đường riêng để đạt được mục tiêu và hạnh phúc trong cuộc sống.
          Chúng tôi luôn ủng hộ bạn và chúc bạn mọi điều tốt lành trong tương lai.`,
          style: "small",
        },
        {
          text: "Dưới đây là 7 mẹo giúp bạn đọc báo cáo hiệu quả nhất",
          style: "subheader",
        },
        {
          text: `Mẹo 1: Đưa Ra Quyết Định Phù Hợp Với Bản Thân Bạn Nhất:
          Trong thực tế, thần số học chỉ là một phần nhỏ của cuộc sống của chúng ta. Nó có thể cung cấp cái nhìn thú vị và hữu ích, nhưng nó không nên bị xem là điều kiện cố định hoặc định trước tất cả mọi thứ trong cuộc sống của bạn. Cuộc sống của bạn rất phong phú và đa dạng, và nó không thể bị thu gọn thành một con số hay một dãy số.
          Thay vì ép buộc mình theo thần số học, hãy coi đó như một công cụ tham khảo thú vị, một cách để tìm hiểu về bản thân và trải nghiệm cuộc sống. Nếu bạn cảm thấy như nó có ý nghĩa với bạn và có thể giúp bạn thúc đẩy sự phát triển cá nhân, thì hãy sử dụng nó. Tuy nhiên, đừng quên rằng bạn vẫn là người quyết định cuộc sống của mình và có khả năng thay đổi và tạo ra tương lai của riêng bạn. Hãy tin tưởng vào bản thân và quyết định của mình hơn là dựa vào các số liệu và dự đoán. Cuộc sống là một cuộc hành trình đầy khám phá, và bạn có quyền tự do và khả năng để điều chỉnh và tạo dựng nó theo cách bạn muốn.

          Mẹo 2: Xác Định Mục Tiêu Cụ Thể:
          Trước khi đọc, hãy xác định mục tiêu của bạn. Bạn có thể tìm hiểu về bản thân, dự đoán tương lai hoặc tìm hiểu về cuộc sống hàng ngày. Điều này giúp bạn tập trung vào những phần nội dung phù hợp với mục tiêu của bạn.

          Mẹo 3: Tương Tác Với Nội Dung:
          Ghi chú, đánh dấu trang, hoặc viết ra suy nghĩ của bạn khi đọc. Điều này giúp bạn tiếp thu kiến thức một cách tốt hơn và áp dụng nó vào cuộc sống.
          
          Mẹo 4: Sử Dụng Các Ví Dụ Thực Tế:
          báo cáo cung cấp các ví dụ thực tế để giúp bạn hiểu cách áp dụng thần số học vào cuộc sống hàng ngày. Hãy lắng nghe và tìm hiểu cách những ví dụ này liên quan đến trải nghiệm của bạn.
          
          Mẹo 5: Luôn Giữ Tinh Thần Mở và Sẵn Sàng Phát Triển:
          báo cáo không phải là cuộc kết luận mà là một bước khởi đầu. Hãy luôn mở rộng tầm nhìn và sẵn sàng thay đổi khi cần để phát triển cá nhân.
          
          Mẹo 6: Khám Phá Sâu Hơn:
          Nếu bạn muốn khám phá sâu hơn vào thần số học, bạn có thể tự tra cứu thêm hoặc tham gia các khóa học. báo cáo có thể là một bước đầu tiên trên con đường này.
          
          Mẹo 7: Tận Dụng Lời Khuyên Cụ Thể:
          báo cáo có thể cung cấp lời khuyên cụ thể về cách áp dụng thần số học vào cuộc sống. Nếu có những lời khuyên như vậy, hãy xem xét cách bạn có thể sử dụng chúng để cải thiện cuộc sống hàng ngày của bạn.`,
          style: "small",
        },
        {
          text: "LỜI CẢM ƠN",
          style: "header",
          pageBreak: "before",
          tocItem: true,
        },

        {
          text: `Thân mến bạn,

          Thần số học giống như một tấm bản đồ, chỉ cho chúng ta những điểm mạnh và điểm yếu trong bản ngã của mình. Nó là công cụ để chúng ta tìm hiểu về bản thân, những con đường chúng ta nên đi để đạt được hạnh phúc và cuộc sống viên mãn. Trong cuộc hành trình của chúng ta, đôi khi chúng ta phải nỗ lực và kiên trì rất nhiều để đạt được mục tiêu. Một số người có thể đến đích nhanh chóng, trong khi có người khác thì cần thời gian hơn. Khi bạn đọc những thông tin về thần số học và kết quả của nó, hãy đặt câu hỏi cho chính bản thân mình để hiểu rõ hơn về mình và biết được những gì cần làm để đạt được hạnh phúc và sống một cuộc đời trọn vẹn.
          
          Sử dụng thông tin trong tài liệu này như một hướng dẫn để tìm con đường riêng của bạn. Chúng tôi rất vui vì có cơ hội giúp bạn trên hành trình của bạn và hy vọng rằng những thông tin này sẽ giúp bạn tự tìm ra con đường riêng để đạt được mục tiêu và hạnh phúc trong cuộc sống.
          
          Chúng tôi luôn ủng hộ bạn và chúc bạn mọi điều tốt lành trong tương lai.
          
          Trân trọng,`,
          style: "quote",
        },
      ];
    };
    const imageBase64 = await toDataURL("img/headerlogo.png");

    function createHeader(currentPage) {
      if (currentPage >= 3) {
        return {
          image: imageBase64,
          width: 595.28,
          border: 50,
        };
      }
      return null;
    }

    // const imgfooter = await toDataURL("img/footer.png");

    function createFooter(currentPage, pageCount) {
      if (currentPage >= 3) {
        return {
          columns: [
            { text: "Numology", alignment: "left", color: "#686666" },
            // { image: imgfooter,width: 150,height:40,
            //   alignment: "top",
            // },
            {
              text: `Trang ${currentPage}`,
              color: "blue",
              alignment: "right",
            },
          ],
          margin: [40, 0],
          fontSize: 18,
        };
      }
      return null;
    }

    var dd = {
      pageSize: "A4",
      pageMargins: [40, 90, 40, 80],
      content: await buildPdfContent(),
      header: function (currentPage, pageCount) {
        return createHeader(currentPage);
      },

      footer: function (currentPage, pageCount) {
        return createFooter(currentPage, pageCount);
      },

      styles: {
        header: {
          fontSize: 20,
          bold: true,
          lineHeight: 1.5,
          color: "#af3588",
        },
        subheader: {
          fontSize: 18,
          bold: true,
          lineHeight: 1.5,
        },
        quote: {
          italics: true,
          lineHeight: 1.8,
        },
        small: {
          fontSize: 15,
          lineHeight: 1.8,
          alignment: "justify",
        },
        smallBold: {
          fontSize: 15,
          bold: true,
          lineHeight: 1.5,
          color: "red",
        },
      },
    };
    const pdfDocGenerator = pdfMake.createPdf(dd);

    pdfDocGenerator.getBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${normalizedFullName}-${year}-report.pdf`;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setIsCreatingPdf(false);
    });
  };

  return (
    <div>
        {/* <PrimaryButton primary large onClick={generatePDF}>{isCreatingPdf?("PDF đang được tạo") : ("Tạo pff")}</PrimaryButton>  */}
        <DemoRpPayment generatePDF={generatePDF} isCreatingPdf={isCreatingPdf}/>
    </div>
  );
};
export default ReportCal;
