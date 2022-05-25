import CourseHeading from './CourseHeading'
import Card from '../UI/Card'
import './Courses.css'

const Courses = (props) => {

    let content;

    if(props.testing.length >0){
    content = props.testing.map(data => <CourseHeading onSelect={props.onSelect} title = {data.theme} courses= {data.courses}/>
    )
    }

    return (<div className='courses'>
        <Card className ="dunno">
        {content}
        </Card>
    </div>)
}

export default Courses