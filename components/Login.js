import Image from 'next/image'
import React from 'react';
import { useState, useEffect } from 'react';
import LoginSideImage from "../assets/loginSide.jpg";
import { CgProfile } from "react-icons/cg";
import Input from "./forms/Input";
import Select from "./forms/Select";
import {useRouter} from "next/router"; 
import {loginUser} from "../api-call/index";
import Link from 'next/link';

function Login() {
    const router = useRouter();
    const [itemLink, setitemLink] = useState('');
 
   
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     loginUser(email, phoneno, password).then((response)=>{
    //             console.log('response');
    //             if(response?.status == 'SUCCESS'){
    //                 router.push('/home')
    //             }
    //     })

    // }

    useEffect(()=>{
        router.push(itemLink);
    })

  return (
    <div className='flex justify-center'>
            <div className='grid lg:grid-cols-2 grid-cols-1 border'>
                <div className='lg:flex hidden '>
                    <Image src={LoginSideImage} width={700} height={700} className="object-contain" />
                </div>
                <div className=''>
                    <div className='flex justify-center pt-8 pb-4'>
                        <CgProfile className='w-24 h-24 border rounded-full p-4 hover:scale-110 duration-300' />
                    </div>
                    <p className='flex justify-center text-[16px] font-light'>
                        Hey, Please do Sign In for enter in app. And do help in emergency.
                    </p>
                    <form className='py-8 px-8 space-y-4' onClick={()=>{router.push("/home")}}>
                        <Input
                            type="text"
                            placeholder="Please enter user name"
                        >
                            Name
                        </Input>
                        <Input
                            type="email"
                            placeholder="Please enter email"
                        >
                            Email
                        </Input>
                        <Input
                            type="number"
                            placeholder="Please enter phone number"
                        >
                            Phone No.
                        </Input>

                        <Input
                            type="text"
                            placeholder="Please enter password"
                        >
                            Password
                        </Input>

                        <button className='bg-blue-500 w-full py-1.5 rounded-md text-white' >Submit</button>
                        <p>If you don't have an account? Please do resiter and verify. <Link href='/register' className='text-blue-500 hover:underline'>Sign Up</Link> </p>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Login