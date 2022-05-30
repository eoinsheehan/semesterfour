import Card from '../UI/Card'
import CartItem from './CartItem'
import './Cart.css'

const Cart = (props) => {

    let filteredCourses;

    if(props.testing.length >0){
    filteredCourses = props.testing.filter((course) => {
        return course['theme'] ==="Software Engineering"});
        console.log("filtered",filteredCourses)
    }

    let cartContents = props.selection.map(course => 
        <CartItem onRemove = {props.onRemove} title = {course.title} credits = {course.credits}/>)
    return(
        <Card className="cart">
            <h2>Modules Selected</h2>
            {cartContents}
        </Card>
    )
}

export default Cart