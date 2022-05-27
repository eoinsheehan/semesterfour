import './CourseList.css'
import CourseDetails from './CourseDetails'
import { useState } from 'react';

const CourseList = (props) => {

    const [showContent,setShowContent] = useState(false)

    // iterable used in map will contain all module details acessed via slicing
    let helpme = props.title.map(t =><CourseDetails credits = {props.credits}/> );

    const toggleCourses = () => {
        setShowContent(!showContent);
    }

    const selectCourse = () =>{
        props.onSelect(props.course)
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