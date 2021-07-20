const express = require ('express');
const mongojs = require('mongojs');
const db = mongojs('fullStackApp',['users']);

const app = express();

app.use(express.json()); //use middleware, da pristupimo podacima

app.get('/data',(req,res) =>{
    res.send("works fine");
})

app.post('/register',(req,res) =>{
    //save new user
    console.log(req.body);

    db.users.insert({name:req.body.name,pass:req.body.pass}, (err,docs)=>{
        res.send("ok");
    })
   
})

app.post('/login',(req,res)=>{
    //find user from db
     console.log(req.body); // pomocu middlewera vidimo podatke
     db.users.find({name:req.body.username, pass:req.body.password},(err,docs) =>{
         if(docs.length == 1){
            res.send({
                name : docs[0].name,
                token : docs[0]._id
            })
         }
     })

})

app.listen(9000, () =>{
    console.log('Server running port 9000');
})