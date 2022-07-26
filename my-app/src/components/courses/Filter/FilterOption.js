import { Checkbox, FormControlLabel, Typography, Box, IconButton } from '@mui/material'

const FilterOption = (props) =>{

    return(
        <FormControlLabel sx={{display:"block"}}control={<Checkbox defaultChecked size="small"/>} label={props.content} />

    )
}

export default FilterOption;

