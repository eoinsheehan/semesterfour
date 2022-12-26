import CourseHeading from './CourseHeading'
import Filter from './Filter/Filter'
import { useState} from 'react'

const Courses = (props) => {

    const [isChecked,setIsChecked] = useState(true);
    const [showFilters,setShowFilters] = useState(false);
    let content;
    let courseThemes;


        const handleChange = ()=> {
        setIsChecked(!isChecked)
    }

    const onFilterClick = ()=>{
        setShowFilters(!showFilters);
    }


    let listItems;

    if(props.courseData.length >0){
    courseThemes = props.courseData.map(data=>data.theme)
    console.log("course names",props.courseData)
    content = props.courseData.map(data => <CourseHeading key ={data.theme} onSelect={props.onSelect} title = {data.theme} courses= {data.courses} semester = {isChecked} selection = {props.selection} onRemove = {props.onRemove}/>
    )
    }

    if(props.courseData.length>0){
        listItems = props.courseData.map((theme) => theme.courses.map(courseName => <option key={courseName.Title} className="hover:bg-pink-500 cursor-pointer text-gray-100">{courseName.Title}</option>))
    }

    return (
        <div id="courses" className=" bg-midnight">
            <Filter handleChange={handleChange} isChecked={isChecked} themes={courseThemes} lecturers={props.lecturers} courseData={props.courseData}/>
            {content}
        </div>
    )
}

export default Courses