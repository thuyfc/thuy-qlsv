import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import './lists.css';
import Students from "../services/Studenst";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { DataContext } from "../App";




function Lists({ getStudentId }) {
  let { id } = useParams();


  const [student, setStudent] = useState([]);
  // const [query, setQuery] = useState("")
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const [dataDetail, setDataDetail] = useState()
  const data = React.useContext(DataContext);
  // const [studentId, setSudentId] = useState("")






  useEffect(() => {
    if (!currentUser) {
      navigate('/Login')
    }
    getStudent('')

  }, [])



  const getStudent = async (value) => {
    const data = await Students.getAllStudent();
    const dataStudent = await (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    const newArr = await dataStudent.filter((item) => {
      if (item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
        return item
      }
    })

    setStudent(newArr)
  };


  const deleteHandler = async (id) => {
    confirmAlert({
      title: 'Xác nhận xóa',
      message: 'Bạn có chắc chắn muốn xóa sinh viên này không ?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            await Students.deleteStudent(id);
            getStudent('');
          }
        },
        {
          label: 'No',
          onClick: () => true
        }
      ]
    })

  };





  const renderByType = (type) => {
    switch (type) {
      case 'AZ':
        // console.log(student.sort((a, b) => a.name < b.name ? 1 : -1))
        // const newArr =  student.sort((a, b) => a.name.split(' ')[a.name.split(' ').length - 1] > b.name.split(' ')[b.name.split(' ').length - 1] ? 1 : -1))


        const newArr = student.sort((a, b) => a.name > b.name ? 1 : -1)

        setStudent(pre => ([...newArr]))
        break;
      case 'msv':
        const newAr = student.sort((a, b) => a.codes - b.codes)

        setStudent(pre => ([...newAr]))
        break;
      case 'all':

        getStudent('')

      default:
        break;
    }
  }



  return (
    <>
      <div> <h1 className="text-black text-center text-2xl mt-2.5">Danh Sách Sinh Viên</h1></div>

      <div style={{ marginTop: "30px" }}>
        <div><form className="text-center block  pb-2 block ">
          <input
            onChange={(e) => {
              // setQuery(e.target.value)
              getStudent(e.target.value)
            }}

            className="max-w-xs h-8  mx-2.5" type="text" placeholder="Search.." name="search" />
          {/* <p className="p-search text-center bg-cyan-700 h-8 w-16 rounded-md mx-2.5 hover:bg-sky-700" onClick={() => {
            // getStudent(query)
          }} > Search</p> */}

          <Link to='/add' className='buton-bd bg-cyan-700 h-8 w-36 mx-2.5 rounded-md hover:bg-sky-700 '>
            Thêm sinh viên
          </Link>

        </form></div>

        <table className="styled-table ">
          <thead className="text-center">
            <tr>
              <th className="w-2 ">No.</th>
              {/* <th className="w-10 px-0 ">Img</th> */}
              <th className="w-20">Mã sinh viên</th>
              <th className="w-36 ">Tên Sinh viên</th>
              <th className="w-10">Lớp</th>
              <th className="w-40 ">Email</th>
              {/* <th className="w-24 ">Phone</th>
              <th className="w-36 ">Địa chỉ</th> */}
              <th className=" w-36">Action</th>

            </tr>
          </thead>
          <tbody>

            {student.map((doc, index) => {
              return (
                <tr key={doc.id}>
                  <td>{index + 1}</td>
                  {/* <td className="imgs">Img</td> */}
                  <td>{doc.codes}</td>
                  <td>{doc.name}</td>
                  <td>{doc.classs}</td>
                  <td>{doc.email}</td>
                  {/* <td>{doc.phone}</td>
                  <td>{doc.contact}</td> */}

                  <td className=" mx-2.5">
                    <Link to={`/update/${doc.id}`} className="mx-1 p-1 rounded-md w-9 bg-green-600 hover:bg-sky-700" onClick={() => {
                      data.setState(doc)
                     
                    }}> Sửa</Link>
                    <button className="mx-1 rounded-md w-9 bg-red-600 hover:bg-sky-700" onClick={(e) => deleteHandler(doc.id)}>Xóa</button>
                    <Link className="mx-1 rounded-md w-9 px-0.5 p-0.5 bg-emerald-400 hover:bg-sky-700" to={'/view'} onClick={() => {
                      data.setState(doc)
                    }}> Xem </Link>
                  </td>

                </tr>
              );
            })}



          </tbody>
        </table>
        <div className="text-center my-3.5">
          <label for="cars">Sort by:</label>

          <select className="dropdown text-center " defaultValue='all' name="colValue" onClick={(e) => {

            renderByType(e.target.value)
          }}>
            <option value="all">All</option>
            <option value="AZ">Tên A -&gt; Z</option>
            <option value="msv">Msv</option>
            <option value="email">Email</option>

          </select>

          <button className="btn btn-reset">rest</button>
        </div>
      </div>
    </>


  )
}
export default Lists;
