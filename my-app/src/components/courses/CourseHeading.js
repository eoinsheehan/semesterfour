import './CourseHeading.css'
import './CourseList'
import CourseList from './CourseList'
import { useState } from 'react'

const CourseHeading = (props) =>{

    const [showContent,setShowContent] = useState(false)

    const toggleCourses = () => {
        setShowContent(!showContent);
    }

    return (
        <div className="course-heading">{props.title}
        <button onClick={toggleCourses}>Expand</button>
        {showContent ? <CourseList/>: null}
        </div>
    )
}
export default CourseHeading