import React from 'react'

import './product.css'
import {Link} from 'react-router-dom'

// import Base from './Base'


const Product = () => {
    return (
        <>
          
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
  </div>
 </header>

        <section className="bx">
       <div className=" container-fluid1 ">
  <div className="card"><i className="fa fa-apple" />
    <div className="about-product"><img src="https://i.imgur.com/3VTaSeb.png" width={200} />
      <div className="text">
        
        <h4 >Believing is seeing</h4>
        <h6 className="text">Apple pro display XDR</h6>
        
      </div>
     
    </div>
   
    <button  className="btn1" type="button">Add cart</button> <br /> <br /> <button className="btn1" type="button">Buy Now</button>
  </div>
</div>
</section>
{/* FOOTER =============================*/}
<div className="footer text-center">
    <div className="container">
      <div className="row">
        <p className="footernote">
          Connect with Scorilo
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


export default Product
