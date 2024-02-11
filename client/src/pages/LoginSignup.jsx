import React,{ useState, useContext }  from 'react'
import '../pages/css/login.css'
import { Link } from 'react-router-dom'
import { MdEmail, MdOutlinePassword } from "react-icons/md";
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';

function LoginSignup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo} = useContext(ShopContext);

  const login =async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login',{
       email,
       password,
      },
       {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      }

      
      )
      console.log("response", response.data);
      if (response.status === 200) {
        const userInfo = response.data; // Access data from the response
        setUserInfo(userInfo);
        alert('Login Successful');
        setRedirect(true);
      }
    } catch (error) {
     console.log('invlaid credentials', error);
    }
   }

   if(redirect){
    return <Navigate to={'/'} />
  }
  return (
    <div className='login'>
       <div className='login-form'>
        <form onSubmit={login} >
          <div>
            <h2 className='heading'>Login</h2>
          </div>
          <div>
        <MdEmail className='icons1' />
       <input type='email' 
       placeholder='enter you email'
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       >

       </input>
       </div>
       <div>
        <MdOutlinePassword className='icons2'/>
       <input type='password' 
       placeholder='enter your password....'
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       >
       </input>
       </div>
          <button className='btns' type='submit'>Login</button>
         <p>Don't have an Account? <Link className='links1' to={'/register'}>Click here</Link></p>
        </form>
       </div>
      
    </div>
    
  )
}

export default LoginSignup