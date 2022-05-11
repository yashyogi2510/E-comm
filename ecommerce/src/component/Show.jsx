import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'



const Show = () => {
  const [post ,setpost]= useState([])

    useEffect(() => {
        
         function fetch(){
             axios.get("http://localhost:80/show" )
             .then((res)=>{
                 console.log(res)

                 setpost(res.data)
             })
             .catch((err)=>{
                 console.log(err)
             })
         } 
          
        fetch()
    }, [])

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
     <li className="propClone"><Link to="/showorders"><a href="checkout.html">Show orders</a></Link></li>
          <li className="propClone"><Link to="/addpost"><a href="contact.html">Add product</a></Link></li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
 </header>
 <br /><br /><br />
 {post.map((d,index)=>{return(

 <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">productname</th>
      <th scope="col">coustmername</th>
      <th scope="col">email</th>
      <th scope="col">address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{d.productname}</td>
      <td>{d.name}</td>
      <td>{d.email}</td>
      <td>{d.address}</td>
    </tr>
    </tbody>
    </table>
)})}
                 </>
    )
}

export default Show
