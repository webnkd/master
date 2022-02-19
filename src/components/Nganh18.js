import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Dược học (new)</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7720201<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), B00 (toán, hóa, sinh), D07 (toán, hóa, anh), D90 (toán, anh, khtn)<br/>
        <strong><div id="td">Học gì: </div></strong>Dược học được phân thành nhiều lĩnh vực như: Sản xuất, phân phối, quản lý dược, hướng dẫn sử dụng thuốc cho mọi người. Sinh viên theo học ngành Dược được trang bị khối kiến thức khoa học cơ bản và dược học cơ sở, có kiến thức và kỹ năng chuyên môn đầy đủ về dược học như chuyển hóa thuốc trong cơ thể, những phản ứng bất lợi của thuốc, tương tác qua lại giữa các loại thuốc, công thức phối hợp thuốc để tạo hiệu quả chữa bệnh tối ưu và an toàn nhất cho người dùng
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Tự mở nhà thuốc tư nhân; làm việc tại các cơ sở khám chữa bệnh, tư vấn về sử dụng thuốc và sức khỏe cho người dân; làm công việc chuyên môn về dược trong ngành y tế; tham gia quá trình quản lý bệnh, kết hợp với bác sĩ tối ưu hóa và theo dõi việc điều trị dùng thuốc hoặc giải thích các kết quả xét nghiệm lâm sàng; dược sĩ trong các công ty sản xuất, kinh doanh dược phẩm; dược sĩ tham gia vào quy trình sản xuất, phân phối và quản lý thuốc tại các công ty, xí nghiệp dược phẩm hoặc nhà thuốc tư nhân của riêng mình; chuyên viên kiểm tra, giám sát chất lượng sản phẩm tại các trung tâm kiểm nghiệm dược phẩm - mỹ phẩm, công ty dược phẩm, công ty mỹ phẩm và thực phẩm chức năng; giảng dạy, nghiên cứu trong các đơn vị đào tạo và nghiên cứu chuyên môn hóa dược
    </div>
  </div>
);
