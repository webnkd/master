import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Kỹ thuật xây dựng công trình giao thông</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7580205<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), A01 (toán, lý, anh), C01 (toán, lý, văn), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 18,50 - HB 20,00 - ĐGNL 800<br/>
        <strong><div id="td">Học gì: </div></strong>Thiết kế, thi công, quản lý và khai thác các công trình giao thông phục vụ đời sống như: cầu, đường bộ, đường cao tốc, đường sắt, đường hầm, cảng, sân bay... cũng như các công trình trong lĩnh vực xây dựng nói chung
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Xây dựng mới hay sửa chữa nâng cấp các công trình cầu đường, giải quyết các vấn đề về giao thông (kẹt xe, hệ thống giao thông thông minh, tổ chức giao thông trong các khu đô thị mới…); Tư vấn, phản biện các vấn đề kỹ thuật xây dựng; Khảo sát, thiết kế các công trình xây dựng; Tổ chức và quản lý thi công các công trình xây dựng
    </div>
  </div>
);
