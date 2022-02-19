import React from 'react';
import '../css/home.css';


export default function  Lienket (){ 
    const dslk = [
            {
            stt: "1",
            ten: "Quản trị kinh doanh",
            manganh: "7340101K",
            thm: "A01 (toán, lý, anh), C01 (toán, lý, văn), D01 (toán, văn, anh), D96 (toán, anh, khxh)",
            dc: "ĐT 23,75 – HB 20,00 – ĐGNL 700"
            },        
            {
            stt: "2",
            ten: "Kế toán",
            manganh: "7340301K",
            thm: "A00 (toán, lý, hóa), A01 (toán, lý, anh), D01 (toán, văn, anh), D90 (toán, anh, khtn)",
            dc: "ĐT 23,00 – HB 21,00 – ĐGNL 700"
            },
            {
            stt: "3",
            ten: "Tài chính - Ngân hàng",
            manganh: "7340201K",
            thm: "A00 (toán, lý, hóa), A01 (toán, lý, anh), D01 (toán, văn, anh), D90 (toán, anh, khtn)",
            dc: "ĐT 23,50 – HB 20,00 – ĐGNL 700"
            },
            {
            stt: "4",
            ten: "Quản lý tài nguyên môi trường",
            manganh: "7850101K",
            thm: "B00 (toán, hóa, sinh), C02 (toán, hóa, văn),  D90 (toán, anh, khtn), D96 (toán, anh, khxh)",
            dc: "ĐT 18,50 – HB 21,50 – ĐGNL 700"
            },
            {
            stt: "5",
            ten: "Ngôn ngữ anh",
            manganh: "7220201K",
            thm: "D01 (toán, văn, anh), D14 (Văn, anh, sử), D15 (văn, anh, địa), D96 (toán, anh, khxh)",
            dc: "ĐT 24,50 – HB 20,00 – ĐGNL 700"
            },
            {
            stt: "6",
            ten: "Khoa học máy tính",
            manganh: "7480101K",
            thm: "A00 (toán, lý, hóa), C01 (toán, lý, văn), D01 (toán, văn, anh), D90 (toán, anh, khtn)"
            },
            {
            stt: "7",
            ten: "Marketing",
            manganh: "7340115K",
            thm: "A01 (toán, lý, anh), C01 (toán, lý, văn), D01 (toán, văn, anh), D96 (toán, anh, khxh)",
            dc: "ĐT 24,50 – HB 20,00 – ĐGNL 700"
            },
            {
            stt: "8",
            ten: "Kinh doanh quốc tế",
            manganh: "7340120K",
            thm: "A01 (toán, lý, anh), C01 (toán, lý, văn), D01 (toán, văn, anh), D96 (toán, anh, khxh)",
            dc: "ĐT 24,00 – HB 20,00 – ĐGNL 700"
            }
        ];
    ;
       

        return(
            <div className='noidung'>
                <br/>
                <div>
                    <strong className='tieude'>Liên kết với Đại học Angelo State university (ASU) của Hoa Kỳ</strong><br/>
                    + 2 năm đầu học tại IUH; 2 năm sau học tại ASU;<br/>
                    + Bằng cấp: Do ASU cấp; Nếu không đủ điều kiện chuyển tiếp sang ASU thì sinh viên được tiếp tục học chương trình ĐHCQ và nhận bằng do IUH cấp;<br/>
                    + Học bổng: Tổ chức Giáo dục toàn cầu Ellcy (EGE) cam kết cấp học bổng từ 60% trở lên tới 90% học phí cho chương trình này<br/>
                </div>
                <br/>
                {dslk.map(item => (
                    <div>
                        <strong>{item.stt}. {item.ten}</strong> <br/>
                        Mã ngành: {item.manganh} - ({item.dc}) <br/>
                    </div>
                ))}
            </div>
            );
      
}
