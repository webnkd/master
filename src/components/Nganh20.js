import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Dinh dưỡng và Khoa học thực phẩm</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7720497<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), B00 (toán, hóa, sinh), D07 (toán, hóa, anh), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 18,50 - HB 20,00 - ĐGNL 750<br/>
        <strong><div id="td">Học gì: </div></strong>Hai khối kiến thức cơ bản là khoa học dinh dưỡng và khoa học thực phẩm, ngành học dinh dưỡng và khoa học thực phẩm hiện nay được xem là ngành học góp phần thúc đẩy, đổi mới công nghệ và khoa học thực phẩm theo hướng gắn kết với dinh dưỡng và sức khỏe
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Làm việc ở các khoa dinh dưỡng tại bệnh viên, chi cục vệ sinh an toàn thực phẩm, hay tại trung tâm y tế dự phòng. làm việc tại các tổ chức phi chính phủ trong và ngoài nước về lĩnh vực y tế, thực phẩm. Chuyên viên dinh dưỡng và ẩm thực, chuyên nghiên cứu phát triển sản phẩm
    </div>
  </div>
);
