const express = require('express');
require('dotenv').config();
const jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT;
var cors = require('cors');
app.use(cors());
const bodyParser = require("body-parser");
const {connect} = require('./db/db');
const userRouter= require('./router/userRouter');
const stackholderRouter= require('./router/stackholderRouter');
const raiseIssueRouter = require('./router/userraiseRouter');
const alertRouter = require('./router/useralertRouter');
const RaiseIssueReport = require('./router/stackholderraiseIssueRouter');
const AlertReport = require('./router/stackholderAlertRouter')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());


app.use('/api/v1/user',userRouter);
app.use('/api/v1/stackholder',stackholderRouter);
app.use('/api/v1',raiseIssueRouter);
app.use('/api/v1',alertRouter);
app.use('/api/v1',RaiseIssueReport);
app.use('/api/v1',AlertReport);

app.get('/',(req,res)=>{
    res.send("hello world")
})



connect();



app.listen(port,()=>{
    console.log(`The app listened on port ${port}`)
})