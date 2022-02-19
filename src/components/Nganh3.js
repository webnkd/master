import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Điện tử - Viễn thông</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7510302, 7510302C<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), A01 (toán, lý, anh), C01 (toán, lý, văn), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 21,00 – HB 22,00 - ĐGNL 800<br/>
        <strong>ĐCCLC: </strong>ĐT 17,50 – HB 21,00 – ĐGNL 700<br/>
        <strong><div id="td">Học gì: </div></strong>Lĩnh vực điện tử, truyền thông; có khả năng tiếp cận CNKT điện tử tiên tiến như mạng không dây, mạng truyền số liệu, vi ba số, hệ thống phát thanh truyền hình, công nghệ phân tích và xử lý tín hiệu, âm thanh, hình ảnh
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Nghiên cứu và phát triển mạng vô tuyến, định vị dẫn đường, thiết bị tín hiệu đa phương tiện về âm thanh, hình ảnh
    </div>
  </div>
);
