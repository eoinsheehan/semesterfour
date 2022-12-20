import Card from '../UI/Card'
import CartItem from './CartItem'
import { useEffect, useRef } from 'react'

const Cart = (props) => {

    let filteredCourses;
    let creditCount;
    let initialValue = 0;

    const isMounted = useRef(false);

        useEffect(() => {
          if (isMounted.current) {
            console.log("never again")
          } else {
            console.log("do something first time only")
            isMounted.current = true;
          }
  },[]);

    if(props.testing.length >0){
    filteredCourses = props.testing.filter((course) => {
        return course['theme'] ==="Software Engineering"});
        console.log("filtered",filteredCourses)
    }

    if(props.selection.length>0){
        let sum = props.selection.reduce(
            (previousValue, currentValue) => previousValue + currentValue.credits,
            initialValue
        )
        creditCount = "Number of credits: " + sum
    }

    let cartContents = props.selection.map(course => 
        <CartItem onRemove = {props.onRemove} title = {course.title} credits = {course.credits}/>)
    return(
        <div className='text-black px-8 py-6'>
            <p className='text-5xl'>Module Selection</p>
            {cartContents}
            <p className="text-2xl font-bold">
            {creditCount}
            </p>
        </div>
    )
}

export default Cart