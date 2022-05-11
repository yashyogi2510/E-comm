import React from 'react'
import Base from './Base'
import b from '../images/b.jpeg'
import h from '../images/h.jpg'
import c from '../images/c.jpg'
import { Link } from 'react-router-dom'



const Shop = () => {
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
       <Link  to="/"><a href="index.html" className="navbar-brand brand"> SHOPNOW </a></Link>
      </div>
      <div id="navbar-collapse-02" className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
    <li className="propClone">  <Link to="/"> <a href="index.html">Home</a> </Link> </li>
     <li className="propClone"> <Link to="/shop"><a href="shop.html">Shop</a> </Link></li>
          <li className="propClone"> <Link to="/signup"> <a href="product">Register</a></Link></li>
          
          <li className="propClone"><Link to="/contact"><a href="contact.html">Login</a></Link></li>
          <li className="propClone"><Link to="/about"><a href="contact.html">About us</a></Link></li>
        </ul>
      </div>
    </div>
  </nav>
 
</div>
 </header>

        <section className="item content" id="product">
  <div className="container">
    <div className="underlined-title">
      <div className="editContent">
        <h1 className="text-center latestitems">our collection</h1>
      </div>
      <div className="wow-hr type_short">
        <span className="wow-hr-h">
          <i className="fa fa-star" />
          <i className="fa fa-star" />
          <i className="fa fa-star" />
        </span>
      </div>
    </div>
    <div className="row" >
      <div className="col-md-4">
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
            <span className="maxproduct"><img src={b} alt /></span>
          </div>
          <div className="product-details">
            <a href="#">
              <h1><b> All beauty products now </b></h1>
            </a>
            <span className="price">
              <span className="edd_price">50% off  </span>
            </span>
          </div>
        </div>
      </div>
      {/* /.productbox */}
      <div className="col-md-4">
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
            <span className="maxproduct"><img src={h} alt /></span>
          </div>
          <div className="product-details">
            <a href="#">
              <h1> <b> Get 70% off on Cloths </b></h1>
            </a>
            <span className="price">
              <span className="edd_price">70% OFF</span>
            </span>
          </div>
        </div>
      </div>
      {/* /.productbox */}
      <div className="col-md-4">
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
            <span className="maxproduct"><img src={c}alt /></span>
          </div>
          <div className="product-details">
            <a href="#">
              <h1> Get 70% off on all electronics item</h1>
            </a>
            <span className="price">
              <span className="edd_price">70% off</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



        </>
    )
}

export default Shop
