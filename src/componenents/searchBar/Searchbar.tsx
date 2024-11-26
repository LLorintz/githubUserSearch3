import { FormEvent, useEffect, useState } from 'react'
import './searchbar.css'
import { UserType } from '../../type/usertype'

type serachbarprops = {
    saveUserData:(user:UserType)=>void
}

const Searchbar = ({saveUserData}:serachbarprops) => {

const [username, setUsername] = useState("");

const handleusernameChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setUsername(e.target.value)
}

const fetchuserData=async(username:string)=>{
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        console.log(data)
        saveUserData(data)
    } catch (error) {
        console.error('hiba:',error)
    }
}
useEffect(()=>{
    fetchuserData('llorintz')
},[])

const handleSubmit=(e:FormEvent)=>{
    e.preventDefault();
    fetchuserData(username)
}

  return (
    <form onSubmit={handleSubmit} action="" className="searchForm">
        <img src="./images/icon-search.svg" alt="" className='searchIcon'/>
        <input value={username} onChange={handleusernameChange} type="text" className="username" placeholder="Search Github username"/>
        <button className="searchBtn">Search</button>
    </form>
  )
}

export default Searchbar