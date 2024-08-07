import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/i.avif'
import Navbar from './Navbar'
import { MdMenu, MdClose } from 'react-icons/md'
import {FaOpencart} from 'react-icons/fa'
import { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const toggle = () => setMenuOpened(!menuOpened)
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <header className="fixed top-0 m-auto w-full bg-white shadow-md z-10">
    <div className="container mx-auto flex items-center justify-between p-4">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-20 w-20" />
        </Link>
      </div>
      
      {/* Navbardedsktop */}
      <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}/>
      {/* nav mobile */}
      <Navbar containerStyles={`${menuOpened ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-80 medium-16 ring-1 ring-slate-900/5 transition-all diration-300" : "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 meduim-16 ring-1 ring-slate-900/5 transition-all diration-300 -right-[100%]"}`}/>
      {/* Button */}
      <div className='flexBetween gap-x-1 sm:gap-x-6 bold-16'>
        {!menuOpened ? 
        (<MdMenu className='md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full' onClick={toggle}/>) 
        : 
        (<MdClose className='md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full' onClick={toggle}/>)}

<div class="flex items-center justify-between sm:gap-x-6">
<NavLink to="cart-page" className="flex items-center relative">
  <FaOpencart className="top-10 p-1 h-8 w-8 ring-1 ring-slate-900/30 rounded-full bg-red-600 text-white" />
  <span className="absolute top-[-5px] left-[30px] flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-xs">
    {getTotalCartItems()}
  </span>
</NavLink>

  {localStorage.getItem('auth-token') ? <NavLink onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}} to={'logout'} class="btn_dark_rounded flex items-center ring-slate-900/30 gap-x-2 text-lg px-4 py-2 rounded-md bg-red-600 border border-gray-300 text-white  transition-colors duration-300">
    Logout
  </NavLink>
  :  
  <NavLink to="login" class="btn_dark_rounded flex items-center ring-slate-900/30 gap-x-2 text-lg px-4 py-2 rounded-md bg-red-600 border border-gray-300 text-white  transition-colors duration-300">
    Login
  </NavLink>
  }
  
</div>


      </div>
    </div>
  </header>
  )
}

export default Header