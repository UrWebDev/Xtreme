import { NavLink } from "react-router-dom"
import { MdOutlineLocalOffer } from "react-icons/md"

const Offer = () => {
  return (
    <section className="bg-white text-center w-full px-4 py-24 mt-16">
        <div className="max_padd_container">
            <h2 className="h2">Summer Sale 50%</h2>
            <h3 className="h3 capitalize">& Free Shipping Fee</h3>
            {/* <button className="btn_dark_rounded">Go To Store</button> */}
            
        <div className="max-xs:flex-col flexCenter flex gap-2">
                <NavLink to={"/cart-page"} className="btn_dark_rounded flexCenter ">
                    Checkout Now!
                </NavLink>
                
            </div>
        </div>
    </section>
  )
}

export default Offer