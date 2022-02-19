import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'>Công nghệ dệt, may</div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong>7540204<br/>
        <strong>THM: </strong>A00 (toán, lý, hóa), C01 (toán, lý, văn), D01 (toán, văn, anh), D90 (toán, anh, khtn)<br/>
        <strong>ĐCĐT: </strong>ĐT 20,25 - HB 20,50 - ĐGNL 750<br/>
        <strong><div id="td">Học gì: </div></strong>Thiết kế và sản xuất các sản phẩm may mặc và thời trang thông qua các hệ thống sản xuất công nghiệp hiện đại nhằm cung cấp cho thị trường những sản phẩm vừa có tính thẩm mỹ và vừa đảm bảo chất lượng, nâng cao năng suất và sức cạnh tranh trên thị trường quốc tế
        <br/>
        <strong><div id="td">Làm gì: </div></strong>Thiết kế tại các phòng kỹ thuật, phòng nghiên cứu và phát triển mẫu; Quản lý kỹ thuật, quản lý chất lượng; Quản lý, điều hành sản xuất tại các doanh nghiệp may và thời trang, tại các cơ sở kinh doanh của Việt Nam và nước ngoài về may và thời trang; Nghiên cứu viên tại các trường đại học, cao đẳng về lĩnh vực may và thời trang; giáo viên trong các trường đào tạo
    </div>
  </div>
);
