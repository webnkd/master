import React from 'react';
import {  Outlet, Link } from "react-router-dom";
import './layout.css';


export default function Layout() {
    return (
      <div>    
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/nganh">Ngành</Link></li>
            <li><Link to="/xettuyen">X.Tuyển</Link></li>
            <li><Link to="/dieukien">CSVC</Link></li>
            <li>
                <a href="#">Khác</a>
                <ul>
                  <li><Link to="/chatluong">C.Lượng</Link></li>
                  <li><Link to="/lienket">L.Kết</Link></li>
                  <li>
                      <a href="https://drive.google.com/drive/folders/1grqAjkvzbcsCqKNc-uox35GWq0WLTGg8?usp=sharing" target="_blank" rel="noopener noreferrer"><strong>Link biểu mẫu!</strong></a>   
                  </li>
                </ul>  
            </li>
        </ul>
        </nav>
        
        <Outlet />
      </div>
    )
}
