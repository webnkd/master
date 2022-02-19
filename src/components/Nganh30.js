import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Marketing</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7340115, 7340115C<br/>
        <strong>THM: </strong>A01 (toán, lý, anh), C01 (toán, lý, văn), D01 (toán, văn, anh), D96 (toán, anh, khxh)<br/>
        <strong>ĐCĐT: </strong>ĐT 26,00 - HB 26,00 - ĐGNL 800<br/>
        <strong>ĐCCLC: </strong>ĐT 24,50 – HB 22,00 – ĐGNL 680<br/>
        <strong><div id="td">Học gì: </div></strong>Nghiên cứu thị trường, xây dựng và phát triển các mối quan hệ khách hàng, tổ chức phân phối sản phẩm, định giá sản phẩm, quảng bá thương hiệu, tổ chức sự kiện
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Các doanh nghiệp thuộc mọi thành phần kinh tế như các doanh nghiệp sản xuất, doanh nghiệp thương mại - dịch vụ, các cơ quan, tổ chức phi lợi nhuận. công việc marketing gắn liền với bộ phận nghiên cứu và phát triển, chăm sóc khách hàng, nghiên cứu thị trường
    </div>
  </div>
);
