import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>IOT và trí tuệ nhân tạo ứng dụng</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7510304<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), A01 (toán, lý, anh), C01 (toán, lý, văn), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 20,50 - HB 22,00 - ĐGNL 800<br/>
        <strong><div id="td">Học gì: </div></strong>IOT (internet of things) hay internet kết nối vạn vật: nghĩa là toàn bộ các vật dụng được tích hợp các bộ phận điện tử, phần mềm, cảm biến để trở nên thông minh hơn. đây là một hệ thống phức tạp vì nó bao gồm một lượng lớn các kết nối giữa các thiết bị máy móc với nhau. Trí tuệ nhân tạo (artificial intelligence – AI) là: trí tuệ do con người lập trình với mục tiêu giúp máy tính có thể tự động hóa các hành vi thông minh như con người như biết suy nghĩ và lập luận, biết học và tự thích nghi. Ngành IOT và trí tuệ nhân tạo ứng dụng (aiot) tiếp cận từ căn bản về phần cứng điện tử nhúng, mạng truyền thông, máy tính và dữ liệu đến các kiến thức chuyên sâu của lĩnh vực iot (như kết nối vạn vật qua mạng, phân tích dữ liệu) và trí tuệ nhân tạo
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Số lượng dự án và việc làm về công nghệ như iot, trí tuệ nhân tạo đang tăng lên rất nhanh với mức lương khá cao. Các kỹ sư tốt nghiệp ngành này có khả năng phân tích, thiết kế, vận hành và khai thác một cách hiệu quả các thiết bị và hệ thống trong các lĩnh vực như iot công nghiệp, robot và các hệ thống thông minh ứng dụng trí tuệ nhân tạo
    </div>
  </div>
);
