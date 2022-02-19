import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Luật quốc tế</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7380108, 7380108C<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), C00 (văn, anh, địa), D01 (toán, văn, anh), D96 (toán, anh, khxh)<br/>
        <strong>ĐCĐT: </strong>ĐT 24,25 - HB 24,00 - ĐGNL 750<br/>
        <strong>ĐCCLC: </strong>ĐT 20,00 – HB 21,00 – ĐGNL 680<br/>
        <strong><div id="td">Học gì: </div></strong>Luật quốc tế là ngành học chuyên nghiên cứu về bộ máy các nguyên tắc và quy phạm pháp luật, được các đất nước và chủ thể khắc của luật quốc tế deal tạo nên, trên cơ sở tự nguyện và công bằng, nhằm điều chỉnh những quan hệ phát sinh giữa các đất nước và chủ thể đó trong mọi lĩnh vực của đời sống quốc tế
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Các cơ quan nhà nước như bộ, sở tư pháp, cơ quan ngoại giao, các đại sứ quán việt nam tại nước ngoài, các doanh nghiệp nước ngoài tại việt nam, các cơ quan nội dung đại chúng, các trường học, viện nghiên cứu
    </div>
  </div>
);
