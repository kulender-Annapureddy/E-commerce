import React, { useContext, useEffect } from 'react'
import '../Navbar/navbar.css'
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import axios from 'axios';



function Navbar() {
  const {TotalCartCount } = useContext(ShopContext);
  const {userInfo, setUserInfo} = useContext(ShopContext);
  useEffect(() => {
    // Only fetch user info if userInfo is not null
    if (!userInfo) {
      axios.get('http://localhost:4000/profiles', {
        withCredentials: true,
      }).then(response => {
        const userInfo = response.data.info;
        setUserInfo(userInfo);
      }).catch(error => {
        console.error("Error fetching user info:", error);
      });
    }
  }, [userInfo, setUserInfo]);
  
  const handleLogout = () => {
    axios.post("http://localhost:4000/logout", null, {
      withCredentials: true,
    }).then(response => {
      if (response.status === 200) {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        setUserInfo(null);
      }
    }).catch(error => {
      console.error("Logout failed:", error);
    });
  };
  const email = userInfo?.email;
  
  return (
    <>
    <div className='navbar'>
        <div className='nav-logo'>
            <Link className='links' to={'/'}>
            <h2>JUDE</h2>
            </Link>
        </div>
        <ul className='nav-menu'>
            <li><Link className='links' to={'/'}>Shop</Link> </li>
            <li><Link className='links' to={'/mens'}>Men</Link></li>
            <li><Link className='links' to={'/womens'}>womens</Link></li>
            <li><Link className='links' to={'/kids'}>Kids</Link></li>
        </ul>
        <div className='nav-cart-login'>
          {email && (
            <div className='lol'>
              <div className='lol-text'>Hi, Welcome</div>
            <Link className='links' to={'/'}> <button onClick={handleLogout}>Logout</button></Link>
            </div>
          )}
          { !email &&(
            <Link className='links' to={'/login'}> <button >Login</button></Link>
          )}
        
          <Link className='links' to={'/cart'}>
          <IoCartOutline className='icons'/>
            </Link>  
           
        <div className='nav-cart-count'>{TotalCartCount()}</div>
        </div>
    </div>
    <div className='mobile-categorie'>
      <div>
    <ul className='nav-menus'>
            <li><Link className='links' to={'/'}>Shop</Link> </li>
            <li><Link className='links' to={'/mens'}>Men</Link></li>
            <li><Link className='links' to={'/womens'}>womens</Link></li>
            <li><Link className='links' to={'/kids'}>Kids</Link></li>
        </ul>
        </div>
    </div>
    </>
  
  )
}

export default Navbar