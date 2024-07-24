import React, { useState } from 'react';
import truck from './truck.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Landing() {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        try {
            if (role === "trucker") {
                await axios.get('http://localhost:3001/trucker/login', { params: { mail: mail } })
                    .then(response => {
                        console.log('Response:', response.data.name);
                        navigate('/trucker', { state: { name: response.data.name } })
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        console.log("1");
                    });
            } else if (role === "provider") {
                await axios.get('http://localhost:3001/provider/login', { params: { mail: mail } })
                    .then(res => {
                        console.log(res.data.name);
                        navigate('/provider', { state: { name: res.data.name.name, email: mail, phone: res.data.name.phone_number } })
                    })
                    .catch(error => {
                        console.log(error);
                        console.log("2");
                    });
            } else {
                alert("please select a role !!")
            }
        } catch (error) {
            alert("User not found!!")
        }
    }

    return (
        <>
            <div className='absolute top-0 right-0 mt-40 mr-80 text-white'>
                {/* Add your information here */}
                <p className='mr-4 text-4xl'>Cargo Connect India </p>
                <p className='mr=4'>Connecting one Shipment at a time</p>
                


            </div>
            <div className=''>
                {/* nav bar and logo  */}
            </div>
            <div className="flex flex-row -mb-72 ">
                <div className="truck w-[100vw] h-[100vh]">
                    <img src={truck} alt="Truck" className='h-45 w-60 ml-80'/>
                </div>
                <div className="info -ml-40 p-10 basis-1/2"></div>
            </div>
            <div className="flex flex-col justify-center w-[60vw] ml-[20vw] rounded-2xl mb-10 items-center bg-yellow-600 p-10">
                <center className='block'>
                    <h1 className='block font-mono font-extrabold text-5xl'>Login</h1>
                </center>
                <label className='mt-10  -ml-[67%] mb-4'>Email</label>
                <input onChange={e => { setMail(e.target.value) }} value={mail} type='email' className='w-[40vw] bg-slate-200 block h-[5vh] rounded-3xl mb-2' />

                <label className='mt-2 -ml-[65%] mb-3'>Password</label>
                <input onChange={e => { setPassword(e.target.value) }} value={password} type='password' className='w-[40vw] bg-slate-200 block h-[5vh] rounded-3xl mb-20' />
                <label className='mt-2 -ml-[65%] mb-3'>Role</label>
                <select value={role} onChange={e => { setRole(e.target.value) }} className='w-[40vw] bg-slate-200 block h-[5vh] rounded-3xl mb-20'>
                    <option value="">Select Role</option>
                    <option value="trucker">Trucker</option>
                    <option value="provider">Provider</option>
                </select>
                <button onClick={submit} className='w-[12vw] block h-[5vh] -mt-6 bg-slate-300 rounded-3xl mb-5'>Submit</button>
                <div className=''>
                    <Link to='/register'>Haven't Registered Yet? Register</Link>
                </div>
            </div>
        </>
    )
}

export default Landing;
