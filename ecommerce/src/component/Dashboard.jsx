import React from 'react'
import Base from './Base'
import b from '../images/b.jpeg'
import h from '../images/h.jpg'
import c from '../images/c.jpg'
import { Link } from 'react-router-dom'





const Dashboard = () => {
    return (
        <>
        <Base>
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
<div>
  {/* BUTTON =============================*/}
  <div className="item content">
    <div className="container text-center">
      <a href="shop.html" className="homebrowseitems">Browse All Products
        <div className="homebrowseitemsicon">
          <i className="fa fa-star fa-spin" />
        </div>
      </a>
    </div>
  </div>
  <br />
  {/* AREA =============================*/}
  <div className="item content">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <i className="fa fa-microphone infoareaicon" />
          <div className="infoareawrap">
            <h1 className="text-center subtitle">Beauty Products</h1>
            <p>
            Fashion is something that will always have people looking for different means to look trendy and to be in style. But, with hundreds of manufacturers setting their own shops, it takes a lot of toing and froing for one to find and buy the fashionable items that they like. . And, you need not bother stepping out of your house to purchase any of your selected items, Top Fashion Stores: Sarees, Kurtis, Lehenga, Ethnic Sets, Shirts, T-shirts, Dresses, Bra, Tops, Watches, Footwear
               </p>
            <p className="text-center">
             <Link to="beauty"> <a href="#">- View More -</a> </Link>
            </p>
          </div>
        </div>
        {/* /.col-md-4 col */}
        <div className="col-md-4">
          <i className="fa fa-comments infoareaicon" />
          <div className="infoareawrap">
            <h1 className="text-center subtitle">Cloths</h1>
            <p>
            Fashion is something that will always have people looking for different means to look trendy and to be in style. But, with hundreds of manufacturers setting their own shops, it takes a lot of toing and froing for one to find and buy the fashionable items that they like. . And, you need not bother stepping out of your house to purchase any of your selected items, Top Fashion Stores: Sarees, Kurtis, Lehenga, Ethnic Sets, Shirts, T-shirts, Dresses, Bra, Tops, Watches, Footwear</p>
            <p className="text-center">
            <Link to="cloths">  <a href="#">- View More -</a></Link>
            </p>
          </div>
        </div>
        {/* /.col-md-4 col */}
        <div className="col-md-4">
          <i className="fa fa-bullhorn infoareaicon" />
          <div className="infoareawrap">
            <h1 className="text-center subtitle">Electronics Store</h1>
            <p>
            At Shopnow India, you will be able to find a wide selection of electronics from top brands such as Intel, HP, Boat, JBL, Canon, Sony, Samsung, LG, Noise & many more. Shop for Mobile Phones, Tablets, Cameras, Televisions, Headphones, Speakers, Laptops, Computers & Accessories, Monitors, Desktops, Smartwatches & fitness trackers, Office Products, Data Storage, Gaming accessories, Musical Instruments and much more at the best prices on shopnow.in.

</p>
            <p className="text-center">
            <Link to="elect">  <a href="#">- view More -</a></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
           </Base>
        </>
    )
}

export default Dashboard
