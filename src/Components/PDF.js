import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();

//<img src={props.image} alt={props.title} />

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <h1 >Result</h1>
        <br></br>
        <table>
            <thead>
                <tr>
                    <td >Firstname</td>
                    <td>Lastname</td>
                    <td>Email</td>
                    <td>Age</td>
                    <td>School</td>
                    <td>Class</td>
                    <td>Studentid</td>
                    <td>Test1</td>
                    <td>Test2</td>
                    <td>Test3</td>
                </tr>
                <tr>
                    <td>{props.firstname}</td>
                    <td>{props.lastname}</td>
                    <td>{props.email}</td>
                    <td>{props.age}</td>
                    <td>{props.school}</td>
                    <td>{props.class}</td>
                    <td>{props.studentid}</td>
                    <td>{props.test1}</td>
                    <td>{props.test2}</td>
                    <td>{props.test3}</td>
                </tr>
            </thead>
        </table>
        <p>Here is the comments:<br></br>{props.content}</p>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;