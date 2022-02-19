import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Kỹ thuật hóa phân tích</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7510403<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), B00 (toán, hóa, sinh), D07 (toán, hóa, anh), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 18,50 - HB 21,00 – ĐGNL 750<br/>
        <strong><div id="td">Học gì: </div></strong>Kỹ thuật hóa phân tích là khoa học thu thập, xử lý và truyền đạt thông tin về thành phần và cấu trúc của vật chất. nói cách khác, đó là nghệ thuật và khoa học để xác định vật chất là gì và nó tồn tại bao nhiêu. Hóa học phân tích là sự kết hợp của ngành hóa học nghiên cứu về các phương pháp xác định thành phần cấu tạo và hàm lượng các thành phần của những mẫu khảo sát. Hóa phân tích cũng có thể được chia thành hóa phân tích vô cơ và hóa phân tích hữu cơ
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Nhân viên nghiên cứu và phát triển sản phẩm - nhân viên phân tích hóa lý - nhân viên kiểm tra chất lượng các sản phẩm hóa học; Kỹ sư hóa học đảm nhận nhiệm vụ thiết kế, chế tạo, đánh giá, điều chỉnh, quản lý và vận hành hệ thống các thiết bị, quá trình sản xuất sản phẩm ngành hóa chất; Kỹ thuật viên phân tích, chuyên viên nghiên cứu tại viện hóa học, viện vật liệu, viện mỹ phẩm
    </div>
  </div>
);
