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

    let helpme = props.courses.map(course =><CourseList course ={course}/> );

    return (
        <div className="course-heading">{props.title}
        <button onClick={toggleCourses}>Expand</button>
        {showContent ? helpme : null}
        </div>
    )
}
export default CourseHeading