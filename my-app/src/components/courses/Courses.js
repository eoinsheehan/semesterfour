import CourseHeading from './CourseHeading'
import { useState } from 'react'
import './Courses.css'
import { Box } from '@mui/material'
import Filter from './Filter/Filter'

const Courses = (props) => {

    const [isChecked,setIsChecked] = useState(true);


    const handleChange = ()=> {
        setIsChecked(!isChecked)
    }

    let content;
    let courseThemes;

    if(props.courseData.length >0){
    courseThemes = props.courseData.map(data=>data.theme)
    content = props.courseData.map(data => <CourseHeading key ={data.theme} onSelect={props.onSelect} title = {data.theme} courses= {data.courses} semester = {isChecked} selection = {props.selection} onRemove = {props.onRemove}/>
    )
    }

    return (
        <Box>
            <Filter handleChange={handleChange} isChecked={isChecked} themes={courseThemes} lecturers={props.lecturers} courseData={props.courseData}/>
        {content}
  
        </Box>
    )
}

export default Courses