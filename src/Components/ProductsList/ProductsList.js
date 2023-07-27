import Products from "./Products";



function ProductsList(props){
     //console.log(props.toList);

   return( props.productList.length === 0 ? <h2>Products are not avialble</h2> :
    <ul className="list-group shadow">
        {
            props.productList.map((product)=>{
               return   <Products 
               key={product.pID}
               id={product.pID}
               name={product.pName}
               descrption={product.desc}
               isAvailable = {product.isAvailable}
               img={product.image}
               price={product.price}>
    </Products>
            })
        }
   </ul>


   )
}
export default ProductsList;