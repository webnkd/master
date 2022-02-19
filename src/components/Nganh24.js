import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>QLTN môi trường; CNKT môi trường</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7850101<br/>
        <strong>THM: </strong>B00 (toán, hóa, sinh), C02 (toán, hóa, văn),  D90 (toán, anh, khtn), D96 (toán, anh, khxh)<br/>
        <strong>ĐCĐT: </strong>Điểm thi 18,5 - Học bạ 20,00 - ĐGNL 750<br/>
        <strong><div id="td">Học gì: </div></strong>
        <strong>* QLTN và môi trường: </strong>Quản lý đất đai, quản lý tài nguyên nước, rừng, khoáng sản, khí hậu và môi trường
        <br/>
        <strong>* CNKT môi trường: </strong>Là ngành học về các kỹ thuật và công nghệ ngăn ngừa, giảm thiểu ô nhiễm, thu hồi, tái chế, tái sử dụng và xử lý chất thải thông qua các biện pháp sinh - lý - hóa học. Các giải pháp quản lý góp phần bảo vệ môi trường sống và phục vụ phát triển bền vững
        <br/>
        <strong><div id="td">Làm gì: </div></strong>
        <strong>* QLTN và môi trường: </strong>Cán bộ quản lý tài nguyên và môi trường trong các tổ chức quốc tế, tổ chức chính phủ và phi chính phủ, các đơn vị tư vấn, các doanh nghiệp hoạt động trong lĩnh vực khai thác, sử dụng, bảo vệ tài nguyên và môi trường, trung tâm tư vấn lập quy hoạch, kế hoạch sử dụng đất, quy hoạch xây dựng, quy hoạch rừng, quy hoạch môi trường
        <br/>
        <strong>* CNKT môi trường: </strong>Thiết kế và vận hành hệ thống xử lý chất thải, Quan trắc và phân tích các chỉ tiêu môi trường, tư vấn và lập các báo cáo về Bảo vệ môi trường như ĐTM, CM, CDM, xây dựng các quy trình Giám sát An toàn-Sức khỏe-Môi trường (HSE), ISO, OHSAS
    </div>
  </div>
);
