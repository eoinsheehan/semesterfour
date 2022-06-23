import CourseHeading from './CourseHeading'
import Card from '../UI/Card'
import { useState } from 'react'
import './Courses.css'
import { Checkbox, FormControlLabel } from '@mui/material'

const Courses = (props) => {

    const [isChecked,setIsChecked] = useState(true);

    const handleChange = ()=> {
        setIsChecked(!isChecked)
    }

    let content;

    if(props.testing.length >0){
    content = props.testing.map(data => <CourseHeading onSelect={props.onSelect} title = {data.theme} courses= {data.courses} semester = {isChecked}/>
    )
    }

    return (
        <div>
            <FormControlLabel
          value="spring"
          label="Include Spring: "
          labelPlacement="start"
          control={<Checkbox onChange = {handleChange} checked={isChecked} name="spring"/>}
        />
        <Card className ="courses">
        {content}
        </Card>
        </div>
    )
}

export default Courses