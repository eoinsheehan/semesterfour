import CourseHeading from './CourseHeading'
import { useState} from 'react'
import './Courses.css'
import { Box } from '@mui/material'

const Courses = (props) => {

    const [isChecked] = useState(true);
    let content;

    if(props.courseData.length >0){
    content = props.courseData.map(data => <CourseHeading key ={data.theme} onSelect={props.onSelect} title = {data.theme} courses= {data.courses} semester = {isChecked} selection = {props.selection} onRemove = {props.onRemove}/>
    )
    }

    return (
        <Box>
                   {content}
  
        </Box>
    )
}

export default Courses