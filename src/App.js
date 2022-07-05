
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './Login/Login';
import { AuthProvider } from './context/AuthContext';
import Lists from './pages/Lists';
import Home from './components/Home'
import Mores from './pages/Mores';
import Signup from './Login/Signup';
import Navbar from './Layout/Navbar';
import AddEdit from './pages/AddEdit';
import Account from './Login/Account';
import View from './pages/View';
import React, { useState, useEffect } from 'react';



export const DataContext = React.createContext({})

function App() {
  const [state, setState] = React.useState({});
  const [ studentId, setSudentId] =useState("")
  // const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setSudentId(id);
  };


  return (
    <DataContext.Provider
      value={{ state, setState }}>
      <Router>
        <Navbar />
        <div>
          <AuthProvider>
            <Routes>

              <Route path="/Login" element={<Login />} />
              <Route path="/Account" element={<Account />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Lists" element={<Lists />} />
              <Route path="/Mores" element={<Mores />} />
              <Route path="/add" element={<AddEdit />} />
              <Route path="/update/:id" element={<AddEdit />} />
              <Route path="/view" element={<View />} />
             
              

            </Routes>
          </AuthProvider>
        </div>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
