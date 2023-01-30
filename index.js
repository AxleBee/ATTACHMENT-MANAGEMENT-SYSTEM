const express=require('express');
const connectDB=require('./config/db')
const app=express();
//connect the database
connectDB();
require('./routes/logbook')
require('./routes/attachdetails')
require('./routes/feedbackem')
require('./routes/feedbacksup')




const port=process.env.PORT || 8082;
app.listen(port,()=>console.log(`Server is running on port ${port}`));

