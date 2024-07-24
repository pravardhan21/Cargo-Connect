import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Provider = () => {
    const [current,setCurrent]=useState('')
  const [destination,setDestination]=useState('')
  const [cargo,setCargo]=useState('')
  const [truck,setTruck]=useState([])
  const location=useLocation()
  const {name,email,phone }=location.state
  const submit=async(e)=>{
    e.preventDefault();
   
    try {
      // Use axios.put to send the request with the PUT method
      const response = await axios.put('http://localhost:3001/provider/update', { name, current, destination,cargo });
      console.log('Response:', response.data[0]);
      setTruck(response.data[0]);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const inter=async(e)=>{
    e.preventDefault();
    const tname=truck._id;;
    console.log(tname);
    console.log(email)
    console.log(phone);
    try {
        // Use axios.put to send the request with the PUT method
        const response = await axios.put('http://localhost:3001/provider/inter', {tname ,name, email,phone });
        console.log('Response:', response.data);
       
      } catch (error) {
        console.error('Error:', error);
      }
  }
  return (
    <div className='flex flex-col space-y-6 w-screen h-screen text-white items-center justify-center'>
           <p className='text-3xl'>Hello,{name}</p>
     <div className='space-y-4'>
      <p className='text-center'>Update your location</p>
      <div className='grid gap-5'>
        <input onChange={e=>{setCurrent(e.target.value)}} value={current} className='p-2  w-[250px] focus:outline-none bg-transparent border-b-2 ' required type="text" placeholder='Enter your Current location'/>
        <input required onChange={e=>{setDestination(e.target.value)}} value={destination} className='p-2  w-[250px] focus:outline-none bg-transparent border-b-2 ' type="text" placeholder='Enter your destination ' />
        <input onChange={e=>{setCargo(e.target.value)}} value={cargo} className='p-2  w-[250px] focus:outline-none bg-transparent border-b-2 ' type="text" placeholder='Enter the cargo size (in tons) ' />
        <button onClick={submit} className='p-3 border-2 hover:border-slate-600 hover:bg-white hover:text-slate-600'>Search</button>
      </div>
      
     </div>
    <div className='text-white '>
    {truck ? (
        <div className='flex items-center justify-center space-x-10'>
            <p>{truck.name}</p>
            <p>{truck.email}</p>
            <p>{truck.phone_number}</p>
            <button onClick={inter} className='p-2 border-2 rounded-md'>Interested</button>
        </div>
        
     ):(
        <div> </div>
     )

     }
    </div>
    </div>
  )
}

export default Provider