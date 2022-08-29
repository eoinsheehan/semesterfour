import { Box} from '@mui/material'
import { useEffect, useState } from 'react';
import FilterOption from './FilterOption'




const FilterSection = (props) =>{

    const [filterOptions,setFilterOptions]= useState()

    useEffect(()=>{
        const semesterOptions = ["Autumn","Spring"]
        const creditOptions = ["5","7.5","10"]
        let lecturers = [...new Set(props.courseData.map(theme =>theme.courses.map(course =>course.details[2].Lecturer)).flat())]
        if(props.title==="Theme"){
            setFilterOptions(props.themes.map(theme => <FilterOption key={`${theme}_filter`}content={theme}></FilterOption>))}
        else if(props.title==="Credits"){
            setFilterOptions(creditOptions.map(creditOption => <FilterOption key={`${creditOption}_filter`} content ={creditOption}></FilterOption>))
        }
        else if(props.title==="Lecturer"){
            setFilterOptions(lecturers.map(lecturer => <FilterOption key={`${lecturer}_filter`} content ={lecturer}></FilterOption>))
        }
        else if(props.title==="Semester"){
            setFilterOptions(semesterOptions.map(semester => <FilterOption key={`${semester}_filter`} content ={semester}></FilterOption>))
        }
        else{
            <p> nada</p>
        }
    },[props.courseData,props.title,props.themes])



    

  
    return(

        <Box sx={{maxHeight:"200px",display:"flex",flexDirection:"column",marginLeft:"2rem"}}>
        <Box sx={{border:"1px solid black", backgroundColor:"orange",width:"40%"}}>
        <h5>{props.title}</h5>
        </Box>
        <Box sx={{overflowY:"auto"}}>
        {filterOptions}
        </Box>
        </Box>



    )
}

export default FilterSection;

    