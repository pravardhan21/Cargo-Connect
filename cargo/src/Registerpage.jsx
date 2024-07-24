import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('');
  const [phone,setPhone]=useState('')
  const [mail,setEmail]=useState('')
  const [num,setNumber]=useState('')
  const navigate = useNavigate();
  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

 
 const submit1=async(e)=>{
  e.preventDefault()
  const prov={
    name:name,
    email:mail,
    password:password,
    phone_number:phone

  }
  try {
    
    axios.post('http://localhost:3001/provider',prov)
    .then(response => {
        console.log('Response:', response.data);
        navigate('/provider',{ state: { name: name,email:mail,phone:phone  } });
    })
    .catch(error => {
        console.error('Error:', error);
    });
  } catch (error) {
    console.log(error);
  }
 }
 const submit2=(e)=>{
  e.preventDefault()
  
  const prov={
    name:name,
    email:mail,
    password:password,
    phone_number:phone,
   truck_number:num
  }
  try {
    
    axios.post('http://localhost:3001/trucker',prov)
    .then(response => {
        console.log('Response:', response.data);
        navigate('/trucker',{ state: { name: name} });
    })
    .catch(error => {
        console.error('Error:', error);
    });
  } catch (error) {
    console.log(error);
  }
 }
  return (
    <div className="register-page">
      
      {
        !role ?(<div>
<div className="role-selection text-2xl text-white h-screen flex  justify-around items-center">
        <button className='hover:border-2 rounded-md hover:bg-white hover:text-slate-700 p-5' onClick={() => handleRoleSelection('trucker')}>I'm a trucker</button>
        <button className='hover:border-2 rounded-md hover:bg-white hover:text-slate-700 p-5' onClick={() => handleRoleSelection('load-provider')}>I'm a load provider</button>
      </div>
        </div>):(<div></div>)
      }
      {role=="trucker" ?(
        <form >
        <div className=' text-black flex items-center justify-center  h-screen w-screen'>
    <form className='flex bg-slate-800 flex-col items-center justify-center w-[450px] h-[450px] text-white   shadow-lg focus:border rounded-md  space-y-3' action="" method="post">
      <h1 className='text-white font-bold text-3xl '>Trucker</h1>
      <input required onChange={(e)=>{setName(e.target.value)}}  value={name } className=' focus:outline-none bg-transparent border-b-[2px]  border-black placeholder-white focus:border-white  p-3' placeholder='Full name' type="text" name="" id="" />
      <input required onChange={(e)=>{setEmail(e.target.value)}}  value={mail } className=' focus:outline-none bg-transparent border-b-[2px]  border-black placeholder-white  focus:border-white  p-3' placeholder='Email' type="email" name="" id="" />
      <input required onChange={(e)=>{setPhone(e.target.value)}}  value={phone } className=' focus:outline-none bg-transparent border-b-[2px]  border-black placeholder-white  focus:border-white  p-3' placeholder='Phone number' type="number" name="" id="" />
      <input required onChange={(e)=>{setNumber(e.target.value)}}  value={num } className=' focus:outline-none bg-transparent border-b-[2px]  border-black placeholder-white  focus:border-white  p-3' placeholder='Truck Number' type="text" name="" id="" />
      <input required onChange={(e)=>{setPassword(e.target.value)}} value={password} className=' focus:outline-none bg-transparent focus:border-white  border-b-[2px] border-black placeholder-white  p-3' placeholder='Password' type="password" name="" id="" />
      <button onClick={submit2}   className='bg-white text-black  text-lg px-8 py-3 rounded-md hover:text-white hover:bg-slate-800 hover:border-2 font-bold'>Register</button>
    </form>
 </div>       
        </form>
      ):(
       <div></div>
      )}
      {role=="load-provider" ?(
        <form >
        <div className='  flex items-center justify-center  h-screen w-screen'>
    <form className='flex bg-slate-800 flex-col items-center text-white justify-center w-[400px] h-[450px]   shadow-lg focus:border rounded-md  space-y-3' action="" method="post">
      <h1 className=' font-bold text-3xl '>Load-provider</h1>
      <input required onChange={(e)=>{setName(e.target.value)}}  value={name } className='text-white focus:outline-none bg-transparent border-b-[2px]  border-black placeholder-white focus:border-white  p-3' placeholder='Full name' type="text" name="" id="" />
      <input required onChange={(e)=>{setEmail(e.target.value)}}  value={mail } className=' focus:outline-none bg-transparent border-b-[2px]  border-black placeholder-white  focus:border-white  p-3' placeholder='Email' type="email" name="" id="" />
      <input required onChange={(e)=>{setPhone(e.target.value)}}  value={phone } className=' focus:outline-none bg-transparent border-b-[2px]  border-black placeholder-white  focus:border-white  p-3' placeholder='Phone number' type="number" name="" id="" />
      <input required onChange={(e)=>{setPassword(e.target.value)}} value={password} className=' focus:outline-none bg-transparent focus:border-white  border-b-[2px] border-black placeholder-white  p-3' placeholder='Password' type="password" name="" id="" />
      <button onClick={submit1}  className='bg-white text-black  text-lg px-8 py-3 rounded-md hover:text-white hover:bg-slate-800 hover:border-2 font-bold'>Register</button>
    </form>
 </div>
          
        </form>
      ):(
       <div></div>
      )}
    </div>
  );
};

export default RegisterPage;
