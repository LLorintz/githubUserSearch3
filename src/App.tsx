import { useEffect, useState } from "react"
import Header from "./componenents/header/Header"
import './app.css'
import Searchbar from "./componenents/searchBar/Searchbar"
import { UserType } from "./type/usertype"
import Userdata from "./componenents/userdata/Userdata"

function App() {
  
const [darkmode, setDarkmode] = useState(false)
const [user, setUser] = useState({})

const toggleDarkmode = ()=>{
  setDarkmode(prev=>!prev)
}

const saveUserData = (user:UserType)=>{
  setUser(user)
}
 
useEffect(() => {
  document.body.className = `${darkmode? 'light':'dark'}`;
}, [darkmode]);

  return (
    <div className='app'>
            <div className="container">
              <Header darkmode={darkmode} toggleDarkmode={toggleDarkmode}></Header>
              <Searchbar saveUserData={saveUserData}></Searchbar>
              <Userdata user={user}></Userdata>
            </div>
    </div>
  )
}

export default App
