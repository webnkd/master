import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Phân tích Tài chính – Kinh doanh (new)</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7340303<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), A01 (toán, lý, anh), D01 (toán, văn, anh), D90 (toán, anh, khtn)<br/>
        <strong><div id="td">Học gì: </div></strong>Tư duy tổng hợp về kinh tế, nắm vững kiến thức về kinh tế, tài chính, ngân hàng, kế toán - kiểm toán… đặc biệt phải có kiến thức chuyên sâu và kỹ năng Phân tích tài chính, nắm vững kỹ năng phân tích tài chính vi mô và vĩ mô, dự báo tài chính, có khả năng đánh giá hiệu lực và hiệu quả chiến lược, kế hoạch tài chính đã xây dựng, triển khai trong doanh nghiệp, ngân hàng, đơn vị hành chính, sự nghiệp và phân tích hiệu quả và giám sát các chính sách tài chính vĩ mô, vi mô
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Trợ lý cho lãnh đạo các cơ quan quản lý kinh tế, tài chính của Nhà nước; làm việc tại Ban Tài chính – Kế toán, Ban Kiểm soát tại các Tổng công ty, Tập đoàn kinh tế; Chuyên viên quản lý khách hàng doanh nghiệp của các tổ chức tín dụng hoặc các Công ty bảo hiểm và các quỹ đầu tư; Giảng viên giảng dạy các môn học về Phân tích tài chính, Phân tích hoạt động kinh doanh, Phân tích báo cáo tài chính, Phân tích tài chính DN 
    </div>
  </div>
);
