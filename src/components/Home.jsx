import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import app from "../firebase";
import './Home.css'


function Home(){

   
    return(
        
    <>
    
<div className="flex">
<div className="sidebar">
</div>
<div className="li-bar">
<ul className="pt-2.5 ml-5">
    <h1 className="text-lg">Liên Kết</h1>
    <li><a>Trang chủ</a></li>
    <li><a>Đánh giá giảng viên</a> </li>
    <li><a>Toeic</a></li>
    <li>
        <a>Diên đàn sinh viên</a> </li>
    <li><a >Những câu hỏi thường gặp</a> </li>
    <li><a >Hướng dẫn</a> </li>
   
</ul>
</div>
</div>

    
    </>
     
    )
}
export default Home
