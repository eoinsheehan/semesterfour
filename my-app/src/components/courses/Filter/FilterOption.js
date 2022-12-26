import { useState} from 'react'
const FilterOption = (props) =>{

    const [isChecked,setIsChecked]= useState(true);

    const handleClick = () =>{
        setIsChecked(!isChecked);
    }

    return(
        <div>
        <input className='hover: cursor-pointer'type="checkbox" name={props.content} defaultChecked={isChecked} onClick={handleClick}/>
        <label for={props.content}>{props.content}</label>
        </div>

    )
}

export default FilterOption;

