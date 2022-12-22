import './CourseList'
import CourseList from './CourseList'
import { useState } from 'react'

const CourseHeading = (props) =>{
    let testing;
    // let classesUsed = "w-6 h-6"
    const [showContent,setShowContent] = useState(false)
    const [classesUsed,setClassesUsed] = useState(false)


    const toggleCourses = () => {
        setClassesUsed(!classesUsed);
        setShowContent(!showContent);
    }
    
    // filter this by theme before applying map
    let semesterFilter = props.courses

    if (props.semester===false){
        semesterFilter = semesterFilter.filter(course => Object.values(course.details[1])[0].includes("Autumn"));
    }

    // let classesUsed ="w-6 h-6"
    // if(showContent){
    //     classesUsed += " rotate-180 transition ease-in-out duration-300"
    // }

    // iterable used in map will contain all module details acessed via slicing
    let helpme = semesterFilter.map(course =><CourseList  key= {course.Title} onSelect={props.onSelect} title ={course.Title}  details = {course.details} selection = {props.selection} onRemove={props.onRemove}/> );

    if(classesUsed){
        testing = "w-6 h-6 rotate-180 transition ease-in-out duration-300"
    }
    else{
        testing = "w-6 h-6 transition ease-in-out duration-300"
    }


    return (
        <div className="rounded border-2 bg-black text-white text-xl hover:cursor-pointer">
        <div className='font-bold flex flex-row justify-between px-8 py-6'onClick={toggleCourses} 
        >
        {props.title}
        <svg className={testing} 
            xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
        </div>
        <div className={showContent? "space-y-8 bg-gray-300 py-4" :null} >
        {showContent ? helpme : null}
        </div>
        </div>
    )
}
export default CourseHeading