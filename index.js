const express=require('express');
const connectDB=require('./config/db')
const app=express();
//connect the database
connectDB();

app.get('/',(req,res)=>res.send('HELLO WORLD'));
const port=process.env.PORT || 8082;
app.listen(port,()=>console.log(`Server is running on port ${port}`));