import React, { useEffect, useState } from 'react'
import Base from './Base'
import axios from 'axios'
import { useParams,useHistory } from "react-router-dom";



const Checkout = () => {
  let history=useHistory();
  const { id } = useParams();




  console.log(id)
  const[productname,setname]=useState("")
  const[prize,setprize]=useState("")
  const[name,setnme] =useState("")
  const[address,setaddress]=useState("")
  const[email,setemail]=useState("")
  
  
const upload=(e)=>{
  e.preventDefault()
  axios.post("http://localhost:80/booking",{

    productname:productname,
    name:name,
    email:email,
   address:address
  })
  .then((response)=>{
    console.log(response)
    alert("Thanks to shop with us we will contact you soon...")
    history.push("/")
  })
  .catch((err)=>{
    console.log(err)
  })
}


  useEffect(()=>{
      function fetch(){
          axios.get("http://localhost:80/product")
          .then((response)=>{
            
              console.log(response)
              var filterdata = response.data.filter((d)=>{
                return d._id==id
              })
              console.log(filterdata)
              setname(filterdata[0].productname)
              setprize(filterdata[0].prize)
              
          })
       
      }   fetch()
  },[])

  var isloggedin= localStorage.getItem("isloggedin")
    console.log(isloggedin)


    if(isloggedin=="true"){
    return (
        <>
        <Base>
       <div>
  {/* CONTENT =============================*/}
  <section className="item content">
    <div className="container toparea">
      <div className="underlined-title">
        <div className="editContent">
          <h1 className="text-center latestitems">MAKE PAYMENT</h1>
        </div>
        <div className="wow-hr type_short">
          <span className="wow-hr-h">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </span>
        </div>
      </div>
      <div id="edd_checkout_wrap" className="col-md-8 col-md-offset-2">
        <form id="edd_checkout_cart_form" method="post">
          <div id="edd_checkout_cart_wrap">
            <table id="edd_checkout_cart" className="ajaxed">
              <thead>
                <tr className="edd_cart_header_row">
                  <th className="edd_cart_item_name">
                    Item Name
                  </th>
                  <th className="edd_cart_item_price">
                    Item Price
                  </th>
                  <th className="edd_cart_actions">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="edd_cart_item" id="edd_cart_item_0_25" data-download-id={25}>
                  <td className="edd_cart_item_name">
                    <div className="edd_cart_item_image">
                      <img width={25} height={25} src={`http://localhost:80/${id}.jpg`} alt />
                    </div>
                    <span className="edd_checkout_cart_item_title">{productname}</span>
                  </td>
                  <td className="edd_cart_item_price">
                    {prize}
                  </td>
                  <td className="edd_cart_actions">
                    <a className="edd_cart_remove_item_btn" href="#">Remove</a>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="edd_cart_footer_row">
                  <th colSpan={5}>
                    <a className="edd-cart-saving-button edd-submit button " id="edd-save-cart-button" href="#">Save Cart</a>
                  </th>
                </tr>
                <tr className="edd_cart_footer_row edd_cart_discount_row" style={{display: 'none'}}>
                  <th colSpan={5} className="edd_cart_discount">
                  </th>
                </tr>
                <tr className="edd_cart_footer_row">
                  <th colSpan={5} className="edd_cart_total">
                    Total: <span className="edd_cart_amount" data-subtotal="11.99" data-total="11.99">{prize}</span>
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </form>
        <div id="edd_checkout_form_wrap" className="edd_clearfix">
          <form id="edd_purchase_form" className="edd_form" action="#" method="POST" onSubmit={upload}>
            <fieldset id="edd_checkout_user_info">
              <legend>Personal Info</legend>
              <p id="edd-email-wrap">
                <label className="edd-label" htmlFor="edd-email">
                  Email Address <span className="edd-required-indicator">*</span></label>
                <input className="edd-input required" type="email" name="edd_email" placeholder="Email address" id="edd-email" defaultValue value={email} onChange={(e)=>{setemail(e.target.value)}} />
              </p>
              <p id="edd-first-name-wrap">
                <label className="edd-label" htmlFor="edd-first">
                   Name <span className="edd-required-indicator">*</span>
                </label>
                <input className="edd-input required" type="text" name="edd_first" placeholder=" name" id="edd-first" defaultValue required  value={name} onChange={(e)=>{setnme(e.target.value)}} />
              </p>
              <p id="edd-last-name-wrap">
                <label className="edd-label" htmlFor="edd-last">
                  Address </label>
                <input className="edd-input" type="text" name="edd_last" id="edd-last" placeholder="Address" defaultValue value={address} onChange={(e)=>{setaddress(e.target.value)}} />
              </p>
            </fieldset>
            <fieldset id="edd_purchase_submit">
              <p id="edd_final_total_wrap">
                <strong>Purchase Total:</strong>
                <span className="edd_cart_amount" data-subtotal="11.99" data-total="11.99">{prize}</span>
              </p>
              <input type="hidden" name="edd_action" defaultValue="purchase" />
              <input type="hidden" name="edd-gateway" defaultValue="manual" />
              <input type="submit" className="edd-submit button" id="edd-purchase-button" name="edd-purchase" defaultValue="Purchase" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </section>
  
</div>
</Base>
        </>
    )}
    else{
      return(
     <h1>login first</h1>
      )
    }
}

export default Checkout
