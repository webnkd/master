import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Công nghệ thực phẩm</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7540101, 7540101C<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), B00 (toán, hóa, sinh), D07 (toán, hóa, anh), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 23,00 - HB 24,00 - ĐGNL 750<br/>
        <strong>ĐCCLC: </strong>ĐT 17,50 – HB 22,00 – ĐGNL 700<br/>
        <strong><div id="td">Học gì: </div></strong>Công nghệ thực phẩm là một trong những ngành nằm trong lĩnh vực bảo quản thực phẩm, chế biến nông sản, kiểm tra đánh giá chất lượng của thực phẩm, nghiên cứu phát triển những sản phẩm như mì tôm, kẹo, bánh… đáp ứng được nhu cầu của mọi người mà không làm ảnh hưởng đến sức khỏe của người tiêu dùng
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Quản lý quá trình chế biến, bảo quản, kiểm định thực phẩm, dây chuyền sản xuất… tại các doanh nghiệp sản xuất và chế biến thực phẩm; Làm việc tại các viện nghiên cứu, công ty liên quan đến lương thực thực phẩm
    </div>
  </div>
);
