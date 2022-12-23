import CourseHeading from './CourseHeading'
import { useState} from 'react'

const Courses = (props) => {

    const [isChecked] = useState(true);
    const [showFilters,setShowFilters] = useState(false);
    let content;

    const onFilterClick = ()=>{
        setShowFilters(!showFilters);
    }


    let listItems;

    if(props.courseData.length >0){
    console.log("course names",props.courseData)
    content = props.courseData.map(data => <CourseHeading key ={data.theme} onSelect={props.onSelect} title = {data.theme} courses= {data.courses} semester = {isChecked} selection = {props.selection} onRemove = {props.onRemove}/>
    )
    }

    if(props.courseData.length>0){
        listItems = props.courseData.map((theme) => theme.courses.map(courseName => <li key={courseName.Title} className="hover:bg-pink-500 cursor-pointer">{courseName.Title}</li>))
    }

    return (
        <div id="courses" className="border-2 bg-gray-300">
            <div className='flex flex-col'>
                <div className='flex'>{showFilters ? <button onClick={onFilterClick} className='bg-red-500 border-2 border-black rounded p-8'>Hide Filters</button>:<button onClick={onFilterClick} className='bg-red-500 border-2 border-black rounded p-8'>Show Filters</button>}
                <div className='flex flex-col'><input onSelect={onFilterClick} onChange={onFilterClick}placeholder='which course?'></input>
                <div className={showFilters? "h-1/5 overflow-y-scroll visible":"hidden"}>
                    <ul>
                    {listItems}

                    </ul>
                </div>
                </div>
                </div>
                {showFilters ? 
                <div className='transition-height duration-2000 ease-in-out h-100'>Showing filters</div> :
                <div className='h-0'>No filters should be showing</div>}

            </div>
            <p className="text-left text-blue-900">{content}</p>
        </div>
    )
}

export default Courses