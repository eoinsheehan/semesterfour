import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import { Checkbox, FormControlLabel, Typography, Box, IconButton } from '@mui/material'
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

    let filterContent = filterSections.map(section => <FilterSection key={section} title={section} themes={props.themes} lecturers={props.lecturers} courseData={props.courseData}></FilterSection>)

    return(
        <Box sx={{display:"flex", alignItems:"flex-start",justifyContent:"space-around", paddingBottom:"1rem",flexDirection:"column"}}>
        <Box sx={{display:"flex"}}>
        <IconButton onClick={toggleFilters}>
        <FilterAltRoundedIcon/>
        </IconButton>
        <input type="text" id="searchbar"></input>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between",backgroundColor:"white"}}>
        {showFilters?filterContent:null}
        </Box>
    </Box>
    )
}

export default Filter;