import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UserCard from './comps/UserCard'

let App = () => {
let [userInfo, setUserInfo] = useState([])

let fetchData = async () => {
  let qry = (await axios.get('https://randomuser.me/api?results=25')).data.results
  setUserInfo([...qry])
}

useEffect(() => {
  fetchData()
},[])

  return (
    <div>
       <button onClick={() => {console.log(userInfo)}}>Click me to log users</button>
       <ul>
         {userInfo.map((user,i) => {
           return (
             <UserCard key={i} user={user} id={i}/>
           )
         })}
       </ul>
    </div>
  );
}

export default App;
