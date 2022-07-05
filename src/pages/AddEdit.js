import React, { useState, useEffect } from "react";
import { useNavigate, usePrams } from 'react-router-dom'
import "./AddEdit.css"
import Students from "../services/Studenst";
import { DataContext } from "../App";
import { storage } from "../firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

function AddEdit({ id, setStudentId }) {
    const navigate = useNavigate();
    const initialState = {
        name: "",
        codes: "",
        classs: "",
        email: "",
        phone: "",
        contact: "",

    };

    const [image, setImage] = useState(null)
    const [flag, setFlag] = useState(true);
    const [message, setMessage] = useState({ error: false, msg: "" });
    const [state, setState] = useState(initialState);
    const { name, codes, email, contact, phone, classs } = state;
    const [isUpdate, setisUpdate] = useState(false)
    const data = React.useContext(DataContext);
    const pathname = window.location.pathname


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };



    const handleImagechange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    console.log(data, 'ss')
    useEffect(() => {
        if (pathname.split("/")[1] === "update") {
            setisUpdate(true)
            setState({
                name: data.state.name,
                codes: data.state.codes,
                classs: data.state.classs,
                email: data.state.email,
                phone: data.state.phone,
                contact: data.state.contact,
            })
        } else {
            setisUpdate(false)
        }
    }, [])



    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !codes || !classs || !email || !phone || !contact) {
            // setMessage({ error: true, msg: "All fields are mandatory!" });
            return;
        } else {
            if (isUpdate) {

                console.log('dfff')

                Students.updateStudents(data.state.id, state)

               

            } else { Students.addStudents(state); }

            setTimeout(() => navigate("/lists"), 500)
        }


    };
    /// lấy id,=> lấy dữ liệu của id đấy
    /// fill dữ liệu vào form sửa
    /// lấy từ input 
    /// người dùng ko sửa input dùng dữ liểu ban đầu
    /// người dùng sửa input đấy thì lấy dữ liệu vừa sửa
    // chạy hàm update(id, dataInput)

    return (
        <div style={{ marginTop: "30px" }} >

            <form

                className="bg-slate-50"
                style={{
                    margin: "auto",
                    padding: "15px",
                    maxWidth: "450px",
                    textAlign: "center",
                }}
                onSubmit={handleSubmit}>
                <h1 className="text-black text-3xl">Thêm Sinh Viên  </h1>
                {/* <input type="file" onChange={handleImagechange} /> */}

                <label htmlFor="codes">Mã Sinh Viên </label>
                <input className="border-current inputcss"
                    type="text"
                    id="codes"
                    name="codes"
                    placeholder="MSV..."
                    required=""
                    value={codes}
                    onChange={handleInputChange} />

                <label htmlFor="name">Tên sinh viên </label>
                <input className="border-current inputcss"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tên..."
                    required=""
                    value={name}
                    onChange={handleInputChange} />

                <label htmlFor="classs">Lớp </label>
                <input
                    type="text"
                    id="classs"
                    name="classs"
                    placeholder="Lớp..."
                    required=""
                    value={classs}
                    onChange={handleInputChange} />
                <label htmlFpr="email">Email </label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email..."
                    required=""
                    value={email}
                    onChange={handleInputChange} />

                <label htmlFor="contact">Phone </label>
                <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Phone..."
                    required=""
                    value={phone}
                    onChange={handleInputChange} />


                <label htmlFor="contact">Địa chỉ </label>
                <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="Hà nội..."
                    required=""
                    value={contact}
                    onChange={handleInputChange} />


                <input type="submit" value="seve" />
            </form>
        </div>


    )

}
export default AddEdit