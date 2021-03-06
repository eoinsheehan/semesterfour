import './CourseDetails.css'
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const CourseDetails = (props) => {

    let content = props.value;

    if(props.name[0]==="Assessment"){
        content = <TableContainer component={Paper}>
        <Table aria-label="simple table">
        <TableHead sx={{width:"100%"}}>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="left">Timing</TableCell>
            <TableCell align="left">Worth</TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
            {props.value[0].map((name) => (
              <TableRow
                key={name}
              >
                <TableCell component="th" scope="row">
                  {name[0]}
                </TableCell>
                <TableCell align="left">{name[1]}</TableCell>
                <TableCell align="left">{name[2]+"%"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>;
    }

    return (
            <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody sx ={{backgroundColor:"#1B2430"}}>
          {props.name.map((name) => (
            <TableRow
              key={name}
            >
              <TableCell component="th" scope="row" sx={{width:"20%", color:"white"}}>
                {props.name}
              </TableCell>
              <TableCell align="left"  sx={{ color:"white"}}>{props.name[0]==="Hyperlink"?<a href={content} target="_blank" rel="noreferrer">Official Module Description</a>:content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )

}

export default CourseDetails;