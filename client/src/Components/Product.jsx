import product from "./Constants"
import ProductCard from "./ProductCart"

const Product = () => {
  return (
    <>
     {product.map((item)=>{
    return <ProductCard ket={item.id} item={item}/>
   })}
   </>
  
  )
}

export default Product