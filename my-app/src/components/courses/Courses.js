import CourseHeading from './CourseHeading'
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import './Courses.css'
import { Checkbox, FormControlLabel, Typography, Box } from '@mui/material'

const Courses = (props) => {

    const [isChecked,setIsChecked] = useState(true);

    const handleChange = ()=> {
        setIsChecked(!isChecked)
    }

    let content;

    if(props.testing.length >0){
    content = props.testing.map(data => <CourseHeading key ={data.theme}onSelect={props.onSelect} title = {data.theme} courses= {data.courses} semester = {isChecked} selection = {props.selection}/>
    )
    }

    return (
        <Box>
            <Box sx={{display:"flex", alignItems:"center",justifyContent:"space-around", paddingBottom:"1rem"}}>
            <FormControlLabel
          value="spring"
          label={<Typography variant="h6" color="textSecondary">Include Spring</Typography>}
          labelPlacement="start"
          control={<Checkbox onChange = {handleChange} checked={isChecked} name="spring"
        />}
        />
        <input type="text" id="searchbar"></input>
        </Box>

        {content}
  
        </Box>
    )
}

export default Courses