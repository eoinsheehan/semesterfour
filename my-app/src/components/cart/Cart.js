import Card from '../UI/Card'

const Cart = (props) => {

    return(
        <Card>
            <h2>Modules Selected</h2>
            <div>{props.selection}</div>
        </Card>
    )
}

export default Cart