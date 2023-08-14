const express = require("express");
const bodypareser = require("body-parser");
const ejs = require("ejs");

const _ = require("lodash");



const app = express();
let posts =[];

app.set('view engine','ejs');

const homeStartingContent = "Here is a home starting content in this content part i will be add the content we can present on the home start it will be helpful for me to sugges those thing by angela mam";

const aboutContent = "Here is a about starting content in this content part i will be add the content we can present on the home start it will be helpful for me to sugges those thing by angela mam";


const contactContent = "Here is a home starting content in this content part i will be add the content we can present on the home start it will be helpful for me to sugges those thing by angela mam";


app.use(bodypareser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{

    res.render("home",{startContent: homeStartingContent,
        posts:posts
    });
    
})


app.get("/about",(req,res)=>{

    res.render("about",{appaboutcontent:aboutContent});
    
})

app.get("/contact",(req,res)=>{

    res.render("contact",{appcontactcontent:contactContent,});
    
})
app.get("/compose",(req,res)=>{
    
    res.render("compose");
    
})
app.post("/compose",(req,res)=>{
    console.log(req.body);
    const post ={
        title:req.body.posttitle,
        postbody:req.body.postbody
    };

    posts.push(post);
    res.redirect("/");
    
    
})

app.get("/posts/:postTitle",(req,res)=>{
   var reqestedTitle = _.lowerCase(req.params.postTitle) ;

   posts.forEach( function (post ){
     storeTitle = _.lowerCase(post.title);
    if(storeTitle === reqestedTitle){
       
       res.render("post",{
        title:post.title,
        content:post.postbody
       })
    }
    
    
   });
});


app.listen(3000,(req,res)=>{
    console.log("Serevr is running on port 3000");
});