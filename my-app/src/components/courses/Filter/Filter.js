import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import { useState } from 'react';
import FilterSection from './FilterSection';

const Filter = (props) =>{

    const [showFilters,setShowFilters] = useState(false)
    
    const filterSections = ["Theme", "Credits", "Semester"]

    const handleChange = ()=> {
        props.handleChange()
    }

    const toggleFilters = ()=>{
        setShowFilters(!showFilters)
    }

    console.log("these are the props",props);

    let filterContent = filterSections.map(section => 
        <FilterSection key={section} title={section} themes={props.themes} lecturers={props.lecturers} courseData={props.courseData}></FilterSection>
    )

    return(
        <div className='bg-pink-500'>
        <div>
        <button onClick={toggleFilters} className='bg-green-500'>
        <FilterAltRoundedIcon/>
        </button>
        </div>
        {showFilters?<div className='flex justify-between'>{filterContent}</div>:null}
    </div>
    )
}

export default Filter;