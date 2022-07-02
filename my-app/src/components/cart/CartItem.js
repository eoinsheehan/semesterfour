import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = (props) => {

    const removeItem = () =>{
        props.onRemove(props.title)
    }
    return(
        <div>
            {props.title} - {props.credits}
            <IconButton onClick={removeItem} sx={{color:"black"}}>
                <DeleteIcon  />
            </IconButton>
        </div>
    )
}
export default CartItem