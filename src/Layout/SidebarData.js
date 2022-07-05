import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


export const SidebarData=[
    {
        title: ' Trang Chủ',
        to:'/Home',
        icon :<FaIcons.FaHome/>,
        cName: 'nav-text'
    },
    {
        title: ' Giới Thiệu',
        to:'',
        icon :<AiIcons.AiOutlineUser/>,
        cName: 'nav-text'
    },
    {
        title: ' Giáo viên',
        to:'',
        icon :<AiIcons.AiOutlineUser/>,
        cName: 'nav-text'
    },
    {
        title: ' Sinh Viên',
        to:'/Lists',
        icon :<AiIcons.AiOutlineUser/>,
        cName: 'nav-text'
    },
   
   
   
    {
        title: ' Đăng nhập',
        to:'/Login',
        icon :<AiIcons.AiOutlineLogin/>,
        cName: 'nav-text'
    },
    {
        title: ' Đăng xuất',
        to:'/Account',
        icon :<AiIcons.AiOutlineLogout/>,
        cName: 'nav-text'
    }
]