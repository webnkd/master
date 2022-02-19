import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Công nghệ kỹ thuật cơ điện tử</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7510203, 7510203C<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), A01 (toán, lý, anh), C01 (toán, lý, văn), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 24,00 - HB 24,00 - ĐGNL 800<br/>
        <strong>ĐCCLC: </strong>ĐT 19,50 – HB 22,00 – ĐGNL 700<br/>
        <strong><div id="td">Học gì: </div></strong>Hệ thống sản xuất tích hợp máy tính, hệ thống khí nén – thủy lực, hệ thống điều khiển nhúng, hệ thống đo lường và điều khiển thông minh; kiến thức về cảm biến, robot
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Thiết kế, vận hành hệ thống phần cứng và phần mềm điều khiển máy móc, thiết bị tự động, hệ thống sản xuất tự động, lập trình điều khiển, thi công và chuyển giao các dây chuyền, hệ thống tự động, bán tự động tại các công ty về cơ khí, điện, điện tử
    </div>
  </div>
);
