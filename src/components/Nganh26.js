import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Kiểm toán</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7340302, 7340302C<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), A01 (toán, lý, anh), D01 (toán, văn, anh), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 23,75 - HB 23,00 - ĐGNL 750<br/>
        <strong>ĐCCLC: </strong>ĐT 21,75 – HB 21,00 – ĐGNL 680<br/>
        <strong><div id="td">Học gì: </div></strong>Kiểm toán là ngành học đào tạo chung lĩnh vực với kế toán, có thể nói nó là ngành học đào tạo ra những người sẽ “sửa lưng” kế toán. cụ thể thì kiểm toán viên là những người kiểm tra và xác nhận độ chính xác và tính trung thực từ những số liệu được thống kê bởi kế toán
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Kiểm toán viên độc lập cho các công ty cung cấp dịch vụ kiểm toán, tư vấn kế toán, thuế, tư vấn tài chính cho các công ty, doanh nghiệp, kiểm toán viên nội bộ, kiểm toán viên tại cơ quan kiểm toán của nhà nước. cán bộ công tác và quản lý tài chính tại các tổ chức
    </div>
  </div>
);
