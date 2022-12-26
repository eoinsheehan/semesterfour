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
    let sum=0;
    if(props.selection.length>0){
        sum = props.selection.reduce(
            (previousValue, currentValue) => previousValue + currentValue.credits,
            initialValue
        )
        creditCount = "Number of credits: " + sum
    }

    console.log("credit count",sum/30);
    let dynamicQuantity = (sum/30)*100+"%";

    console.log("dynamic",dynamicQuantity);

    let cartContents = props.selection.map(course => 
        <CartItem onRemove = {props.onRemove} title = {course.title} credits = {course.credits}/>)
    return(
        <div className='text-gray-100 px-8 py-6 top-1 sticky flex flex-col'>
            <div><p className='text-5xl'>Module Selection</p>
            {cartContents}
            <p className="text-2xl font-bold">
            {creditCount}
            </p>
            </div>
            <div className='bg-white h-4 w-full border-2 border-black rounded-full'>
                <div style={{width: dynamicQuantity}} className={`bg-green-500 h-3 rounded-full max-w-full`}></div>
            </div>
        </div>
    )
}

export default Cart