import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>TC Ngân hàng; TC doanh nghiệp </div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7340201, 7340201C<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), A01 (toán, lý, anh), D01 (toán, văn, anh), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 25,50 - HB 25,50 - ĐGNL 800<br/>
        <strong>ĐCCLC: </strong>ĐT 23,50 – HB 22,00 – ĐGNL 680<br/>
        <strong><div id="td">Học gì: </div></strong>
        <strong>* TC-NH: </strong>Là ngành nghề liên quan đến các dịch vụ giao dịch, luân chuyển tiền tệ thông qua ngân hàng và các công cụ tài chính của ngân hàng phát hành trong phạm vi nội địa và quốc tế. tài chính ngân hàng là một phạm trù rất rộng, bao gồm các lĩnh vực nhỏ và chuyên biệt hơn như ngân hàng, tài chính doanh nghiệp, tài chính thuế, tài chính bảo hiểm, phân tích tài chính, kinh tế học tài chính
        <br/>
        <strong>* TC-DN: </strong>Là chuyên ngành đào tạo ra nguồn nhân lực am hiểu về lĩnh vực Tài chính, giúp các doanh nghiệp quản lý và phân phối nguồn tài chính và quỹ tiền tệ hợp lý, phục vụ cho việc xây dựng nhà xưởng, mua sắm máy móc, thiết bị, dự trữ nguyên vật liệu,.. thúc đẩy hoạt động sản xuất kinh doanh. Cùng với nhiệm vụ quản lý việc vận hành, chuyển hóa các nguồn tài chính, nhân lực hoạt động trong lĩnh vực Tài chính còn có khả năng dự báo, giám sát, xử lý các tình huống phát sinh, phục vụ cho mục tiêu tối đa hóa lợi ích của doanh nghiệp
        <br/>
        <strong><div id="td">Làm gì: </div></strong>
        <strong>* TC-NH: </strong>Chuyên viên tín dụng ngân hàng; kế toán, kiểm toán nội bộ ngân hàng thương mại, kế toán viên phòng thanh toán quốc tế, kinh doanh ngoại tệ; tiền tệ; quản trị tài sản và nguồn vốn; phân tích đầu tư chứng khoán
        <br/>
        <strong>* TC-DN: </strong>Bộ Thương mại và Sở Thương mại, Sở Kế hoạch Đầu tư, đại diện thương mại, tham tán thương mại, các văn phòng đại diện, các công ty đa quốc gia, các công ty xuất nhập khẩu, Nhân viên kinh doanh tại các hãng vận tải tàu biển, hàng không, bảo hiểm, ngân hàng, các công ty dịch dụ quảng cáo, tổ chức sự kiện, Phòng kinh doanh của các đơn vị sản xuất kinh doanh thương mại hàng tiêu dùng, hàng công nghiệp, các siêu thị, cửa hàng tiện lợi
    </div>
  </div>
);
