import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useHistory } from "react-router-dom";





const Contact = () => {
  const history = useHistory()
  const [email ,setemail]= useState("")
  const [password ,setpass]= useState("")

  

  const upload=(e)=>{
      e.preventDefault()
       if (email=="admin@g" && password=="admin"){
         history.push("/addpost")
       }
       else{
      axios.post("http://localhost:80/login  ",{
          email:email,
          password:password,
      })
      .then((response)=>{
          console.log(response)
          if(response.data.message==="welcome"){
            localStorage.setItem("isloggedin",true)
          

              alert("succesfully created")
              history.push("/")
          }
      })
      .catch((error)=>{
          console.log(error)
      })}
  }
  
 
    return (
        <>
        {/* navbar */}
         <header className="item header margin-top-0">
          <div className="wrapper">
  <nav role="navigation" className="navbar navbar-white navbar-embossed navbar-lg navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button data-target="#navbar-collapse-02" data-toggle="collapse" className="navbar-toggle" type="button">
          <i className="fa fa-bars" />
          <span className="sr-only">Toggle navigation</span>
        </button>
        <a href="index.html" className="navbar-brand brand"> SHOPNOW </a>
      </div>
      <div id="navbar-collapse-02" className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
    <li className="propClone">  <Link to="/"> <a href="index.html">Home</a> </Link> </li>
     <li className="propClone"> <Link to="/shop"><a href="shop.html">Shop</a> </Link></li>
          <li className="propClone"> <Link to="/product"> <a href="product.html">Product</a></Link></li>
         
          <li className="propClone"><Link to="/contact"><a href="contact.html">Contact</a></Link></li>
          <li className="propClone"><Link to="/about"><a href="contact.html">About us</a></Link></li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <div className="text-homeimage">
          <div className="maintext-image" data-scrollreveal="enter top over 1.5s after 0.1s">
            ENJOY THE SHOPPING MOMENTS WITH US          </div>
          <div className="subtext-image" data-scrollreveal="enter bottom over 1.7s after 0.3s">
           SAVE ENERGY      </div>
        </div>
      </div>
    </div>
  </div>
</div>
 </header>
 <br /><br />
 
        {/* conatct form */}
           <section className="item content">
  <div className="container toparea">
    <div className="underlined-title">
      <div className="editContent">
        <h1 className="text-center latestitems">LOGIN </h1>
      </div>
      <div className="wow-hr type_short">
        <span className="wow-hr-h">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </span>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-8 col-lg-offset-2">
        <div className="done">
          <div className="alert alert-success">
            <button type="button" className="close" data-dismiss="alert">×</button>
            Your message has been sent. Thank you!
          </div>
        </div>
        <form method="post" action="contact.php" id="contactform" onSubmit={upload}>
          <div className="form">
                       <input type="text" name="email" placeholder="Your E-mail Address *"  value={email} onChange={(e)=>{setemail(e.target.value)}} />
                       <input type="password" name="name" placeholder="password *" value={password} onChange={(e)=>{setpass(e.target.value)}} />

            <input type="submit" id="submit" className="clearfix btn" defaultValue="Send" />
          <b>  Don't have account<Link to="signup"> <a href="">signup first</a> </Link></b>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
{/* FOOTER =============================*/}
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

export default Contact
