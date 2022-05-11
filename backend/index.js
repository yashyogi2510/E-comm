const express= require("express")
const cors =require("cors")
const bodyparser=require("body-parser")
const multer =require("multer")
var fs = require('fs');
const path = require('path');

const bcrypt = require('bcrypt');
const saltRounds = 10;


const Mongoclient =require('mongodb').MongoClient;
const bodyParser = require("body-parser");
// const bodyParser = require("body-parser");
let client = new Mongoclient("mongodb://localhost:27017/yash",
{useNewUrlParser:true, useUnifiedTopology: true}
);
let mdb;
client .connect((err,db)=>{
    if(!err){
        mdb=db;
        console.log("mongoconnect")
    }
    else{
        console.log("db could not be connected")
        console.log(err)
    }
});



const app= express()
app .use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors())

// middlware
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload/')
    },
    filename: function (req, file, cb) {
      cb(null,"temp.jpg" )
    }
  })
   
  var upload = multer({ storage: storage })
  app.use(express.static(__dirname + '/upload'))
  
  // connecting uload api
  app.post("/uploads" ,upload.single('file'),function(req,res,next){
    console.log(req.body)
    console.log(req.file)

    var c= mdb.db("ecommerce").collection("images")
    c.insertOne(req.body,(err,r)=>{
        console.log(r)
        if(!err){
            fs.renameSync('./upload/temp.jpg', './upload/' + r.insertedId +'.jpg');
                           
            res.send("ok")

        }
        else{
            res.send("fail")
        }

    })
})
// // 
// // 

app.get("/product",(req,res)=>{
    var d= mdb.db("ecommerce").collection("images")
     d.find().toArray((err,docs)=>{
      if(!err && docs.length>0){
          res.send(docs)

      }
      else{
          res.send(err)
      }
     })
})


//   end

// for signup api
app.post("/signup",bodyParser.json(),(req,res)=>{
    console.log(req.body)
    var a= mdb.db("ecommerce").collection("user")
    a.find({email:req.body.email}) .toArray((err,docs)=>{
        if(!err && docs.length>0){
            console.log("userexist")
        }
        else { bcrypt.hash(req.body.password,saltRounds,function(err,hash){
            if(!err){
                req.body.password=hash
                a.insertOne(req.body,(err,r)=>{
                    if(!err){
                        res.send("ok")
                    }
                    else
                    {
                        res.send("fail")
                    }
                })
            }
        })
        }
    })
})

// api for login
app.post("/login",bodyParser.json(),(req,res)=>{
    console.log(req.body)
    const {email ,password}=req.body
    if(! email && ! password ) res.send ({
        status:422 ,message : "please emnter your deatils"
    })
    else {
        let c= mdb.db("ecommerce").collection ("user")
        c.find({ email: email}) .toArray ((err,docs)=>{
            if (! err && docs.length >0){
                console.log(docs)
                bcrypt.compare(password ,docs[0].password, function(err ,result ){
                  
                   console.log(result)
                  
                    if(result){
                        res.send ({status:300 ,message: "welcome"})
                    }
                    
                    else {
                        res.send({status:400  ,message:"password may be incorrect"})
                    }
                }
                )
                
            }
            else{
                res.send({status:400 ,message:"email password may be incoorect"})
            }
        })
    }
})
//
app.post("/booking" ,bodyParser.json(),(req,res)=>{
    console.log(req.body)
    let e= mdb.db("ecommerce").collection("booking")
    e.insertOne(req.body,(err,r)=>{
        if(!err){
            res.send("ok")
        }
        else(res.send("fail"))
    })
     
}) 
// 
// 
app.get("/show",(req,res)=>{
    var f= mdb.db("ecommerce").collection("booking")
     f.find().toArray((err,docs)=>{
      if(!err && docs.length>0){
          res.send(docs)

      }
      else{
          res.send(err)
      }
     })
})

// 
app.listen(80,()=>{
    console.log("server 80 is ready")
})