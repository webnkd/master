import React from "react";
import '../css/popup.css';

export default ({ close }) => (
  <div className="modal">
    <a className="close" onClick={close}> &times;</a>
    <div className='header'></div>
    <div className='content'>
      {" "}
        <strong>Mã ngành: </strong><br/>
        <strong>THM: </strong><br/>
        <strong>ĐCĐT: </strong><br/>
        <strong>ĐCCLC: </strong><br/>
        <strong><div id="td">Học gì: </div></strong>
        <br/>
        <strong><div id="td">Làm gì: </div></strong>
    </div>
  </div>
);
