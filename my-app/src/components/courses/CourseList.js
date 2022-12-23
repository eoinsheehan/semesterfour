import CourseDetails from './CourseDetails'
import { useEffect, useState } from 'react';

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
            <div className='bg-gray-300 text-black flex flex-col w-100'expanded={showContent}>
                <div className='flex justify-between items-center'>
                <div className='flex space-x-4 items-center'>
                    <div>
                    {selected ?<div className='border-2 border-black bg-red-500 rounded p-1' onClick={removeCourse}><p>Remove Course</p></div>:<div className='border-2 border-black bg-green-500 rounded p-1'  onClick={selectCourse}><p>Select Course</p></div>}
                    </div>
                    <p>{props.title}</p>
                </div>
                <div type="button" className='flex items-center bg-blue-900 text-white border-2 border-black p-1 rounded' onClick={toggleCourses}>
                    {showContent?<p>Hide Details</p>:<p>Show Details</p>}
                </div>
                </div>
            <div className={showContent ? "overflow-hidden transition-[max-height] duration-500 m-h-1000":"overflow-hiddentransition-height duration-500 m-h-0"}>
            {props.details.map(detail =><CourseDetails key={`${props.title}_details`} name = {Object.keys(detail)} value = {Object.values(detail)}/> )}
            </div>
        </div>
    )
}

export default CourseList