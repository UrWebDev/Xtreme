import Sidebar from "../Components/Sidebar"
import {Routes, Route} from 'react-router-dom'
import AddProduct from "../Components/AddProduct"
import ListProduct from "../Components/ListProduct"

const Admin = () => {
  return (
    <div className="lg:flex">
        <Sidebar />
        <Routes>
            <Route path="/addproduct" element={<AddProduct />}/>
            <Route path="/listproduct" element={<ListProduct />}/>
        </Routes>
    </div>
  )
}

export default Admin