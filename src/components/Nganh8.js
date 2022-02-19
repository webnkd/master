import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Công nghệ chế tạo máy</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7510202, 7510202C<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), A01 (toán, lý, anh), C01 (toán, lý, văn), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 22,50 - HB 23,00 – ĐGNL 850<br/>
        <strong>ĐCCLC: </strong>ĐT 18,00 – HB 22,00 – ĐGNL 700<br/>
        <strong><div id="td">Học gì: </div></strong>Công nghệ chế tạo máy, kỹ thuật đo lường, dung sai lắp ghép, chi tiết máy, sức bền vật liệu, vật liệu cơ khí, máy công cụ, công nghệ CNC
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Vận hành các thiết bị cơ khí; Sản xuất, lắp đặt, và bảo dưỡng các sản phẩm cơ khí; Thiết kế và lên bản vẽ các loại máy móc, thiết bị cho sản xuất; Lập trình gia công máy CNC; gia công sản phẩm tiện, phay, hàn
    </div>
  </div>
);
