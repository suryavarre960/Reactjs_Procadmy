import React, { useState } from "react";
import ProductForm from "./ProductForm";

function CreateProduct(props){
    let[showForm, updateShowForm] = useState(false);

    function onCreateProduct(product){
     props.createP(product);
    }

    function updateShowFormFun(){
        updateShowForm(true);
    }

    function updateHideForm(){
        updateShowForm(false);
    }

  return(
    <div className="row pfrom">
        <div className="col-lg-8 mx-auto">
        {!showForm && <button className='btn btn-primary' onClick={updateShowFormFun}>Add Product</button>}
        {showForm && <ProductForm onCreate={onCreateProduct} onHideForm={updateHideForm}></ProductForm>}
        </div>
    </div>
  );
}

export default CreateProduct;