import React from "react";


// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Table(props) {

  return (
    // <ul className="list-group">
    //   {props.friends.map(item => (
    //     <li className="list-group-item" key={item.id}>
    //       {item.name}
    //     </li>
    //   ))}
    // </ul>

    <table>
      <tr>
        <th>Pic</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>

      </tr>
      {props.employees.map(employee => (
      <tr>
        <td>
          <img width={30} height={30} src={employee.picture.thumbnail} alt="" />
        </td>

        <td> {employee.name.first} </td>
         <td> {employee.name.last} </td> 
        <td> {employee.email} </td>
      </tr>))

      }
    </table>

  );
}

export default Table;