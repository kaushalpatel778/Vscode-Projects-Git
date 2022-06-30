import React from "react";

const Student = props => {
  return (
    <>
      <h1>Student Name : {props.name} </h1>
      <h2>Roll No : {props.rollno}</h2>
    </>
  );
};

export default Student;
