import { useState} from 'react'
const FilterOption = (props) =>{

    const [isChecked,setIsChecked]= useState(true);

    const handleClick = () =>{
        setIsChecked(!isChecked);
    }

    return(
        <div className='border-b border-gray-600 px-2 rounded'>
        <input className='w-4 h-4 hover: cursor-pointer'type="checkbox" name={props.content} defaultChecked={isChecked} onClick={handleClick}/>
        <label className='text-gray-300 ml-2 py-3' for={props.content}>{props.content}</label>
        </div>

    )
}

export default FilterOption;

