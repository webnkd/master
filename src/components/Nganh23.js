import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Quản lý đất đai; Kinh tế tài nguyên</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7850103<br/>
        <strong>THM: </strong>A01 (toán, lý, anh), C01 (toán, lý, văn), D01 (toán, văn, anh), D96 (toán, anh, khxh)<br/>
        <strong>ĐCĐT: </strong>ĐT 18,50 - Hb 20,00 - ĐGNL 750<br/>
        <strong><div id="td">Học gì: </div></strong>
        <strong>* Quản lý đất đai: </strong>Quản lý nhà nước về tài nguyên đất, đánh giá, phân hạng đất, thiết lập bản đồ; đồng thời, nghiên cứu các giải pháp kinh tế kỹ thuật, thực hiện các phương án sử dụng đất đai, giải quyết tranh chấp, đền bù đất nông thôn và đô thị
        <br/>
        <strong>* Kinh tế tài nguyên thiên nhiên: </strong>Là một khoa học nghiên cứu sự tương tác giữa hệ thống kinh tế và hệ thống môi trường; nghiên cứu cách thức khai thác, sử dụng tối ưu, bền vững nguồn tài nguyên thiên nhiên và giảm thiểu tác động tiêu cực đến môi trường từ các hoạt động kinh tế
        <br/>
        <strong><div id="td">Làm gì: </div></strong>
        <strong>* Quản lý đất đai: </strong>Công chức, viên chức tại các Sở tài nguyên và môi trường cấp thành phố, văn phòng đăng ký đất đai các cấp, cán bộ địa chính cấp phường. các cơ quan chuyên ngành: cục quản lý đất đai, trung tâm phát triển quỹ đất, viện nghiên cứu địa chính
        <br/>
        <strong>* Kinh tế tài nguyên thiên nhiên: </strong>Công chức, viên chức tại các cơ quan quản lý nhà nước có liên quan đến lĩnh vực tài nguyên và môi trường từ cấp trung ương đến cấp tỉnh, huyện; Ban quản lý các dự án tài nguyên và môi trường; Ban quản Vườn quốc gia, Khu bảo tồn thiên nhiên; Cán bộ bộ phận thẩm định dự án, bộ phận tư vấn đầu tư, kinh doanh tại các doanh nghiệp; Nghiên cứu viên, giảng viên tại các viện nghiên cứu, các trường đại học
    </div>
  </div>
);
