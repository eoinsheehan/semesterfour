const CartItem = (props) => {

    const removeItem = () =>{
        props.onRemove(props.selection)
    }
    return(
        <div>
            {props.title} - {props.credits}
            <button onClick={removeItem}>Remove</button>
        </div>
    )
}
export default CartItem