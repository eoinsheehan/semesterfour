import Course from './components/courses/Courses'
import Card from './components/UI/Card'
import Cart from './components/cart/Cart'
import {useState} from 'react'

import './components/UI/Card.css'

const App = () => {

  const [selectedCourses,setSelectedCourses] = useState([])

  const addCourse = (newCourse) =>{
    setSelectedCourses((prevSelectedCourses) =>{
      return [...prevSelectedCourses,newCourse]
    })
  }

  const removeCourse = (selection) =>{
    setSelectedCourses((prevSelectedCourses) =>{
      return prevSelectedCourses.filter(course => course !== selection)
    })
  }

  return (
    <div className='main'>
      <Card>
      <Course onSelect = {addCourse}/>
      </Card>
      <Cart selection = {selectedCourses} onRemove = {removeCourse}/>
    </div>
  );
}

export default App;
