import Card from '../UI/Card'
import CartItem from './CartItem'
import { Box } from '@mui/material'
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
            <h2>Module Selection
            </h2>
            <Box sx={{padding:"1rem 0.25rem"}}>
            {cartContents}
            </Box>
            <h4>{creditCount}</h4>

        </Card>
    )
}

export default Cart