import CourseHeading from './CourseHeading'
import { useState} from 'react'

const Courses = (props) => {

    const [isChecked] = useState(true);
    let content;

    if(props.courseData.length >0){
    content = props.courseData.map(data => <CourseHeading key ={data.theme} onSelect={props.onSelect} title = {data.theme} courses= {data.courses} semester = {isChecked} selection = {props.selection} onRemove = {props.onRemove}/>
    )
    }

    return (
        <div id="courses" className="border-2">
            <p className="text-left text-blue-900">{content}</p>
        </div>
    )
}

export default Courses