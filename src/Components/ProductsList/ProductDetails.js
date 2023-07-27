import { useState } from "react";
import Button from "./Buttons";

let style = {
    padding: '0px 20px'
}

function ProductDetails(dataC){
    let badgeClass = 'badge badge-pad-left ';
    badgeClass += dataC.isAvailable? 'bg-success' : 'bg-danger';
    //let productCount =0;

    let[productCount, updateCount] = useState(0);
function displayFormattedCount(){
    return productCount >0 ? productCount : 'Zero';
}

let onIncrementCount = function(){
    updateCount(++productCount);
}
let onDecrementCount = function(){
    updateCount(--productCount);
}

  return (<div className="d-flex align-items-center justify-content-start mt-1">
  <h6 className="font-weight-bold my-2">${dataC.price}</h6>
  <Button increClick={onDecrementCount} isDisable={productCount == 0}>-</Button>
  <span style={style}>{displayFormattedCount()}</span>
  <Button increClick={onIncrementCount} isDisableByStoke={productCount == dataC.maxS}>+</Button>
  <span className={badgeClass}>{dataC.isAvailable ? 'Avilable' : 'Unavialble'}</span>
</div>

  )
}

export default ProductDetails;