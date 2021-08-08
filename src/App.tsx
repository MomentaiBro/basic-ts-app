import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import MyMessage from './components/MyMessage';

export type UserType = {
    first_name: string,
    age: number,
    zodiac_sign: string,
    is_cute: boolean,
}[]

function App() {

  const [users, setUsers] = useState<UserType[]>([])

  useEffect(() => {
    fetch('./data.json')
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setUsers(data)
    })
  }, []);



  return (
    <div className="App"> 
    <h1>TypeScript Practice</h1>
    <br />
        <MyMessage user={users}/>
    </div>
   
  );
}

export default App;
