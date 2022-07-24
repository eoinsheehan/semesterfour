import './CourseList.css'
import CourseDetails from './CourseDetails'
import { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, IconButton, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaPlus, FaMinusCircle } from "react-icons/fa";

const CourseList = (props) => {

    const [showContent,setShowContent] = useState(false);
    const [selected,setSelected] = useState(false);

    // iterable used in map will contain all module details acessed via slicing
    let helpme = props.details.map(detail =><CourseDetails key={`${props.title}_details`} name = {Object.keys(detail)} value = {Object.values(detail)}/> );

    const toggleCourses = () => {
        setShowContent(!showContent);
    }

    useEffect(()=>{
        // if course in props.selection 
        let selectionCheck = props.selection.filter((course)=>course.title=== props.title);
        if(selectionCheck.length>0){
            setSelected(true)
        }
        else{
            setSelected(false)
        }

    },[props.selection,props.title])

    const selectCourse = () =>{
        props.onSelect({"title":props.title,"credits":Object.values(props.details[0])[0]})
        setSelected(!selected)
    
    }

    const removeCourse = () =>{
        props.onRemove(props.title)
        setSelected(!selected)
        

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
                {selected ?<IconButton aria-label="delete" size="small"  onClick={removeCourse}><FaMinusCircle/></IconButton>:<IconButton aria-label="delete" size="small"  onClick={selectCourse}><FaPlus/></IconButton>}
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