import Head from 'next/head'
import Image from 'next/image';
import Login from "../components/Login";


export default function Home() {
  return (
    <div className="container px-28 py-20">
      <Login/>
    </div>
  )
}
