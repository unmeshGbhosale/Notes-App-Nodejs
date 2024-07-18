//using express
const express = require ('express');
const app = express();
const path = require('path');
const fs = require("fs");
//to use the form it is required
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//insalling ejs for dynamic powers 

//by writing this we say that all the files for web it should search inside the public folder 
app.use(express.static(path.join(__dirname,'public')));


//setting up ejs as view engine(ejs will be render replacing the html)
app.set('view engine','ejs');


//setting up the routes  

app.get("/",function(req, res){
    //importing the fs mode  
    //by importing this methode from fs module we can read all the files from the directory  
    fs.readdir(`./files`,function(err,files){

        //by doing {files:files}  in the foloowing line we are 
        //saying that files from line no 24 (err,files) are sending as files in front end (index.ejs)
        res.render("index",{files:files});
 
    })
    //we are using ejs so we can use res.render  instade of res.send 
    // can send html file but it shoud pressent in view folder  
    // res.render("index")

})


// app.get("/profile/:username",function(req, res){
// we are making thgis route dynamic for user       
// or making this dynamic we use : in the route     
// all the part from " : " are consider as req.params.username
// for eg   if the route are /app/profile/:username  then the :username can be access with req.params.username
// res.send(req.params.username);

 
app.get("/file/:filename",function(req,res){
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata){
        //apart from show file in views folder we need to send main file that is why we need to send title and the details of the file to the frontend   so there is title name {req.params.filename} and detais as req.params.filedata}
        res.render('show',{filename: req.params.filename,filedata:filedata});
        
    })
})

app.post("/create", function(req, res){
    // fs.writeFile is use to create a file where you have to give path so .files are
    //req.body.title is value of title box of app 
    //.split('.') will cut string into array and .join('') will join them  eg   "hi there i am noob" will 
    //["hi","there","i","am","noob"]  from split(' ') and after  .join(' ')  hithereiamnoob
    // fs.writeFile(file,data[,options],callback) is the standart rule  `./files/${req.body.title.split('.').join('')} is file path .txt for format 

    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt` , req.body.details,function(err){
            res.redirect("/")
    });
})




app.listen(3000,function(){
    console.log("listing on port 3000")
});
