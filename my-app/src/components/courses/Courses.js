import CourseHeading from './CourseHeading'
import { useState} from 'react'
import './Courses.css'
import { Box, FormControlLabel,Typography,Checkbox } from '@mui/material'

const Courses = (props) => {

    const [isChecked,setIsChecked] = useState(true);
    let content;

    const handleChange = ()=>{
        setIsChecked(!isChecked)
    }
    if(props.courseData.length >0){
    content = props.courseData.map(data => <CourseHeading key ={data.theme} onSelect={props.onSelect} title = {data.theme} courses= {data.courses} semester = {isChecked} selection = {props.selection}/>

    )
    }

    return (
        <Box>
            <FormControlLabel
          value="spring"
          label={<Typography variant="h5" >Include Spring</Typography>}
          labelPlacement="start"
          control={<Checkbox color="default" onChange = {handleChange} checked={isChecked} name="spring" 
        />}
        sx={{paddingBottom:"2rem"}}
        />

        {content}
  
        </Box>
    )
}

export default Courses