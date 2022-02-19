import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Thiết kế thời trang</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7210404<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), C01 (toán, lý, văn), D01(toán, văn, anh), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 22,50 - HB 23,00 - ĐGNL 750<br/>
        <strong><div id="td">Học gì: </div></strong>Thiết kế và sản xuất ra quần áo, phụ kiện nói chung mà còn biết thêm cách may áo dạ hội hay đồ công sở
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Nhà thiết kế thời trang; Quản lý nhà xưởng, nhà máy may công nghiệp, quản lý chất lượng may mặc của các công ty thời trang; Tự kinh doanh trong lĩnh vực thời trang, thiết kế
    </div>
  </div>
);
