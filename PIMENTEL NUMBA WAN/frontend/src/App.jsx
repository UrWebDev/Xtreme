import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from  './components/Footer'
import Category from './pages/Category'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Login from './pages/Login'
import Home from './pages/Home'

//iamges for categoruy
import bannermens from "./assets/bannermens.png"
import bannerwomens from "./assets/bannerwomens.png"
import bannerkids from "./assets/bannerkids.png"
import sgBanner from "./assets/sgBannerr.png"
const App = () => {
  return (
    <main className='bg-primary text-tertiary'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/snipers" element={<Category category="snipers" />}/>
          <Route path="/shotguns" element={<Category category="shotguns" />}/>
          <Route path="/rifles" element={<Category category="rifles" />}/>
          <Route path="/pistols" element={<Category category="pistols" />}/>
          <Route path="/granadeLaunchers" element={<Category category="granadeLaunchers"/>}/>
          <Route path="/product" element={<Product />}> 
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart-page" element={<Cart />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App
