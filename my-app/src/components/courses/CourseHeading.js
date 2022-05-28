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

    // iterable used in map will contain all module details acessed via slicing
    let helpme = props.courses.map(course =><CourseList onSelect={props.onSelect} title ={course.title} coursesSelected={props.coursesSelected} details = {course.details}/> );

    return (
        <div>
        <div className="course-heading">{props.title}
        <button onClick={toggleCourses}>Expand</button>
        </div>
        {showContent ? helpme : null}
        </div>
    )
}
export default CourseHeading