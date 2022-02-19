import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Kinh doanh quốc tế</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7340120, 7340120C<br/>
        <strong>THM: </strong>A01 (toán, lý, anh), C01 (toán, lý, văn), D01 (toán, văn, anh), D96 (toán, anh, khxh)<br/>
        <strong>ĐCĐT: </strong>ĐT 25,50 - HB 27,00 - ĐGNL 800<br/>
        <strong>ĐCCLC: </strong>ĐT 24,00 – HB 22,00 – ĐGNL 680<br/>
        <strong><div id="td">Học gì: </div></strong>Phân tích sự tác động của các yếu tố mang tính toàn cầu đến hoạt động doanh nghiệp như chính trị, kinh tế, nhân khẩu học, công nghệ, địa lý và văn hóa; Phân tích tài chính, thị trường ngoại hối và các hệ thống tỷ giá hối đoái trên thế giới
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Chuyên viên kinh doanh, xuất nhập khẩu của các đơn vị sản xuất kinh doanh, các công ty thương mại, công ty xuất nhập khẩu, văn phòng đại diện, đại lý vận tải tàu biển, hàng không, bảo hiểm, ngân hàng
    </div>
  </div>
);
