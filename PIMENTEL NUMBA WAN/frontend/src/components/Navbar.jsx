import { NavLink } from 'react-router-dom'
import {MdHomeFilled, MdCategory, MdContacts, MdShop2} from 'react-icons/md'

const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles} flex items-center`}>
      <NavLink to="/" className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-300" >
        <MdHomeFilled className="text-2xl" />
        <span>Home</span>
      </NavLink>
      {/* <NavLink to="/" className={({isActive}) => isActive ? " text-lg active_link flex items-center gap-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-300" : "flex items-center gap-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"} >
        <MdHomeFilled className="flexCenter gap-x-1" />
        <span>Home</span>
      </NavLink> */}
      {/* <NavLink
        to="/mens"
        className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
        activeClassName="font-bold"
      >
        <MdCategory className="text-2xl" />
        <span>Men's</span>
      </NavLink>
      <NavLink
        to="/womens"
        className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
        activeClassName="font-bold"
      >
        <MdShop2 className="text-2xl" />
        <span>Women's</span>
      </NavLink>
      <NavLink
        to="/kids"
        className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
        activeClassName="font-bold"
      >
        <MdContacts className="text-2xl" />
        <span>Kids</span>
      </NavLink> */}
      <NavLink
        to="/snipers"
        className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
        activeClassName="font-bold"
      >
        <MdContacts className="text-2xl" />
        <span>Snipers</span>
      </NavLink>
      <NavLink
        to="/shotguns"
        className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
        activeClassName="font-bold"
      >
        <MdContacts className="text-2xl" />
        <span>Shotguns</span>
      </NavLink>
      <NavLink
        to="/rifles"
        className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
        activeClassName="font-bold"
      >
        <MdContacts className="text-2xl" />
        <span>Rifles</span>
      </NavLink>
      <NavLink
        to="/pistols"
        className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
        activeClassName="font-bold"
      >
        <MdContacts className="text-2xl" />
        <span>Pistols</span>
      </NavLink>
      <NavLink
        to="/granadeLaunchers"
        className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-300"
        activeClassName="font-bold"
      >
        <MdContacts className="text-2xl" />
        <span>Granade Launchers</span>
      </NavLink>
    </nav>
  )
}

export default Navbar