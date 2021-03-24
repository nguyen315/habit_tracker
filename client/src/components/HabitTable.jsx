import React from "react";

function HabitTable() {
 const data = {
  habitNames: ["#", "running", "reading", "time using phone"],
  habitTypes: ["", "checkbox", "checkbox", "number"],
  habitValues: [[new Date(2021, 1, 7), true, false, 2]],
 };

 return (
  <div>
   <table className="table table-bordered">
    <thead className="thead-dark">
     <tr>
      {data.habitNames.map((habit, index) => {
       return (
        <th scope="col" key={index}>
         {habit}
        </th>
       );
      })}
     </tr>
    </thead>
    <tbody>
     <tr>
      {data.habitValues.map((habitValue) => {
       return habitValue.map((value, index) => {
        if (index === 0) {
         return (
          <th scope="row" key={index}>
           <p> {value.toLocaleDateString("en-SG")} </p>
          </th>
         );
        } else {
         return (
          <td key={index}>
           <input type={data.habitTypes[index]} value={value} checked={value} />
          </td>
         );
        }
       });
      })}
     </tr>
    </tbody>
   </table>
  </div>
 );
}

export default HabitTable;
