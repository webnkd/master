import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Kế toán</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7340301, 7340301C<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), A01 (toán, lý, anh), D01 (toán, văn, anh), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 25,00 - HB 25,00 - ĐGNL 750<br/>
        <strong>ĐCCLC: </strong>ĐT 23,00 – HB 21,00 – ĐGNL 680<br/>
        <strong><div id="td">Học gì: </div></strong>Thu thập, xử lý, kiểm tra và cung cấp thông tin về tình hình tài chính, hiệu quả hoạt động kinh doanh thông qua các nghiệp vụ của kế toán như tính phí, làm dự toán, phân bổ ngân sách, quản lý doanh thu theo sát các kế hoạch kinh doanh của doanh nghiệp
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Chuyên viên phụ trách kế toán, kiểm toán, thuế, giao dịch ngân hàng, kiểm soát viên, thủ quỹ, tư vấn tài chính tại các doanh nghiệp thuộc mọi lĩnh vực trong cơ quan quản lý tài chính nhà nước, các đơn vị thuộc lĩnh vực công, các tổ chức xã hội, tổ chức phi chính phủ, ngân hàng
    </div>
  </div>
);
