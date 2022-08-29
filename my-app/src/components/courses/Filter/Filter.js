import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import {Box, IconButton, Button } from '@mui/material'
import { useState } from 'react';
import FilterSection from './FilterSection';

const Filter = (props) =>{

    const [showFilters,setShowFilters] = useState(false)
    
    const filterSections = ["Theme", "Credits", "Lecturer", "Semester"]

    const handleChange = ()=> {
        props.handleChange()
    }

    const toggleFilters = ()=>{
        setShowFilters(!showFilters)
    }

    let filterContent = <Box sx={{display:"flex",justifyContent:"space-between",backgroundColor:"white",width:"100%", borderRadius:"12px",flexDirection:"column"}}><Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",marginTop:"2rem"}}>{filterSections.map(section => <FilterSection key={section} title={section} themes={props.themes} lecturers={props.lecturers} courseData={props.courseData}></FilterSection>)}</Box>
    <Box sx={{display:"flex",justifyContent:"flex-end"}}>
        <Button variant="contained" size="small" sx={{margin:"1rem 0.5rem"}}>Apply</Button>
        <Button variant="contained" size="small" color="error" sx={{margin:"1rem 0.5rem"}}>Reset</Button>
    </Box>
    </Box>

    return(
        <Box sx={{display:"flex", alignItems:"flex-start",justifyContent:"space-around", paddingBottom:"1rem",flexDirection:"column",transition:"height 2s linear 1s"}}>
        <Box sx={{display:"flex"}}>
        <IconButton onClick={toggleFilters}>
        <FilterAltRoundedIcon/>
        </IconButton>
        <input type="text" id="searchbar"></input>
        </Box>
        {showFilters?filterContent:null}
    </Box>
    )
}

export default Filter;