import { useState, useEffect } from "react"
import POPULAR from "../assets/popular"
import Item from "./Item"

const Popular = () => {
    // const [newpopularProduct, setNewPopularProduct] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:3000/popularproducts')
    //     .then((resp) => resp.json()).then((data) => setNewPopularProduct(data))
    // },[])
  //   const [newCollection, setNewCollection] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3000/newcollectionsAllRandom')
  //     .then((resp) => resp.json())
  //     .then((data) => setNewCollection(data))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  // return (
  //   <section className="bg-primary">
  //     <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
  //       <h3 className="h3 text-center">Popular products random</h3>
  //       <hr className="h=[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16" />
  //       <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
  //         {newCollection.map((item) => (
  //           <Item
  //             key={item.id}
  //             id={item.id}
  //             image={item.image}
  //             name={item.name}
  //             new_price={item.new_price}
  //             old_price={item.old_price}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
}

export default Popular