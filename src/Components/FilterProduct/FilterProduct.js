
let FilterProduct = (props)=>{
    function onFilterValueChange(event){
        props.filterSelected(event.target.value);
    }
    return(
        <div style={{marginLeft:80}}>
        <select name="isAvailable" onChange={onFilterValueChange}>
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
        </select>
       </div>
    );
}

export default FilterProduct;