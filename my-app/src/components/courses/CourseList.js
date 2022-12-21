import CourseDetails from './CourseDetails'
import { useEffect, useState } from 'react';
import { FaPlus, FaMinusCircle } from "react-icons/fa";

const CourseList = (props) => {

    const [showContent,setShowContent] = useState(false);
    const [selected,setSelected] = useState(false);

    // iterable used in map will contain all module details acessed via slicing


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
            <div className='bg-gray-300 text-black space-y-4'expanded={showContent}>
                <div className='flex justify-between items-center'>
                <div className='flex space-x-4 items-center'>
                <p>{props.title}</p>
                <div>
                {selected ?<div aria-label="delete" size="small"  onClick={removeCourse}><FaMinusCircle/></div>:<div aria-label="delete" size="small"  onClick={selectCourse}><FaPlus/></div>}
                </div>
                </div>
            <div>
            <svg className={showContent ? "w-6 h-6 rotate-180 transition ease-in-out duration-500": "w-6 h-6 transition ease-in-out duration-500"}onClick={toggleCourses}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
            </div>
                </div>
            <div className={`${showContent ? "visible":"collapse"}`}>
            {props.details.map(detail =><CourseDetails key={`${props.title}_details`} name = {Object.keys(detail)} value = {Object.values(detail)}/> )}
        </div>
        </div>
    )
}

export default CourseList