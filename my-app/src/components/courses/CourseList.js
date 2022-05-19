import './CourseList.css'

const CourseList = (props) => {

    const selectCourse = () =>{
        props.onSelect(props.course)
    }
    return(
        <div>
        {props.course}
        <button onClick={selectCourse}>Select Course</button>
        </div>
    )
}

export default CourseList