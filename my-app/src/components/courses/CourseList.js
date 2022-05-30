import './CourseList.css'
import CourseDetails from './CourseDetails'
import { useState } from 'react';

const CourseList = (props) => {

    const [showContent,setShowContent] = useState(false)

    // iterable used in map will contain all module details acessed via slicing
    let helpme = props.details.map(detail =><CourseDetails name = {Object.keys(detail)} value = {Object.values(detail)}/> );

    const toggleCourses = () => {
        setShowContent(!showContent);
    }

    const selectCourse = () =>{
        props.onSelect({"title":props.title,"credits":Object.values(props.details[0])[0]})
        console.log("testing",Object.values(props.details[0]))
    }

    return(
        <div>
            <div className='courseItem'>
                {props.title}
                <div>
                <button onClick = {toggleCourses}>Expand</button>
                <button onClick={selectCourse}>Select Course</button>
                </div>
            </div>
        {showContent ? helpme : null}
        </div>
    )
}

export default CourseList