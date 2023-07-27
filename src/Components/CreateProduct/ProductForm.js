import React, { useState } from "react";

function ProductForm(props){

     //handle multiple feilds in multiple states
    let [pName, updateName] = useState('');
    let [price, updateprice] = useState('');
    let [desc, updatedesc] = useState('');
    let [isvalid, updateIsValid] = useState(false);
    let [imgUrl, updateImgUrl] = useState('');

    //handle multiple feilds in single state
      //    let [userInpus, updateUserInputs] = useState({
      //         pName: '',
      //         price: '',
      //         desc : '',
      //         isvalid: '',
      //         imgUrl: ''
      //     });

    function nameInputHandler(event){
         //handle multiple feilds in multiple states
        updateName(event.target.value);

         //handle multiple feilds in single state method -1(not recomended)
             // updateUserInputs({
             //     ...userInpus,
             //     pName: event.target.value
             // })
        //handle multiple feilds in single state method -2(recomended)
              // updateUserInputs((prevState)=>{
              //   return {...prevState, pName:event.target.value}
              // })
    }
 
    function priceInputHandler(event){
        updateprice(event.target.value);

        // updateUserInputs({
        //     ...userInpus,
        //     price: event.target.value
        // })
    }
    
    function descrptionInputHandler(event){
        updatedesc(event.target.value);
        // updateUserInputs({
        //     ...userInpus,
        //     desc: event.target.value
        // })
    }


    function isavailInputHandler(event){
        updateIsValid(event.target.checked);
        // updateUserInputs({
        //     ...userInpus,
        //     isvalid: event.target.value
        // })
    }

    function imgInputHandler(event){
        updateImgUrl(event.target.value);
        // updateUserInputs({
        //     ...userInpus,
        //     imgUrl: event.target.value
        // })
    }
    function createProductHandler(event){
      event.preventDefault();
      let Product = {
        pID: 1, 
        pName: pName, 
        desc: desc,
        isAvailable: Boolean(isvalid),
        image: imgUrl ,
        price: Number(price) 
      }

      props.onCreate(Product);
      props.onHideForm();

      updateName('');
      updatedesc('');
      updateprice('');
      updateIsValid(false);
      updateImgUrl('')
    }

   return(
    <form className="row g-3" onSubmit={createProductHandler}>
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Product Name"
                    value={pName}
                    onChange={nameInputHandler} />
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number" 
                    min="0" step="1" 
                    className="form-control" 
                    id="price" 
                    placeholder="Product Price"
                    value={price}
                    onChange={priceInputHandler} />
        </div>

        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Product Description" 
                    value={desc}
                    onChange={descrptionInputHandler} />
        </div>

        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="isAvailable"
            onChange={isavailInputHandler} checked={isvalid}/>
            <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
        </div>

        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" className="form-control" id="select-image" onChange={imgInputHandler} 
            value={imgUrl}/>
        </div>
        

        <button type="submit" className="btn btn-primary">Add Product</button>
        <button type="button" className="btn btn-primary" onClick={props.onHideForm}>Cancel</button>
    </form>
   );
}
export default ProductForm;