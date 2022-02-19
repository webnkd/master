import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Kỹ thuật xây dựng</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7580201<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), A01 (toán, lý, anh), C01 (toán, lý, văn), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 21,00 - HB 23,00 - ĐGNL 750<br/>
        <strong><div id="td">Học gì: </div></strong>Tư vấn, thiết kế, tổ chức thi công, quản lý giám sát và nghiệm thu các công trình xây dựng dân dụng, công trình xây dựng công nghiệp phục vụ đời sống con người như: nhà ở, nhà hàng, khách sạn, nhà xưởng, bệnh viên, đường cao tốc, cầu đường, sân bay, cảng biển, đường sắt, đường hầm, công trình trên biển
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Kỹ sư phụ trách thiết kế, thi công, giám sát, thẩm định, nghiệm thu các công trình xây dựng dân dụng và công nghiệp tại các doanh nghiệp; công ty tư vấn xây dựng hay các cơ quan quản lý nhà nước về xây dựng như: sở xây dựng, phòng công thương quận, huyện, ban quản lý dự án xây dựng,… chuyên viên tư vấn, lập dự toán, thiết kế kỹ thuật, thẩm tra thiết kế tại các công ty, tập đoàn xây dựng hoặc giảng dạy, nghiên cứu tại các cơ quan nghiên cứu, đào tạo chuyên ngành xây dựng
    </div>
  </div>
);
