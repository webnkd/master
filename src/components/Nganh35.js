import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Luật kinh tế</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7380107, 7380107C<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), C00 (văn, anh, địa), D01 (toán, văn, anh), D96 (toán, anh, khxh)<br/>
        <strong>ĐCĐT: </strong>ĐT 26,00 - HB 26,00 - ĐGNL 800<br/>
        <strong>ĐCCLC: </strong>ĐT 23,25 – HB 22,00 – ĐGNL 700<br/>
        <strong><div id="td">Học gì: </div></strong>Luật kinh tế là ngành thừa hưởng nền tảng từ luật học kết hợp với kiến thức trong lĩnh vực kinh tế, thương mại, là hệ thống các quy phạm pháp luật do nhà nước ban hành để điều chỉnh các quan hệ kinh tế phát sinh trong quá trình tổ chức và quản lý kinh tế của nhà nước và trong quá trình sản xuất kinh doanh giữa các chủ thể kinh doanh với nhau. Luật kinh tế ra đời nhằm duy trì và giải quyết các tranh chấp trong kinh doanh, thương mại cũng như đảm bảo quy trình hoạt động của các doanh nghiệp trong quá trình trao đổi, giao thương cả trong nước và quốc tế
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Chuyên viên tư vấn pháp luật trong doanh nghiệp và các tổ chức kinh tế, xã hội; các dịch vụ pháp lý của luật sư hoặc người hành nghề trong các tổ chức dịch vụ pháp luật
    </div>
  </div>
);
