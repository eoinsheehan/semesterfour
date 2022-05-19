const CartItem = (props) => {

    const removeItem = () =>{
        props.onRemove(props.selection)
    }
    return(
        <div>
            {props.selection}
            <button onClick={removeItem}>Remove</button>
        </div>
    )
}
export default CartItem