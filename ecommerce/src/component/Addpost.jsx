import axios from 'axios'
import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'


const Addpost = () => {

const history=useHistory()

  // const[name ,setname]=useState("")
  // const[email ,setemail]=useState("")
  const[productname ,setproductname]=useState("")
  const[descreption ,setdescreption]=useState("")
  const[prize,setprize]=useState("")
  const[type,settype]=useState("")
  const[file ,setfile]=useState("")
 


  const onChange=(e)=>{
    setfile(e.target.files[0])
  }
  const upload=(e)=>{
    e.preventDefault()
    console.log(file)
    const formData =new FormData()
    // formData.append("name",name)
    // formData.append("email",email)
    formData.append("productname",productname)
    formData.append("descreption",descreption)
    formData.append("prize",prize)
    formData.append("type",type)
    formData.append("file",file)

    if(formData){
      axios.post("http://localhost:80/uploads",formData)
      .then((response)=>{
        console.log(response)
        alert("successfully submit")
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  }
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
 </header> br br

             {/* conatct form */}
           <section className="item content">
  <div className="container toparea">
    <div className="underlined-title">
      <div className="editContent">
        <h1 className="text-center latestitems">Add post </h1>
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
        <form  id="contactform" onSubmit={upload}>
          <div className="form">
            {/* <input type="text" name="name" placeholder="Your Name *" value={name} onChange={(e)=>{setname(e.target.value)}} />
            <input type="text" name="email" placeholder="Your E-mail Address *"   value={email} onChange={(e)=>{setemail(e.target.value)}}/> */}
            <input type="text" name="productname" placeholder="Product name *"  value={productname} onChange={(e)=>{setproductname(e.target.value)}} />
            <input type="text" name="Desception" placeholder="Descreption *"  value={descreption} onChange={(e)=>{setdescreption(e.target.value)}} />
            <input type="number" name="Prize" placeholder="Prize*"  value={prize} onChange={(e)=>{setprize(e.target.value)}}/>
            <input type="text" name="type" placeholder="Type *"  value={type} onChange={(e)=>{settype(e.target.value)}} />
            <input type="File" name="type" placeholder="Add file *" onChange={onChange} />
            
            <input type="submit" id="submit" className="clearfix btn" defaultValue="Send"  />
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
            
        </>
    )
  }


export default Addpost
