import Course from './components/courses/Courses'
import Card from './components/UI/Card'
import Cart from './components/cart/Cart'
import {useEffect, useState} from 'react'
import './App.css'
import './components/UI/Card.css'

const App = () => {

  const [selectedCourses,setSelectedCourses] = useState([])
  const [courseData,setCourseData] = useState("");
  
  useEffect(() => {
    fetch("./data/data.json")
      .then((response) => response.json())
      .then((json) => {
        console.log("course data",json);
        setCourseData(json); // unnecessary re rendering, ideally would just be assigned to a regular variable
      });
  },[]);

 

  const dupeCheck = (arr,val) => {
    return arr.some(el => el.title === val)}
    
  const addCourse = (newCourse) =>{
    
    if(!dupeCheck(selectedCourses,newCourse.title)){
      console.log("testing",dupeCheck(selectedCourses,newCourse))
    setSelectedCourses((prevSelectedCourses) =>{
      return [...prevSelectedCourses,newCourse]
    })
  }
  }

  const removeCourse = (selection) =>{
    setSelectedCourses((prevSelectedCourses) =>{
      return prevSelectedCourses.filter(course => course.title !== selection)
    })
  }

  return (
    <div className='main'>
      <Card className="course-container">
      <Course courseData = {courseData.length >0 && courseData} onSelect = {addCourse} selection = {selectedCourses} onRemove = {removeCourse} />
      </Card>
      <Cart key={Math.random()} testing = {courseData.length >0 && courseData} selection = {selectedCourses} onRemove = {removeCourse}/>
    </div>
  );
}

export default App;
