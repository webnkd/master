import React from "react";
import '../css/home.css';

class Xtuyen extends React.Component{
    render(){
        return(
                <div className='noidung'>
                    (Truy cập <a href="https://tuyensinh.iuh.edu.vn/" target="_blank" rel="noopener noreferrer"> tuyensinh.iuh.edu.vn</a> để xem hướng dẫn và làm hồ sơ)
                    <br/><br/>
                    <strong className='tieude'>1. Xét tuyển thẳng và Ưu tiên xét tuyển thẳng:</strong> <br/>
                    <strong>- Xét tuyển thẳng:</strong> Hồ sơ theo quy định của Bộ GD-ĐT<br/>
                    <strong>- Ưu tiên xét tuyển thẳng:</strong><br/>
                    &nbsp;&nbsp;+ Học sinh giỏi cấp tỉnh/thành phố;<br/>
                    &nbsp;&nbsp;+ Học sinh đạt giải kỳ thi Olympic (môn đạt giải có trong tổ hợp xét tuyển của ngành xét tuyển);<br/> 
                    &nbsp;&nbsp;+ Học sinh trường chuyên, lớp chuyên;<br/> 
                    &nbsp;&nbsp;+ Học sinh có CC IELTS từ 5.0 trở lên hoặc các CC quốc tế tương đương trong thời gian còn hiệu lực tính đến ngày 29/08/2022<br/>
                    <strong className='tieude'>2. Xét điểm thi ĐGNL do ĐHQG TP.HCM tổ chức năm 2022: </strong> Ngưỡng điểm nhận hồ sơ sẽ thông báo sau  <br/>
                    <strong className='tieude'>3. Xét điểm học bạ lớp 12:</strong> TP.HCM từ 21 điểm. <strong className='tieude'>Riêng ngành DƯỢC từ 24 điểm trở lên</strong>; PHQN từ <strong>19 điểm</strong> <br/>
                    <strong className='tieude'>4. Xét điểm thi THPT 2022:</strong> Hồ sơ theo quy định của Bộ GD-ĐT<br/>        
                    
                    
                </div>
        );
    }
}
export default Xtuyen;