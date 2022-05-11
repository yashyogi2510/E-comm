import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'



const Electronics = () => {
  const[post,setpost]=useState([])

  useEffect(()=>{
      function fetch(){
          axios.get("http://localhost:80/product")
          .then((response)=>{
            
              console.log(response)
              var filterdata = response.data.filter((d)=>{
                return d.type=="electronic"
              })
              setpost(filterdata)})
       
      }   fetch()
  },[])

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
          <li className="propClone"><Link to="/checkout"><a href="checkout.html">Checkout</a></Link></li>
          <li className="propClone"><Link to="/contact"><a href="contact.html">Contact</a></Link></li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
 </header>

 <div className="col-md-4">
   {post.map((d)=>{return(
        <div className="productbox">
          <div className="fadeshop">
            <div className="captionshop text-center" style={{display: 'none'}}>
              <h3>Item Name</h3>
              <p>
                This is a short excerpt to generally describe what the item is about.
              </p>
              <p>
                <a href="#" className="learn-more detailslearn"><i className="fa fa-shopping-cart" /> Purchase</a>
                <a href="#" className="learn-more detailslearn"><i className="fa fa-link" /> Details</a>
              </p>
            </div>
           </div>
           <span className="maxproduct">  <img src={`http://localhost:80/${d._id}.jpg`}  alt="" />
                    </span>
          
          <div className="product-details">
            <a href="#">
              <h1> <b> {d.productname} </b></h1>
            </a>
            <span className="price">
              <span className="edd_price">{d.prize}</span>
            </span>
            <p>{d.descreption}</p>
            <br />
            <button type="submit" className="btn2 btn-primary">Add cart</button> <br /> <br /> <button type="submit" className="btn2 btn-primary">Buy now</button>
  
          </div>
        </div>
        )})}
      </div>
 
{/* FOOTER =============================*/}
{/* <div className="footer text-center">
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


         */}
        </>
    )
}

export default Electronics
