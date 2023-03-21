import Image from 'next/image'
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoginSideImage from "../assets/loginSide.jpg";
import { CgProfile } from "react-icons/cg";
import Input from "../components/forms/Input";
import Select from "../components/forms/Select";
import ReactGoogleAutocomplete from 'react-google-autocomplete';
let Country = require('country-state-city').Country;
let State = require('country-state-city').State;
let City = require('country-state-city').City;
import * as Axios from "../api-call/index";
import { useRouter } from 'next/router';
import Link from 'next/link';

function Register() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNo,setphoneNo] = useState('');
    const [password,setPassword] = useState('');
    const [street,setStreet] = useState('');
    const [pincode,setPincode] = useState('');
    const [country,setCountry] = useState('');
    const [state,setState] = useState('');
    const [city,setCity] = useState('');

    console.log("country : ",country);

    const [countryList, setCountryList] = useState([{
        value: "India",
        label: 'India',
        isoCode: "IN"
    }]);


    const [stateList, setStateList] = useState(State.getAllStates('IN').map(state => ({
        value: state.name,
        label: state.name,
        data: state.countryCode
        // isoCode : state?.isoCode
    })));

    const [cityList, setCityList] =useState(City.getAllCities('IN').map(city => ({
        value: city.name,
        label: city.name,
        data: city.countryCode
        // isoCode : state?.isoCode
    })));


    useEffect(() => {
        const indiaStates = State.getAllStates().filter(state => state.countryCode === "IN")
        setStateList(indiaStates.map(state => ({
            value: state.name,
            label: state.name,
            data: state.countryCode
        })))

    }, [])

    useEffect(()=>{
        const citydata = City.getAllCities().filter(city => city.countryCode === "IN")
        setCityList(citydata.map(city => ({
            value: city.name,
            label: city.name,
            data: city.countryCode
        })))
    },[])


    const handleSubmit = (e) => {
        e.preventDefault()
        Axios.registerUser(name,email,phoneNo,password,country,state,city,street).then((req)=>{
            console.log("request : ",req);
            router.push('/home')
        });        
    }

    
    return (
        <div className='flex justify-center'>
            <div className='grid lg:grid-cols-2 grid-cols-1 border'>
                <div className='lg:flex hidden '>
                    <Image src={LoginSideImage} width={700} height={700} className="object-contain"  alt=''/>
                </div>
                <div className=''>
                    <div className='flex justify-center pt-8 pb-4'>
                        <CgProfile className='w-24 h-24 border rounded-full p-4 hover:scale-110 duration-300' />
                    </div>
                    <p className='flex justify-center text-[16px] font-light'>
                        Hey, Please do Sign Up for enter in app. And do help in emergency.
                    </p>
                    <form className='py-8 px-8 space-y-4' onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            placeholder="Please enter user name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        >
                            Name
                        </Input>
                        <Input
                            type="email"
                            placeholder="Please enter email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        >
                            Email
                        </Input>
                        <Input
                            type="number"
                            placeholder="Please enter phone number"
                            value={phoneNo}
                            onChange={(e)=>setphoneNo(e.target.value)}
                        >
                            Phone No.
                        </Input>

                        <Input
                            type="text"
                            placeholder="Please enter password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        >
                            Password
                        </Input>

                        <Select type="text" value={country} onChange={(e) => {setCountry(e.value)}} placeholder="Select Country" options={countryList} >Contry</Select>
                        <Select type="text" value={state} onChange={(e)=>setState(e.value)} placeholder="Select State" options={stateList} >State</Select>
                        <Select type="text" value={city} onChange={(e)=>setCity(e.value)} placeholder="Select City" options={cityList} >City</Select>
                        <Input type="text" value={street} onChange={(e)=>setStreet(e.target.value)} placeholder="Street" >Street</Input>
                        <Input type="text" value={pincode} onChange={(e)=>setPincode(e.target.value)} placeholder="Pin code" required>Pin Code</Input>
                        <button className='bg-blue-500 w-full py-1.5 rounded-md text-white' >Submit</button>
                        <p>If you have already account? <Link href='/' className='text-blue-500 hover:underline'>Log In</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register