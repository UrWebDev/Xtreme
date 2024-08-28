import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import Item from "../components/Item"
import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"


const Category = ({category, banner}) => {

console.log(category);
const [new_collection, setNew_Collection] = useState([]);

useEffect(() => {
  fetch('http://localhost:3000/collections/:' + category)
    .then((resp) => resp.json())
    .then((data) => setNew_Collection(data))
    .catch((error) => console.error('Error fetching data:', error));
}, [category]);

console.log(new_collection);
console.log("wew");
return (
      <section className="">
        <div>
          <div>
            <img src={banner} alt=""  className=""/>
          </div>
          <div className="f">
            <h5><span className="">Products</span></h5>
            {/* <div className="flexBetween max-sm:p-4 gap-x-4 px-8 py-3 rounded-5xl ring-1 ring-slate-900/5">sort by <MdOutlineKeyboardArrowDown /></div> */}
          </div>
          {/* container} */}
          <div className="">
            {new_collection.map((item) => {
              if(category === item.category){
                return <Item 
                  key={item.id} 
                  id={item.id} 
                  image={item.image} 
                  name={item.name} 
                  new_price={item.new_price} 
                  old_price={item.old_price}
                  />
              }
            })}
          </div>
          <div className="">
            {/* <button className="btn_dark_rounded">Load More</button> */}
          </div>
        </div>
      </section>
    )
}

export default Category

// import { useEffect, useState } from "react"
// import Item from "./Item"
// // import latest from "../assets/latest"
// const NewCollections = () => {
//     const [new_collection, setNew_Collection] = useState([])

//     useEffect(() => {
//         fetch('http://localhost:3000/newcollections')
//         .then((resp) => resp.json()).then((data) => setNew_Collection(data))
//     },[])

//   return (
//     <section className="bg-primary">
//         <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
//             <h3 className="h3 text-center">Latest products</h3>
//             <hr className="h=[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16"/>
//             {/* contrainer */}
//             <div className="grid grid-cols-1 xs:grid-cols-2 md:gtid-cols-3 xl:grid-cols-4 gap-6">
//                 {new_collection.map((item) =>(
//                     <Item 
//                         key={item.id} 
//                         id={item.id} 
//                         image={item.image} 
//                         name={item.name} 
//                         new_price={item.new_price} 
//                         old_price={item.old_price}
//                     />
//                 ))}
//             </div>
//         </div>
//     </section>
//   )
// }

// export default NewCollections



// import { MdOutlineKeyboardArrowDown } from "react-icons/md"
// import Item from "../components/Item"
// import { useContext } from "react"
// import { ShopContext } from "../Context/ShopContext"


// const Category = ({category, banner}) => {

//   const {all_products} = useContext(ShopContext)

//   return (
//     <section className="max_padd_container py-12 xl:py-28">
//       <div>
//         <div>
//           <img src={banner} alt=""  className="block my-7 mx-auto"/>
//         </div>
//         <div className="flexBetween my-8 mx-2">
//           <h5><span className="font-bold">showing 1-22</span>out of 36 products</h5>
//           <div className="flexBetween max-sm:p-4 gap-x-4 px-8 py-3 rounded-5xl ring-1 ring-slate-900/5">sort by <MdOutlineKeyboardArrowDown /></div>
//         </div>
//         {/* container} */}
//         <div className="grid grid-cols-1 xs:grid-cols-2 md:gtid-cols-3 xl:grid-cols-4 gap-6">
//           {all_products.map((item) => {
//             if(category === item.category){
//               return <Item 
//                 key={item.id} 
//                 id={item.id} 
//                 image={item.image} 
//                 name={item.name} 
//                 new_price={item.new_price} 
//                 old_price={item.old_price}
//                 />
//             }
//           })}
//         </div>
//         <div className="mt-16 text-center">
//           <button className="btn_dark_rounded">Load More</button>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Category