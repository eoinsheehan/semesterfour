import CourseHeading from './CourseHeading'
import { useState } from 'react'
import './Courses.css'
import { Checkbox, FormControlLabel, Typography } from '@mui/material'

const Courses = (props) => {

    const [isChecked,setIsChecked] = useState(true);

    const handleChange = ()=> {
        setIsChecked(!isChecked)
    }

    let content;

    if(props.testing.length >0){
    content = props.testing.map(data => <CourseHeading key ={data.theme} onSelect={props.onSelect} title = {data.theme} courses= {data.courses} semester = {isChecked} selection = {props.selection}/>
    )
    }

    return (
        <div>
            <FormControlLabel
          value="spring"
          label={<Typography variant="h5" color="textSecondary">Include Spring</Typography>}
          labelPlacement="start"
          control={<Checkbox onChange = {handleChange} checked={isChecked} name="spring"
        />}
        />

        {content}
  
        </div>
    )
}

export default Courses