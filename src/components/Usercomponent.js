
import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import BaseApp from '../core/base'

export default function Usercomponent({user,setUser}) {
    const history=useHistory()
   
    function deleteUser(idx){ 
        const alterList=user.filter((per,id)=>per.id!==idx);
        setUser(alterList);
    }
  return (
      <div>
      <BaseApp
      title="User details">
      <div className="user-content">
        {user.map((person,idx)=>(
             <div key ={idx} className="user-card">
             <h1>{person.name}</h1>
             <p>Batch : {person.batch}</p>
             <p>Email : {person.email}</p>
             <p>Exp : {person.experience}</p>
             <div className="btn-group">
                <button className="btn edit-btn"
                onClick={()=>history.push(`/edit/${person.id}`)}>Edit</button>
                <button className="btn view-btn"
                onClick={()=>history.push(`/user/${idx}`)}>View</button>
                <button className="btn del-btn"
                 onClick={()=>deleteUser(person.id)}>Delete</button>
                </div>
            </div>
        ))}
      </div>
      </BaseApp>
    </div>
    
  )
}
