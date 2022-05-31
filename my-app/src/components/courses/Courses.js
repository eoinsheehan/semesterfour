import CourseHeading from './CourseHeading'
import Card from '../UI/Card'
import { useState } from 'react'
import './Courses.css'

const Courses = (props) => {

    const [isChecked,setIsChecked] = useState({"autumn":true,"spring":true});

    const handleChange = (e)=> {
        setIsChecked({...isChecked,[e.target.name]:e.target.checked})
    }
    
    let content;

    if(props.testing.length >0){
    content = props.testing.map(data => <CourseHeading onSelect={props.onSelect} title = {data.theme} courses= {data.courses}/>
    )
    }

    return (
        <div>
        <input onChange = {handleChange} type="checkbox" id="vehicle1" name="autumn" value="autumn" checked={isChecked["autumn"]}/>
        <label for="autumn"> Autumn</label>
        <input onChange = {handleChange} type="checkbox" id="vehicle2" name="spring" value="spring" checked={isChecked["spring"]}/>
        <label for="spring"> Spring</label>
        <Card className ="courses">
        {content}
        </Card>
        </div>
    )
}

export default Courses