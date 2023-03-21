import Head from 'next/head'
import Image from 'next/image';
var cors = require('cors');
import Register from "./register";
import Login from "../components/Login";

var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


export default function Home() {
  return (
    <div className="container px-28 py-20">
      <Login/>
    </div>
  )
}
