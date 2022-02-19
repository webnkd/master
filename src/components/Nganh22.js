import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>CN sinh học (y dược; nông nghiệp; thẩm mĩ)</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7240201, 7420201C<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), B00 (toán, hóa, sinh), D07 (toán, hóa, anh), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 21,00 - HB 21,00 - ĐGNL 780<br/>
        <strong>ĐCCLC: </strong>ĐT 17,50 – HB 21,00 – ĐGNL 700<br/>
        <strong><div id="td">Học gì: </div></strong>Công nghệ sinh học là lĩnh vực đa ngành và liên ngành, gắn kết với nhiều lĩnh vực trong sản xuất và cuộc sống như: chọn tạo giống cây trồng vật nuôi mang các đặc tính mới (trồng trọt, chăn nuôi, nuôi trồng thủy hải sản); chế biến và bảo quản thực phẩm; sản xuất các chế phẩm sinh học sử dụng trong nông nghiệp, thuốc bảo vệ thực vật; ứng dụng trong y học và dược phẩm, chẩn đoán bệnh; xử lý ô nhiễm môi trường, rác thải
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Điều hành sản xuất, quản lý và đảm bảo chất lượng tại các nhà máy sản xuất dược phẩm, thực phẩm; chuyên viên công nghệ sinh học tại các công ty chế biến nông sản, thực phẩm, thủy sản; các trung tâm kiểm nghiệm, phòng thí nghiệm, cơ quan nghiên cứu về công nghệ vi sinh, công nghệ sinh học thực vật, công nghệ sinh học động vật; chuyên viên phân tích mẫu bệnh phẩm; cán bộ xét nghiệm trong bệnh viện, trung tâm y khoa
    </div>
  </div>
);
