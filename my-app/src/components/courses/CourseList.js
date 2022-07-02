import './CourseList.css'
import CourseDetails from './CourseDetails'
import { useState } from 'react';
import { Accordion, AccordionDetails, IconButton, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaPlus, FaMinusCircle } from "react-icons/fa";

const CourseList = (props) => {

    const [showContent,setShowContent] = useState(false);
    const [selected] = useState();

    // iterable used in map will contain all module details acessed via slicing
    let helpme = props.details.map(detail =><CourseDetails key={Math.random()} name = {Object.keys(detail)} value = {Object.values(detail)}/> );

    const toggleCourses = () => {
        setShowContent(!showContent);
    }

    const selectCourse = () =>{
        props.onSelect({"title":props.title,"credits":Object.values(props.details[0])[0]})
        console.log("coursename",props.title)
    }

    return(
            <Accordion expanded={showContent} sx={{backgroundColor: "#D3D3D3"}}>
                <Box
        sx={{display:"flex",
        justifyContent:"space-between",
        padding:"0.5rem"}}
        >       <Box>
                {props.title}
                </Box>
                <Box>
                <IconButton aria-label="delete" size="small">
                {selected ?<FaMinusCircle/>:<FaPlus onClick={selectCourse}/>}
            </IconButton>
            <IconButton>
            <ExpandMoreIcon onClick={toggleCourses} />
            </IconButton>
            </Box>
                </Box>
                {/* <button onClick={selectCourse}>Select Course</button> */}
            <AccordionDetails>
        {showContent ? helpme : null}
        </AccordionDetails>
        </Accordion>
    )
}

export default CourseList