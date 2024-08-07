import upload_area from '../assets/upload_area.svg'
import {MdAdd} from 'react-icons/md'
import { useState } from 'react'

const AddProduct = () => {
    const [image, setImage] = useState(false)
    
    const [productDetails,setProductDetails] = useState({
        name: "",
        image: "",
        category: "",
        new_price: "",
        old_price: "",
        desc: "",
    })

    const imageHanlder = (e) => {
        setImage(e.target.files[0])
    }

    const changeHandler = (e) => {
        setProductDetails({...productDetails, [e.target.name]:e.target.value})
    }

    const addProduct = async () => {
        console.log(productDetails)
        let responseData;
        let product = productDetails

        let formData = new FormData()
        formData.append('product', image)

        await fetch('http://localhost:3000/upload',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => {responseData = data})

        if(responseData.success){
            product.image = responseData.image_url
            console.log(product)
            await fetch('http://localhost:3000/addproduct',{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {
                data.success?alert("Product Added") : alert("Upload Failed")
            })
        }
    }

  return (
    <div className='p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7'>
        <div className='mb-3'>
            <h4 className='bold-18 pb-2 '>Name</h4>
        <input value={productDetails.name} onChange={changeHandler} placeholder=' Type Here' name="name" className='bg-primary outline-none w-full py-5 px-4 rounded-md' id=""></input>
        </div>

        <div className='mb-3'>
            <h4 className='bold-18 pb-2 '>Price</h4>
            <input value={productDetails.old_price} onChange={changeHandler} className='bg-primary outline-none w-full py-5 px-4 rounded-md' name='old_price' id="" placeholder='Type Here' />
        </div>

        <div className='mb-3'>
            <h4 className='bold-18 pb-2 '>Offer Price</h4>
            <input value={productDetails.new_price} onChange={changeHandler} className='bg-primary outline-none w-full py-5 px-4 rounded-md' type="text" name="new_price" id="" placeholder='Type Here' />
        </div>

        <div className='mb-3'>
            <h4 className='bold-18 pb-2 '>Product Description</h4>
            <input value={productDetails.desc} onChange={changeHandler} className='bg-primary outline-none w-full py-5 px-4 rounded-md' type="text" name="desc" id="" placeholder='Type Here' />
        </div>

        <div className='mb-3'>
            <h4 className='bold-18 pb-2 '>product includes</h4>
        <textarea value={productDetails.includes} onChange={changeHandler} placeholder=' Product Includes' name="includes" className='bg-primary outline-none w-full py-5 px-4 rounded-md' rows='6' id=""></textarea>
        </div>
        
        <div className='mb-3 flex items-center gap-x-4'>
            <h4 className='bold-18 pb-2'>Product Category</h4>
            <select value={productDetails.category} onChange={changeHandler} name="category" id="" className='bg-primary ring-1 ring-slate-900/20 medium-16 rounded-sm outline-none'>
                <option value="snipers">Snipers</option>
                <option value="shotguns">Shotguns</option>
                <option value="rifles">Rifles</option>
                <option value="pistols">Pistols</option>
                <option value="granadeLaunchers">Granade Launchers</option>
            </select>
        </div>

        <div>
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} alt="" className='w-20 rounded-sm inline-block cursor-pointer'/>
            </label>
            <input onChange={imageHanlder} type="file" name="image" id="file-input" hidden className='bg-primary max-w-80 w-full py-3 px-4' />
        </div>

        <button onClick={() => addProduct()} className='btn_dark_rounded mt-4 flexCenter gap-x-1'><MdAdd />Add Product</button>
    </div>
  )
}

export default AddProduct