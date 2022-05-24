import Card from '../UI/Card'
import CartItem from './CartItem'

const Cart = (props) => {

    let cartContents = props.selection.map(course => 
        <CartItem onRemove = {props.onRemove}selection = {course}/>)
    return(
        <Card>
            <h2>Modules Selected</h2>
            {props.testing}
            {cartContents}
        </Card>
    )
}

export default Cart