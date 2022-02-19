import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Công nghệ kỹ thuật máy tính</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7480108, 7480108C<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), A01 (toán, lý, anh), C01 (toán, lý, văn), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 24,25 - HB 23,50 - ĐGNL 750<br/>
        <strong>ĐCCLC: </strong>ĐT 19,50 – HB 21,00 – ĐGNL 700<br/>
        <strong><div id="td">Học gì: </div></strong>Kỹ năng phân tích - thiết kế - xây dựng hệ thống phần cứng lẫn phần mềm trong các lĩnh vực: công nghệ thiết kế chip, công nghệ robot; hệ thống nhúng
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Lập trình viên, đặc biệt là lập trình các phần mềm nhúng trên các thiết bị di động (smartphone, tablet, iphone, ipad,…), các vi xử lý-vi điều khiển trong các hệ thống công nghiệp, xe ô tô, điện gia dụng, ngôi nhà thông minh, thiết kế mạch điện-điện tử, mạch điều khiển trong công nghiệp, vi mạch, chip
    </div>
  </div>
);
