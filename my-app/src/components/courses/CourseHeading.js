import './CourseHeading.css'
import './CourseList'
import CourseList from './CourseList'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react'

const CourseHeading = (props) =>{

    const [showContent,setShowContent] = useState(false)

    const toggleCourses = () => {
        setShowContent(!showContent);
    }
    
    // filter this by theme before applying map
    let semesterFilter = props.courses

    if (props.semester===false){
        semesterFilter = semesterFilter.filter(course => Object.values(course.details[1])[0].includes("Autumn"));
    }

    // iterable used in map will contain all module details acessed via slicing
    let helpme = semesterFilter.map(course =><CourseList id= {course.title}onSelect={props.onSelect} title ={course.title} coursesSelected={props.coursesSelected} details = {course.details}/> );

    return (
        <Accordion>
        <AccordionSummary onClick={toggleCourses}  
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        {props.title}
        </AccordionSummary>
        <AccordionDetails>
        
        {showContent ? helpme : null}
        
        </AccordionDetails>
        </Accordion>
    )
}
export default CourseHeading