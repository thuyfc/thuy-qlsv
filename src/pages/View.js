
import React, { useState, useEffect } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import { DataContext } from "../App";
import Anh2 from "../img/anh2.jpg"


const View = () => {


  const data = React.useContext(DataContext);
  console.log("222222",data)


  return (
    < >

    
    <div className=" bg-stone-500 mt-20 nav-bar mt-24 ml-96 mr-96 p-5 rounded-md">
        <Link to="/Lists" className="text-center bg-sky-800 rounded-lg  px-2 mbs p-2"> <button>Back list</button></Link>

        <h1 className="text-center p-2 border-black bg-cyan-800 rounded-md mb-4 mt-4">
          Thông tin chi tiết
        </h1>
        <div className="bg-stone-400 border-black pt-2.5 rounded-md mb-3">
         <div className="flex p-5"> <p className="w-12 h-12 bg-lime-200 mb-3 rounded-full"></p>
          <div className="pl-2.5">
         <h1> {data.state.name} </h1>
         <h1>MSV : {data.state.codes}</h1>
         </div>
         </div>
         <div className="p-5 rounded-md   ">
         <h1>Phone : {data.state.phone} </h1>
        

<h1>Lớp:{data.state.classs}</h1>
<h1>email : {data.state.email} </h1>
<h1>Địa chỉ : {data.state.contact} </h1>

         </div>
        </div>

      </div>
   

    </>
  )

}
export default View