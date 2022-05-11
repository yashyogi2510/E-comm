import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
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
          <li className="propClone"><Link to="/checkout"><a href="contact.html">cart</a></Link></li>
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
         <b>  SAVE ENERGY  </b>    </div>
        </div>
      </div>
    </div>
  </div>
</div>
 </header>
        </>
    )
}

export default Navbar
