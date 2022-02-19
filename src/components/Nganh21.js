import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Đảm bảo chất lượng và An toàn thực phẩm</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7540106<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), B00 (toán, hóa, sinh), D07 (toán, hóa, anh), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 18,50 - HB 20,00 - ĐGNL 750<br/>
        <strong><div id="td">Học gì: </div></strong>Xử lý, chế biến, bảo quản và lưu trữ thực phẩm bằng những phương pháp phòng ngừa, phòng chống bệnh tật do thực phẩm gây ra
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Chuyên viên kiểm soát và đảm bảo chất lượng nguyên liệu; Vận hành thiết bị sản xuất, quản lý sản xuất, kiểm tra, giám sát; Phân tích chất lượng sản phẩm, nghiên cứu và phát triển sản phẩm… tại các nhà máy chế biến thực phẩm. Chuyên viên dinh dưỡng tại khoa dinh dưỡng, chuyên viên xét nghiệm chỉ tiêu hóa sinh, vi sinh tại khoa xét nghiệm… tại các bệnh viện
    </div>
  </div>
);
