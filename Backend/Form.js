const express =require('express');
const app = express();
const port = 1900;

const cors =require('cors');
const { default: mongoose } = require('mongoose');
const Formmodel= require('./new/Data');
app.use (express.json());
app.use (cors());

mongoose.connect('mongodb://localhost:27017/FORMTASK')
.then(()=>{
    console.log('mongodb connected succesfully');
    
})
.catch((err)=>{
    console.log('mongodb connection error',err);
    

})
app.post('/userpost',async(req,res)=>{
    try{
        const{name,email,age}=req.body;
        const newuser=await Formmodel.create({name,email,age})
            res.status(201).json(newuser)
        }
 catch(error){
    res.status(400).json({error:errormessage})}
})

app.get('/userget',async(req,res)=>{
    try{
        const users=await Formmodel.find()
        res.json(users)
    }
    catch(error){
        res.status(500).json({error:error.errormessage})
    }
})



app.listen(port,()=>{
    console.log(`server running on port ${port}`);
    
});
