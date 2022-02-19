import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>CNTT; KTPM; KHMT; HTTT; KHDL; QLĐT thông minh</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7480201, 7480201C (CNTT; KTPM; KHMT; HTTT)<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), A01 (toán, lý, anh), D01 (toán, văn, anh), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 25,25 - HB 26,00 - ĐGNL 750<br/>
        <strong>ĐCCLC: </strong>ĐT 23,25 – HB 23,00 – ĐGNL 700<br/>
        <strong><div id="td">Học gì: </div></strong>
        <strong>* Công nghệ thông tin: </strong>Là ngành sử dụng hệ thống các thiết bị và máy tính, bao gồm phần cứng, phần mềm, để cung cấp giải pháp xử lý thông tin ở nhiều lĩnh vực khác nhau cho các cá nhân, tổ chức có yêu cầu
        <br/>
        <strong>* Kỹ thuật phần mềm: </strong>Là lĩnh vực tạo ra sản phẩm phần mềm phục vụ công việc của khác hàng; Ngoài ra còn có việc testing của các phần mềm vi tính nhằm đáp ứng theo nhu cầu của người dùng và khách hàng
        <br/>
        <strong>* Khoa học máy tính (computer science): </strong>Là ngành nghiên cứu về máy tính và các hệ thống tính toán, quy trình và cách hoạt động của máy tính, cải thiện và nâng cao hiệu suất cho các thuật toán, công nghệ mới, giao tiếp giữa máy tính và con người. Xây dựng các phẩm phần mềm trí tuệ nhân tạo, máy học...
        <br/>
        <strong>* Hệ thống thông tin: </strong>Bạn sẽ được học cách thiết kế, các dạng sơ đồ của vẽ ra quy trình và cách chạy của hệ thống. Bạn sẽ được học về cơ sở dữ liệu, trái tim của mọi hệ thống thông tin. Bạn sẽ được học về cách giao tiếp, thuyết phục, nói chuyện với loài người để triển khai dự án cho thành công 
        <br/>
        <strong>* Khoa học dữ liệu: </strong>Việc phân tích và dùng dữ liệu lại dựa vào ba nguồn tri thức: toán học (thống kê toán học), công nghệ thông tin (máy học) và tri thức của lĩnh vực ứng dụng cụ thể
        <br/>
        <strong>* Quản lý đô thị thông minh và bền vững: </strong>Đô thị thông minh là mô hình xây dựng một đô thị áp dụng những thành tựu công nghệ mới nhất trong sinh hoạt, vận hành nhằm nâng cao chất lượng cuộc sống con người. Nhiều quốc gia tiến bộ trên thế giới đã áp dụng mô hình đô thị này nhằm tối ưu hóa chất lượng cuộc sống
        <br/>
        <strong><div id="td">Làm gì: </div></strong>
        <strong>* Công nghệ thông tin, Kỹ thuật phần mềm và Khoa học máy tính: </strong>Lập trình viên, kỹ sư hệ thống mạng, kỹ sư phần cứng, kỹ thuật viên – chuyên viên thiết kế lập trình web, lập trình điện thoại di động, game, an ninh mạng… kỹ sư phát triển phần mềm / game, kỹ sư kiểm thử phần mềm, kỹ sư phân tích và thiết kế phần mềm, kỹ sư bảo trì phần mềm cũng như các vị trí điều hành các cấp trong dự án. Quản trị dữ liệu;
        <br/>
        <strong>* Hệ thống thông tin: </strong>Nhiệm vụ của bạn là nói chuyện với người dùng / khách hàng, phân tích xem họ cần gì, hệ thống cần làm ra như thế nào để đáp ứng được nhu cầu đó, chúng kết nối với các hệ thống khác ra sao. Bạn sẽ viết thành các tài liệu, gọi là document, rồi đội lập trình sẽ code nó ra theo thiết kế của bạn
        <br/>
        <strong>* Khoa học dữ liệu: </strong>Kỹ sư Khoa học dữ liệu (Data Engineer) tại các Công ty phần mềm, Công ty kinh doanh có bộ phận phân tích số liệu, chiến lược kinh doanh như Tinh tế. Đặc biệt là các công ty về thương mại điện tử Lazada, Tiki, Shopee
        <br/>
        <strong>* Quản lý đô thị thông minh và bền vững: </strong>Kỹ sư quản lý đô thị thông minh - Quản lý tòa nhà - Kỹ sư nghiên cứu đô thị thông minh tại Việt Nam và nước ngoài - Kỹ sư tư vấn, thiết kế đô thị thông minh - Giảng dạy các môn học liên quan tại các trường đại học, cao đẳng
    </div>
  </div>
);
