import './CourseHeading.css'
import './CourseList'
import CourseList from './CourseList'
import { useState } from 'react'

const CourseHeading = (props) =>{

    const [showContent,setShowContent] = useState(false)

    const toggleCourses = () => {
        setShowContent(!showContent);
        console.log('Props',props.courses)
    }

    // filter this by theme before applying map

    // iterable used in map will contain all module details acessed via slicing
    let helpme = props.courses.map(course =><CourseList onSelect={props.onSelect} course ={course.title} coursesSelected={props.coursesSelected}/> );

    return (
        <div className="course-heading">{props.title}
        <button onClick={toggleCourses}>Expand</button>
        {showContent ? helpme : null}
        </div>
    )
}
export default CourseHeading