import React,{ useState }  from 'react'
import {Link, Navigate } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { MdEmail, MdOutlinePassword } from "react-icons/md";
import axios from 'axios';

function Register() {
    const [name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[redirect, setRedirect] = useState(false);
    
    const register = async(e) => {
      e.preventDefault();
      try {
         const response = await axios.post('http://localhost:4000/register', {
          name, email, password
         });
         console.log( "reponse",response.data );
         if(response.status === 200){
          alert("Registration successfull :)");
          console.log('registration successfull');
          setRedirect(true);
         }
      } catch (error) {
        console.log("registration failed", error);
      }
    }
    if(redirect){
      return <Navigate to={'/login'} />
    }
  
  return (
    <div className='login'>
    <div className='login-form'>
     
     <form onSubmit={register} > 
       <div>
         <h2 className='heading'>Register</h2>
       </div>
       <div>
       <FaRegUser className='icons1' />
       <input type='text' 
       placeholder='Enter your Name :)'
       value={name}
       onChange={(e) => setName(e.target.value)}
       ></input>
       </div>
       <div>
        <MdEmail className='icons2' />
       <input type='email' 
       placeholder='enter you email'
       value={email} 
       onChange={(e) =>setEmail(e.target.value)}
       >
       </input>
       </div>
       <div>
        <MdOutlinePassword className='icons3'/>
       <input type='password' 
       placeholder='enter your password....'
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       >
       </input>
       </div>
       <button className='btns' type='submit'>Register</button>
      <p>Already have an Account? <Link className='links1' to={'/login'}>Click here</Link></p>
     </form>
    </div>
   
 </div>
  )
}

export default Register