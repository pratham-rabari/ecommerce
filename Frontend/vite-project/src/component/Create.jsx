import React,{useState} from 'react'
import {auth} from './firebase'
import './Style/page.css'
import { Link,useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'

const Create = () => {
const[email,setEmail]=useState("")
const[pass,setPass]=useState("")
const[name,setName]=useState("")
const navigate = useNavigate()

const done = (e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,pass)
    .then((user)=>{
      console.log(user)
    })
    .catch((error)=>{
        console.log(error)
    })
    navigate("/")
}
  return (
    <div>
<div className="login-page my-4">
  <div className="form">
    <form className="login-form" onSubmit={done}>
    <input type="email" placeholder="Email"value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <input type="text" placeholder="Username"value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <input type="password" placeholder="password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
      <p><strong>Password Must be Length 6</strong></p>
      <button>Sign in</button>
      <p className="message">Alredy Signed in <Link to="/Login">Log In</Link> </p>
    </form>
  </div>
</div>
    </div>
  )
}

export default Create
