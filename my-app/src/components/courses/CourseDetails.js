import './CourseDetails.css'

const CourseDetails = (props) => {

    return <div className="course-details">{props.name}: {props.value}</div>

}

export default CourseDetails;