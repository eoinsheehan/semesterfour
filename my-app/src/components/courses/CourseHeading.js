import './CourseHeading.css'
import './CourseList'
import CourseList from './CourseList'
import { useState } from 'react'

const CourseHeading = (props) =>{

    const [showContent,setShowContent] = useState(false)

    const toggleCourses = () => {
        setShowContent(!showContent);
    }
    
    // filter this by theme before applying map
    let semesterFilter = props.courses

    if(props.semester["autumn"]===true && props.semester["spring"]===false){
        semesterFilter = semesterFilter.filter(course => Object.values(course.details[1])[0].includes("Autumn"));
    }
    else if (props.semester["autumn"]===false && props.semester["spring"]===true){
        semesterFilter = semesterFilter.filter(course => Object.values(course.details[1])[0].includes("Spring"));
    }
    else{
        console.log("need to error handle for no semester selected")
    }


    // iterable used in map will contain all module details acessed via slicing
    let helpme = semesterFilter.map(course =><CourseList id= {course.title} className="accordion-collapse collapse" onSelect={props.onSelect} title ={course.title} coursesSelected={props.coursesSelected} details = {course.details}/> );

    return (

        <div className="accordion-header">
        {/* <div className="course-heading">{props.title}
        <button >Expand</button> */}
        <button onClick={toggleCourses}  className={showContent ? "accordion-button collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        {props.title}
      </button>
        {/* </div> */}
        {showContent ? helpme : null}
        </div>

    )
}
export default CourseHeading