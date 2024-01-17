import React,{useEffect, useState} from 'react'
import {auth} from './firebase'
import './Style/page.css'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {create} from './Slices/User'
import {signInWithEmailAndPassword, signOut} from 'firebase/auth'


const Login = () => {
const[email,setEmail]=useState("")
const[pass,setPass]=useState("")
const[user,setUser]=useState("")
const dispatch = useDispatch()

const navigate = useNavigate()

const done = (e)=>{
    e.preventDefault()
 signInWithEmailAndPassword(auth,email,pass)
.then((userr)=>{
    setUser(userr.user)
     navigate("/")
     dispatch(create(user))
     console.log("User",user)
     console.log("userr",userr)
})
.catch((error)=>{
    alert("user not found",error)
})
}

useEffect(()=>{
    const unsign = auth.onAuthStateChanged((user)=>{
   if(user){
    setUser(user)
   }
   else{
    setUser("")
   }
    })
    return ()=>unsign();
})

const logout = ()=>{

    signOut(auth)
    .then(()=>{
        alert("log out")
    }).catch((error)=>{
console.log(error)
    })
    setUser("")
    dispatch(create(user))
    navigate("/")
}
  return (
    <div>
<div className="login-page">
  
  {
    
   user?(
    <div className="login-form form my-4">
    <button className='btn btn-danger' onClick={logout}>Logout</button>
    </div>
   ): 
   (  <div className="form my-4">
   <form className="login-form" onSubmit={done}>
     <input type="email" placeholder="Email"value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
     <input type="password" placeholder="password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
     <button>Login</button>
     <p className="message">Not registered? <Link to="/sign">Sign In</Link></p>
   </form>
  </div>)
  }

</div>
    </div>
  )
}

export default Login
