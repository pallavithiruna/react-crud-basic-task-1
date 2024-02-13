import React, { useEffect, useState } from 'react'
import BaseApp from '../core/base';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom';



function EditUser({user,setUser}) {

const[name, setName]=useState("");
const[idx, setIdx]=useState("");
const[email, setEmail]=useState("");
const[experience, setExperience]=useState();
const[batch, setBatch]=useState("");

const {id}=useParams();
const history=useHistory();
const selectedUser=user.find((per)=>per.id===id)
console.log(selectedUser)

useEffect(() => {
    setIdx(selectedUser.id);
    setName(selectedUser.name);
    setEmail(selectedUser.email);
    setExperience(selectedUser.experience);
    setBatch(selectedUser.batch);
  }, []);
const updateUser=()=>{
    //step1:collecting new data
    const editIndex=user.findIndex(per=>per.id===id)
    //changed data in the input fields
    const editedData = {
        id: idx,
        name,
        email,
        experience,
        batch,
      };
      //updating the user
      user [editIndex]=editedData;
      setUser([...user]);
      history.push("/")
}
  return (
    <div>
      <BaseApp
  title="Edit the user Details">
    <div>
       <input
       placeholder="id"
       value={idx}
       type="text"
       onChange={(event)=>setIdx(event.target.value)}
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
       onClick={updateUser}>
        Edit
        </button>
    </div>
    </BaseApp>
    </div>
  )
}

export default EditUser
