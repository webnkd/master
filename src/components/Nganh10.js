import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Công nghệ kỹ thuật nhiệt</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7510206, 7510206C (new)<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), A01 (toán, lý, anh), C01 (toán, lý, văn), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 19,00 - HB 20,50 - ĐGNL 750<br/>
        <strong><div id="td">Học gì: </div></strong>Máy lạnh, lò hơi, tuabin hơi và tuabin khí; công nghệ chế tạo máy; nhà máy nhiệt điện; kỹ thuật điều hòa không khí, thiết bị sấy; kỹ thuật an toàn, tự động hóa các quá trình nhiệt lạnh, đo lường nhiệt, năng lượng gió, năng lượng mặt trời, kỹ thuật nâng – vận chuyển
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Nhà máy thực phẩm, nhà máy dệt, nhà máy giấy,... hay các công ty về cơ khí – điện lạnh, các khách sạn, nhà hàng lớn
    </div>
  </div>
);
