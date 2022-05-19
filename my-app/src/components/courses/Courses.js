import CourseHeading from './CourseHeading'
import Card from '../UI/Card'
import './Courses.css'

const Courses = () => {

    const courseInformation = [{theme:'Artificial Intelligence',
    courses:['AI course 1', 'AI course 2']},
    {theme:'Data Science',
    courses:['Data course 1', 'Data course 2']},
    {theme:'Software Engineering',
    courses:['SE course 1', 'SE course 2']}]

    let testing = courseInformation.map(data => <CourseHeading title = {data.theme}courses= {data.courses}/>)

    return (<div className='courses'>
        <Card>
        {testing}
        </Card>
    </div>)
}

export default Courses