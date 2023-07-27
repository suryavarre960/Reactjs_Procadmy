function btnClick(){
    console.log('Btn clicked')
}
function Button(props){
  return(<button className="btn btn-primary" onClick={props.increClick} disabled={props.isDisable || props.isDisableByStoke}>{props.children}</button>)
}
export default Button;