import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

export class Section3 extends React.Component {
  render() {
    const {list} = this.props
    const content = list?.map((el)=>{

      return <tr  key={el.id}>
      <th scope="row">{el.id.toString().slice(6,13)}</th>
      <td>{el.title.inputValue1}</td>
      <td typeof="email"aria-required>{el.title.inputValue2}</td>
    
      <td className="text-center">
        
        <FiEdit2 className="me-2" style={{ color: "green" }} />
        <AiFillDelete
          className="fs-4"
          style={{ color: "brown" }}
        />
      </td>
    </tr>
    })
    console.log(this.props)
    return (
      <div className="w-75 bg-dark p-3  rounded">
        <table className="table  table-hover ">
          <thead className="text-center table-info">
            <tr>
              <th scope="col">UserID</th>
              <th scope="col">Your Name</th>
              <th scope="col"> Your Email</th>
              <th scope="col">Edit && Delete</th>
            </tr>
          </thead>
          <tbody>

            {content}
      

          </tbody>
        </table>
      </div>
    );
  }
}
