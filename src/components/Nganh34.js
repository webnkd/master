import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Ngôn ngữ anh</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7220201<br/>
        <strong>THM: </strong>D01 (toán, văn, anh), D14 (Văn, anh, sử), D15 (văn, anh, địa), D96 (toán, anh, khxh)<br/>
        <strong>ĐCĐT: </strong>ĐT 24,25 - HB 24,50 - ĐGNL 800<br/>
        <strong><div id="td">Học gì: </div></strong>Ngôn ngữ anh là ngành học nghiên cứu về các phương pháp học tập tiếng anh; đồng thời đây còn là ngành nghiên cứu về lịch sử, con người, văn hóa của các quốc gia, dân tộc sử dụng tiếng anh trên thế giới. Bên cạnh đó, trong quá trình đào tạo, sinh viên còn được trang bị thêm các kiến thức bộ trở về kinh tế, tài chính, du lịch, sự kiện, giảng dạy… để đáp ứng nhu cầu của thị trường việc làm hiện nay
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Phiên dịch cho các công ty, cơ quan truyền thông, các tổ chức kinh tế, xã hội của việt nam và quốc tế, dịch thuật cho các nhà xuất bản, trung tâm phát hành sách, báo chí…nhân viên truyền thông, marketing, tổ chức sự kiện kiện, thư ký, trợ lý
    </div>
  </div>
);
