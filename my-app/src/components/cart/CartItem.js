const CartItem = (props) => {

    const removeItem = () =>{
        props.onRemove(props.title)
    }
    return(
        <div>
            {props.title} - {props.credits}
            <button onClick={removeItem}>Remove</button>
        </div>
    )
}
export default CartItem