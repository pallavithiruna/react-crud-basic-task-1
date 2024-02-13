import React, { useState } from 'react'
import BaseApp from '../core/base';
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export function AddUser({user,setUser}) {
  const history=useHistory();
//defining states
const[name, setName]=useState("");
const[id, setId]=useState("");
const[email, setEmail]=useState("");
const[experience, setExperience]=useState();
const[batch, setBatch]=useState("");

const addNewUser =()=>{
  const newUser={
    id,
    name,
    batch,
    experience
  }
  console.log(user)
  history.push("/")
  setUser([...user,newUser])
  setName("");
  setId("");
  setEmail("")
  setExperience("")
  setBatch("")
}
 return (
  <BaseApp
  title="Add a User">
    <div>
       <input
       placeholder="id"
       value={id}
       type="text"
       onChange={(event)=>setId(event.target.value)}
       />
        <input
       placeholder="name"
       value={name}
       type="text"
       onChange={(event)=>setName(event.target.value)}
       />
        <input
       placeholder="email"
       value={email}
       type="text"
       onChange={(event)=>setEmail(event.target.value)}
       />
        <input
       placeholder="experience"
       value={experience}
       type="number"
       onChange={(event)=>setExperience(event.target.value)}
       />
        <input
       placeholder="batch"
       value={batch}
       type="text"
       onChange={(event)=>setBatch(event.target.value)}
       />
       <button
       onClick={addNewUser}>
        Add
        </button>
    </div>
    </BaseApp>
  )
}