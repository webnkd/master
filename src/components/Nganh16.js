import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Công nghệ kỹ thuật hóa học</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7510401, 7510401C<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), B00 (toán, hóa, sinh), D07 (toán, hóa, anh), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 18,50 - HB 20,00 - ĐGNL 780<br/>
        <strong>ĐCCLC: </strong>ĐT 17,50 – HB 21,00 – ĐGNL 700<br/>
        <strong><div id="td">Học gì: </div></strong>Hóa học là một lĩnh vực khoa học và công nghệ chuyên nghiên cứu và ứng dụng những kiến thức hóa học và kỹ thuật vào quá trình sản xuất để tạo ra các sản phẩm có giá trị phục vụ công nghiệp và đời sống xã hội
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Nhà máy, xí nghiệp liên quan đến hóa chất, dược phẩm, thực phẩm, mỹ phẩm, thuốc trừ sâu, dầu khí, môi trường, công nghệ vật liệu; cán bộ phân tích kiểm nghiệm dược phẩm, mỹ phẩm
    </div>
  </div>
);
