import React, { useState } from 'react'
import './signup.css'
import i from '../images/i.png'
import axios from 'axios'


const Signup = () => {

  const [name ,setname] =useState("")
  const [number,setnumber]=useState("")
  const [email,setemail]=useState("")
  const [address,setaddress]=useState("")
  const [password,setpass]=useState("")

  const upload =(e)=>{
    e.preventDefault()
    axios.post("http://localhost:80/signup",{
      name:name,
      number:number,
      email:email,
      address:address,
      password:password
    })
    .then((res)=>{
      console.log(res)
      if(res.data=="ok"){
        alert("successfully register")
      }
      else if(res.data=="userexist"){
        alert("userexist")
      }
    })
    .catch((err)=>{
      console.log("err")
    })
  }
    return (
        <>
           <img src={i} alt=""  className="logo1"/>
           <form className="box1" onSubmit={upload}>
             <br />
           <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="full Name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
  </div> <br />
  <div className="mb-3">
     <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Contact number"value={number} onChange={(e)=>{setnumber(e.target.value)}} />
  </div> <br />
  <div className="mb-3">
   
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" value={email} onChange={(e)=>{setemail(e.target.value)}} />
    <div id="emailHelp" className="form-text">We'll never share your email anyone </div>
  </div>
  <div className="mb-3">
    
    <input type="address" className="form-control" id="exampleInputPassword1" placeholder="Address" value={address} onChange={(e)=>{setaddress(e.target.value)}} />
  </div> <br />
  <div className="mb-3">
   
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password" value={password} onChange={(e)=>{setpass(e.target.value)}} />
  </div> <br />
 
  <button type="submit" className="btn2 btn-primary">Submit</button>
</form> 
<div className="footer text-center">
    <div className="container">
      <div className="row">
        <p className="footernote">
          Connect with Shopnow
        </p>
        <ul className="social-iconsfooter">
          <li><a href="#"><i className="fa fa-phone" /></a></li>
          <li><a href="#"><i className="fa fa-facebook" /></a></li>
          <li><a href="#"><i className="fa fa-twitter" /></a></li>
          <li><a href="#"><i className="fa fa-google-plus" /></a></li>
          <li><a href="#"><i className="fa fa-pinterest" /></a></li>
        </ul>
        <p>
          © 2017 Your Website Name<br />
        shopnow- online shopping <a href="https://www.amazon.in/ref=nav_logo/">shopnow</a>
        </p>
      </div>
    </div>
  </div>

        </>
    )
}

export default Signup
