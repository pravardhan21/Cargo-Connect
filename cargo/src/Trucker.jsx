import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const Trucker = () => {
  const [current,setCurrent]=useState('')
  const [destination,setDestination]=useState('')
  const [inter,setInter]=useState([])
  const location=useLocation()
  const {name}=location.state
  const submit=async(e)=>{
    e.preventDefault();
   
    try {
      // Use axios.put to send the request with the PUT method
      const response = await axios.put('http://localhost:3001/trucker/update', { name, current, destination });
      console.log('Response:', response.data);
      fetchinter()
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const fetchinter=async()=>{
    try {
     await axios.get('http://localhost:3001/trucker/inter',{params:{name:name}}).then(response => {
      console.log('Response:', response.data);
      setInter(response.data)
  })
  .catch(error => {
      console.error('Error:', error);
  });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='text-white flex flex-col items-center justify-center space-y-4 w-screen h-screen p-5'>
     <p className='text-3xl'>Hello,{name}</p>
     <div className='space-y-4'>
      <p className='text-center'>Update your location</p>
      <div className='grid gap-5'>
        <input onChange={e=>{setCurrent(e.target.value)}} value={current} className='p-2  w-[250px] focus:outline-none bg-transparent border-b-2 ' required type="text" placeholder='Enter your Current location'/>
        <input required onChange={e=>{setDestination(e.target.value)}} value={destination} className='p-2  w-[250px] focus:outline-none bg-transparent border-b-2 ' type="text" placeholder='Enter your destination ' />
        <button onClick={submit} className='p-3 border-2 hover:border-slate-600 hover:bg-white hover:text-slate-600'>Update</button>
      </div>
      {inter?(
        
        <div>
          <p className='text-center'>Intersted Customers</p>
               { inter.map((i)=>{
          return(
           <div className='flex space-x-4'>
             <p>{i.name}</p>
             <p>{i.email}</p>
             <p>{i.phone}</p>
           </div>
            
          )
        })}
        </div>
       
      )
      :(<div></div>)}
     </div>
    <div>
      
    </div>
    </div>
  )
}

export default Trucker