import {TbArrowRight} from "react-icons/tb"

const ProductHd = (props) => {
    const {product} = props

    return (
      
      <div className="flex items-center flex-wrap gap-x-2 medium-16 my-4 capitalize">
        What's Included?   <TbArrowRight />
        {product.includes}
      </div>

      
    )
  
}

export default ProductHd