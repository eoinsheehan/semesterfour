import CourseHeading from './CourseHeading'
import Card from '../UI/Card'
import './Courses.css'

const Courses = () => {

    const themes = ['Artificial Intelligence',
    'Data Science',
    'Software Engineering']

    let testing = themes.map(theme => <CourseHeading title = {theme}/>)

    return (<div className='courses'>
        <Card>
        {testing}
        </Card>
    </div>)
}

export default Courses