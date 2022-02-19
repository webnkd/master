import React from "react";
import '../css/popup.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Tự động hóa; Robot</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7510303, 7510303C<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), A01 (toán, lý, anh), C01 (toán, lý, văn), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 24,50 - HB 24,00 - ĐGNL 750<br/>
        <strong>ĐCCLC: </strong>ĐT 21,00 – HB22,00 – ĐGNL 700<br/>
        <strong><div id="td">Học gì: </div></strong>
        <strong>* Công nghệ KTĐK và tự động hóa: </strong>kiến thức ngành điện; hệ thống điện; điều khiển logic; thiết kế hệ thống; thiết kế cảm biến, vạn hành điều khiển tự động hóa
        <br/>
        <strong>* Robot và hệ thống điều khiển thông minh: </strong>Cùng với sự tiến bộ của công nghệ thông tin, robot hiện nay đã trở nên thông minh hơn thế hệ robot truyền thống. Chúng đóng vai trò ngày càng quan trọng trong sản xuất thông minh, hệ thống vận chuyển thông minh, internet vạn vật, dịch vụ thông minh và sức khỏe y tế. Trong thời gian tới, robot thông minh sẽ tiếp tục được tích hợp mở rộng nhiều công nghệ tiên tiến nhất như: cộng tác người - robot, truyền động tích hợp thông minh, nhận biết cảm xúc, giao diện máy tính - bộ não, mạng dữ liệu lớn, phần mềm sinh học và nền tảng đám mây... đây là cơ hội việc làm cho các bạn yêu thích lĩnh vực mới lạ này
        <br/>
        <strong><div id="td">Làm gì: </div></strong>
        <strong>* Công nghệ KTĐK và tự động hóa: </strong>Vận hành và bảo trì; thiết kế và thi công các hệ thống tự động; người lập trình các hệ thống tự động; người chế tạo ra các hệ thống, robot
        <br/>
        <strong>* Robot và hệ thống điều khiển thông minh: </strong>Kỹ sư  thiết kế và quản lý dây chuyền robot, Kỹ sư phần mềm bao gồm lập trình thiết kế chip; lập trình nhúng, Kỹ sư bán hàng (sales engineering) và kỹ sư dịch vụ (field engineer) chuyên môn lắp đặt, bảo trì, quản lý, Kỹ sư nghiên cứu và phát triển robot, Nhân viên kinh doanh các sản phẩm robot và hệ thống điều khiển thông minh, Giảng viên dạy các môn liên quan tại đại học
    </div>
  </div>
);
