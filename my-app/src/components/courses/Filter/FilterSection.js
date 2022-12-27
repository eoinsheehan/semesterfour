import { useEffect, useState } from 'react';
import FilterOption from './FilterOption'

const FilterSection = (props) =>{

    const [filterOptions,setFilterOptions]= useState()

    useEffect(()=>{
        const semesterOptions = ["Autumn","Spring"]
        const creditOptions = ["5","7.5","10"]
        if(props.title==="Theme"){
            console.log("themes",props.themes);
            setFilterOptions(props.themes.map(theme => <FilterOption key={`${theme}_filter`}content={theme}></FilterOption>))}
        else if(props.title==="Credits"){
            setFilterOptions(creditOptions.map(creditOption => <FilterOption key={`${creditOption}_filter`} content ={creditOption}></FilterOption>))
        }
        else if(props.title==="Semester"){
            setFilterOptions(semesterOptions.map(semester => <FilterOption key={`${semester}_filter`} content ={semester}></FilterOption>))
        }
        else{
            <p> nada</p>
        }
    },[props.courseData,props.title,props.themes])

    return(

        <div>
        <div>
        <h5 className='text-gray-100'>{props.title}</h5>
        </div>
        <div className='bg-gray-700 rounded'>
        {filterOptions}
        </div>
        </div>



    )
}

export default FilterSection;

    