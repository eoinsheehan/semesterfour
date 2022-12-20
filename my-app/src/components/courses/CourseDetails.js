
const CourseDetails = (props) => {

    let content = props.value;

    if(props.name[0]==="Assessment"){
        content = 
        <table className="border-5 border-pink-600">
          <tr>
            <th>Description</th>
            <th align="left">Timing</th>
            <th align="left">Worth</th>
          </tr>
            {props.value[0].map((name) => (
              <tr
                key={name}
              >
                <td component="th" scope="row">
                  {name[0]}
                </td>
                <td align="left">{name[1]}</td>
                <td align="left">{name[2]+"%"}</td>
              </tr>
            ))}
          </table>
    }


    // making a new table for every row at the moment which is messing stuff up
    // need to have one table holder with all the contents
    return (
      <table className="border-collapse border-dashed border-2 border-black w-full">
          {props.name.map((name) => (
            <tr
              key={name}
            >
              <th className="border-dashed border-2 border-black w-1/5 px-6 py-4">
                {props.name}
              </th>
              <td className="text-left px-4">{content}</td>
            </tr>
          ))}
      </table>
    )

}

export default CourseDetails;