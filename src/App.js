import { Route,Switch } from 'react-router-dom';
import './App.css';   
import Usercomponent from './components/Usercomponent';
import { AddUser } from './components/AddUser';
import React, { useState } from 'react'
import { data } from '../src/data/data'
import { Nopage } from './components/NoPage';
import { UserDetails } from './components/UserDetails';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
import EditUser from './components/EditUser';


function App() {
  const[user,setUser]=useState(data)
  return (
    <div className="App">

<Switch>
<Route exact path="/">
<Usercomponent
user={user}
setUser={setUser}/>
</Route>

<Route path="/add/user">
<AddUser 
user={user}
setUser={setUser}/>
</Route>

<Route path="/edit/:id">
<EditUser 
user={user}
setUser={setUser}/>
</Route>

<Route path="/user/:id">
   <UserDetails
   user={user}/>
</Route>

<Route path="/students">
<Redirect path ="/"/>
</Route>

<Route path="**">
  <Nopage/>
</Route>

</Switch>

  
    </div>
  );
}

export default App;