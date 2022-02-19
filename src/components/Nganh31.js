import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>QTDL và lữ hành; Khách sạn; Nhà hàng</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7810103<br/>
        <strong>THM: </strong>A01 (toán, lý, anh), C01 (toán, lý, văn), D01 (toán, văn, anh), D96 (toán, anh, khxh)<br/>
        <strong>ĐCĐT: </strong>ĐT 24,00 - HB 24,00 - ĐGNL 800<br/>
        <strong>ĐCCLC: </strong><br/>
        <strong><div id="td">Học gì: </div></strong>
        <strong>* QT du lịch và lữ hành: </strong>Là ngành học bao gồm các kiến thức về quá trình quản lý và điều hành du lịch, chịu trách nhiệm phân công công việc cho các hướng dẫn viên du lịch, nhận thông tin để phối hợp với các bộ phận, cơ quan chức năng giải quyết phát sinh, thiết kế chương trình du lịch… theo học ngành quản trị dịch vụ du lịch và lữ hành sinh viên sẽ được tiếp thu những kiến thức phong phú về văn hóa, đời sống, lịch sử
        <br/>
        <strong>* QT nhà hàng - khách sạn: </strong>Là ngành dịch vụ chuyên về các hình thức giải trí, vui chơi, nghỉ dưỡng và các dịch vụ ăn uống. những người được đào tạo theo ngành này bắt buộc phải nắm được các kỹ năng, kiến thức cần thiết để mang đến sự hài lòng cũng như cảm giác an toàn... cho các khách hàng được phục vụ
        <br/>
        <strong>* QT nhà hàng và dịch vụ ăn uống: </strong>Là ngành học nghiên cứu chuyên sâu về lĩnh vực nhà hàng và khách sạn. cung cấp cho người học các kiến thức chuyên môn thuộc phương diện văn hóa ẩm thực
        <br/>
        <strong><div id="td">Làm gì: </div></strong>
        <strong>* QT du lịch và lữ hành: </strong>Hướng dẫn viên du lịch hoặc chuyên viên phụ trách các bộ phận lưu trú, tiếp thị, chăm sóc khách hàng, tổ chức hội nghị - sự kiện; quản trị - điều hành - thiết kế tour tại các công ty trong và ngoài nước hoặc các tổ chức phi chính phủ; chuyên viên tại các sở, ban, ngành về du lịch hoặc nghiên cứu, giảng dạy về du lịch tại các cơ sở đào tạo, viện nghiên cứu
        <br/>
        <strong>* QT nhà hàng - khách sạn: </strong>Quản lý chi tiêu sản phẩm, chuyên viên lên kế hoạch sự kiện, quản lý khách sạn, quản lý mua hàng, chuyên viên huấn luyện của nhà hàng/ khách sạn
        <br/>
        <strong>* QT nhà hàng và dịch vụ ăn uống: </strong>Quản lý dịch vụ ăn uống, quản lý thức ăn và nước uống, quản lý bếp, quản lý nhà hàng
    </div>
  </div>
);
