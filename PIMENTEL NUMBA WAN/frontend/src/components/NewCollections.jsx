import { useEffect, useState } from "react"
import Item from "./Item"
// import latest from "../assets/latest"
const NewCollections = () => {
    const [new_collection, setNew_Collection] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/newcollections')
        .then((resp) => resp.json()).then((data) => setNew_Collection(data))
    },[])

  return (
    <section className="bg-primary">
        <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]">
            <h3 className="h3 text-center">Latest products</h3>
            <hr className="h=[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16"/>
            {/* contrainer */}
            <div className="grid grid-cols-1 xs:grid-cols-2 md:gtid-cols-3 xl:grid-cols-4 gap-6">
                {new_collection.map((item) =>(
                    <Item 
                        key={item.id} 
                        id={item.id} 
                        image={item.image} 
                        name={item.name} 
                        new_price={item.new_price} 
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default NewCollections