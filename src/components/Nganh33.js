import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Thương mại điện tử</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7340122<br/>
        <strong>THM: </strong>A01 (toán, lý, anh), C01 (toán, lý, văn), D01 (toán, văn, anh),  D96 (toán, anh, khxh)<br/>
        <strong>ĐCĐT: </strong>ĐT 25,00 - Hb 24,00 - ĐGNL 780<br/>
        <strong><div id="td">Học gì: </div></strong>Nói một cách đơn giản, thương mại điện tử chính là hoạt động mua bán sản phẩm hoặc dịch vụ thông qua internet và các phương tiện điện tử khác. Các giao dịch này bao gồm tất cả các hoạt động như: giao dịch, mua bán, thanh toán, đặt hàng, quảng cáo và giao hàng
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Chuyên viên phân tích thương mại điện tử, tiếp nhận khách hàng và duy trì doanh thu cho doanh nghiệp; Marketing online tại doanh nghiệp, quản lý hiệu suất thương mại điện tử; Quản lý trang web thương mại điện tử
    </div>
  </div>
);
