import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = (props) => {

    const removeItem = () =>{
        props.onRemove(props.title)
    }
    return(
        <div>
            {props.title} - {props.credits}
            <IconButton>
                <DeleteIcon onClick={removeItem} />
            </IconButton>
        </div>
    )
}
export default CartItem