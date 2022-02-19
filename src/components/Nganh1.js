import React from "react";
import '../css/popup.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Công nghệ Điện</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7510301; 7510301C<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), A01 (toán, lý, anh), C01 (toán, lý, văn), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 23,50 - HB 24,00 - ĐGNL 800<br/>
        <strong>ĐCCLC: </strong>ĐT 19,50 – HB 21,50 – ĐGNL 700<br/>
        <strong><div id="td">Học gì: </div></strong>
        <strong>* Công nghệ kỹ thuật điện, điện tử: </strong>Thiết kế, xây dựng, khai thác, vận hành, sử dụng, bảo trì các thiết bị điện tử, khí cụ điện, hệ thống truyền động điện; hệ thống truyền tải, phân phối, cung cấp điện; hệ thống chiếu sáng; hệ thống điện gió, điện mặt trời
        <br/>
        <strong>* Năng lượng tái tạo: </strong>Trong bối cảnh hiện nay khi nguồn nhiên liệu hóa thạch đang dần cạn kiệt và được thay thế bằng nguồn năng lượng tái tạo (bao gồm năng lượng mặt trời, năng lượng gió, năng lượng sinh khối…), thì nguồn năng lượng này trở thành một trong những vấn đề rất được quan tâm tại Việt Nam nói riêng và trên thế giới nói chung, chúng ta sẽ được học kiến thức cập nhật về kỹ thuật điện, các công nghệ và kỹ thuật hiện đại trong lĩnh vực năng lượng tái tạo, đồng thời thời trang bị các kiến thức trong việc quản lý và sử dụng các nguồn năng lượng một cách hiệu quả
        <br/>
        <strong><div id="td">Làm gì: </div></strong>
        <strong>* Công nghệ kỹ thuật điện, điện tử: </strong>Chuyên viên kỹ thuật; tư vấn thiết kế, vận hành, bảo trì mạng lưới điện, nhà máy điện, trạm biến áp, xí nghiệp, khu công nghiệp, phòng thí nghiệm, các đơn vị sản xuất công nghiệp tự động hóa và điện tử hóa cao
        <br/>
        <strong>* Năng lượng tái tạo: </strong>Các nhà máy điện, các công ty truyền tải và phân phối điện; các công ty tư vấn, thiết kế và xây lắp hệ thống điện, hệ thống năng lượng tái tạo
    </div>
  </div>
);
