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
        <div>
        <div className='my-4'>
        <button className='rounded flex p-3 justify-between text-gray-300 bg-midnight-100'onClick={toggleFilters}>
        <svg className='fill-gray-300 h-5 w-5 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>Show Filters</button>
        </div>
        {showFilters?<div className='flex justify-between bg-midnight-100'>{filterContent}</div>:null}
    </div>
    )
}

export default Filter;