import Card from '../UI/Card'
import CartItem from './CartItem'
import './Cart.css'

const Cart = (props) => {

    let filteredCourses;

    let creditCount;

    if(props.testing.length >0){
    filteredCourses = props.testing.filter((course) => {
        return course['theme'] ==="Software Engineering"});
        console.log("filtered",filteredCourses)
    }

    let initialValue = 0;

    if(props.selection.length>0){
        let sum = props.selection.reduce(
            (previousValue, currentValue) => previousValue + currentValue.credits,
            initialValue
        )
        console.log("help",typeof sum);
        creditCount = "Number of credits: " + sum
    }

    let cartContents = props.selection.map(course => 
        <CartItem onRemove = {props.onRemove} title = {course.title} credits = {course.credits}/>)
    return(
        <Card className="cart">
            <h2>Modules Choices</h2>
            {cartContents}
            {creditCount}
        </Card>
    )
}

export default Cart