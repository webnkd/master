import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Công nghệ kỹ thuật ô tô</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7510205, 7510205C (new)<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), A01 (toán, lý, anh), C01 (toán, lý, văn), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 25,50 - HB 25,50 - ĐGNL 750<br/>
        <strong><div id="td">Học gì: </div></strong>Cơ khí ô tô – máy động lực, hệ thống truyền động – truyền lực, cơ cấu khí, hệ thống điều khiển, để có khả năng áp dụng những nguyên lý kỹ thuật cơ bản, kỹ năng thực hành cao và các kỹ năng kỹ thuật liên quan đến ô tô
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Kỹ sư vận hành, giám sát sản xuất phụ tùng, phụ kiện và lắp ráp ô tô, máy động lực tại các nhà máy sản xuất, cơ sở sửa chữa, bảo trì, bảo dưỡng ô tô; kiểm định viên tại các trạm đăng kiểm ô tô; nhân viên kinh doanh tại các doanh nghiệp kinh doanh ô tô, máy động lực, phụ tùng ô tô
    </div>
  </div>
);
