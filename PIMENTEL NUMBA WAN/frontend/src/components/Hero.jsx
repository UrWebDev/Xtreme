import { MdStar, MdOutlineLocalOffer } from "react-icons/md"
import { NavLink } from "react-router-dom"

const Hero = () => {
  return (
    <section className="relative bg-hero bg-center bg-no-repeat h-screen w-full">
        <div className="max_padd_container relative top-32 xs:top-52">
            <h1 className="h1 text-black capitatalize max-w-[37rem]">XTRM AIRSOFT GUN SHOP</h1>
            <p className="text-white regular-18 mt-6 max-w-[33rem]">XTRM: Web-based Online Airsoft guns and Accessories Shop is an Online store for airsoft guns and accessories. Known for its realistic military simulations and skirmish games. These stores offer a wide range of products, from various types of airsoft guns—including rifles, pistols, shotguns, and etc.
</p>
            <div className="flexStart !items-center gap-x-4 my-10">
                <div className="!regular-24 flexCenter gap-x-3">
                    <MdStar color="#FFD700" />
                    <MdStar color="#FFD700" />
                    <MdStar color="#FFD700" />
                    <MdStar color="#FFD700" />
                    <MdStar color="#FFD700" />
                </div>
                <div className="bold-16 sm:bold-20 text-white">176k <span className="regular-16 sm:regular-20">Excellent Reviews</span> </div>
            </div>
            <div className="max-xs:flex-col flex gap-2">
                <NavLink to={"/snipers"} className="btn_dark_rounded flexCenter ">
                    Shop Now
                </NavLink>
                <NavLink to={"/shotguns"} className="btn_dark_rounded flex items-center justify-center px-4 py-2 rounded bg-black text-white gap-x-2">
                    <MdOutlineLocalOffer className="text-2xl" />
                    Offers
                </NavLink>
            </div>
        </div>
    </section>
  )
}

export default Hero


// <section className="pt-[250px]">
//         <div className="max-w-5xl mx-auto px-4">
//             <h1 className="text-4xl font-bold mb-4 ">KEVIN'S GUN SHOP</h1>
//             <p className="text-gray-700 mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates consectetur deserunt vero at quo dolore expedita animi consequuntur rem laborum, est illo eos autem praesentium. Debitis enim atque, deserunt ex eius, similique, ipsa quo odit iusto unde voluptatum earum. Odit reiciendis perspiciatis saepe quidem in nobis. Repellat doloribus eius aliquid.</p>
//             <div className="flex items-center mb-4">
//                 <div className="flex text-yellow-500">
//                     <MdStar />
//                     <MdStar />
//                     <MdStar />
//                     <MdStar />
//                     <MdStar />
//                 </div>
//                 <div className="ml-2 text-lg font-semibold">176k <span className="font-normal">Excellent Reviews</span> </div>
//             </div>
//             <div className="flex gap-2 flex-wrap">
//                 <NavLink to={"/"} className="btn_dark_rounded flex items-center justify-center px-4 py-2 rounded bg-black text-white">
//                     Shop Now
//                 </NavLink>
//                 <NavLink to={"/"} className="btn_dark_rounded flex items-center justify-center px-4 py-2 rounded bg-black text-white gap-x-2">
//                     <MdOutlineLocalOffer className="text-2xl" />
//                     Offers
//                 </NavLink>
//             </div>
//         </div>
//     </section>