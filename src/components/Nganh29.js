import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>QTKD; QT nguồn nhân lực; Logistics</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7340101, 7340101C<br/>
        <strong>THM: </strong>A01 (toán, lý, anh), C01 (toán, lý, văn), D01 (toán, văn, anh), D96 (toán, anh, khxh)<br/>
        <strong>ĐCĐT: </strong>ĐT 25,50 - Hb 26,00 - ĐGNL 800<br/>
        <strong>ĐCCLC: </strong>ĐT 23,75 – HB 22,00 – ĐGNL 680<br/>
        <strong><div id="td">Học gì: </div></strong>
        <strong>* QTKD: </strong>Là ngành có các hoạt động liên quan trực tiếp hoặc gián tiếp đến việc tạo ra các giá trị và tiến hành trao đổi vì lợi ích của các bên liên quan. Quản trị trong kinh doanh có thể được hiểu là việc quản lý một doanh nghiệp hoặc tổ chức. Về cụ thể, quản trị kinh doanh bao gồm những hành động nhằm đảm bảo, duy trì và phát triển hoạt động kinh doanh của doanh nghiệp
        <br/>
        <strong>* QT nguồn nhân lực: </strong>Con người là nòng cốt, là nguồn nhân lực quan trọng không thể thiếu trong sự hình thành và phát triển của xã hội; Học quản trị nguồn nhân lực là học những kiến thức, kỹ năng cơ bản từ thực tiễn về công tác quản trị con người
        <br/>
        <strong>* Logistics và QL chuỗi cung ứng: </strong>Là việc quản lý một mạng lưới kết nối của các doanh nghiệp tham gia vào việc cung cấp hàng hoá và dịch vụ đến tận tay người tiêu dùng. Nó đòi hỏi nhiều quy trình khác nhau, bao gồm sản xuất, lưu trữ, vận chuyển nguyên vật liệu, quá trình xử lý hàng tồn kho, sản xuất …
        <br/>
        <strong><div id="td">Làm gì: </div></strong>
        <strong>* QTKD: </strong>Chuyên viên tại phòng kinh doanh, phòng kế hoạch, phòng marketing, phòng hỗ trợ - giao dịch khách hàng của các công ty, tập đoàn về tài chính, chứng khoán
        <br/>
        <strong>* QT nguồn nhân lực: </strong>Có thể làm việc cho các loại hình doanh nghiệp, tổ chức và các cơ quan nhà nước với các vị trí như: Chuyên viên Quản lý đào tạo, Chuyên viên tuyển dụng, Chuyên viên chính sách – đãi ngộ, Chuyên viên lương – chính sách (C&B), Chuyên viên bảo hiểm, Chuyên viên truyền thông nội bộ, Chuyên viên xử lý quan hệ nội bộ
        <br/>
        <strong>* Logistics và QL chuỗi cung ứng: </strong>Kỹ sư hoạch định sản xuất, kỹ sư logistics, chuyên viên quản lý chuỗi cung ứng… trong các doanh nghiệp và tập đoàn sản xuất trong và ngoài nước
    </div>
  </div>
);
