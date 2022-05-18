import CourseHeading from './CourseHeading'
import './Courses.css'

const Courses = () => {

    const themes = ['Artificial Intelligence',
    'Data Science',
    'Software Engineering']

    let testing = themes.map(theme => <CourseHeading title = {theme}/>)

    return (<div className='courses'>
        {testing}
    </div>)
}

export default Courses