import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Công nghệ kỹ thuật cơ khí</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7510201, 7510201C<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), A01 (toán, lý, anh), C01 (toán, lý, văn), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 23,50 - HB 24,00 - ĐGNL 780<br/>
        <strong>ĐCCLC: </strong>ĐT 20,00 – HB 22,50 – ĐGNL 700<br/>
        <strong><div id="td">Học gì: </div></strong>Gia công, thiết kế, chế tạo và cải tiến các sản phẩm cơ khí; Khả năng vận hành, lắp ráp, bảo trì các thiết bị cơ khí và giải quyết những vấn đề liên quan đến máy móc, thiết bị trong quy trình sản xuất
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Kỹ sư vận hành, bảo trì, thiết kế, sửa chữa máy móc, thiết bị cơ khí tại các đơn vị sản xuất, kinh doanh, dịch vụ về cơ khí
    </div>
  </div>
);
