import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getStudents } from "../api/studentAPI";
import "../App.css";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    let mounted = true;
    getStudents().then((data) => {
      if (mounted) {
        setStudents(data);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <p id="before-table"></p>
        <Table
          striped
          bordered
          hover
          className="react-bootstrap-table"
          id="dataTable"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Registration Number</th>
              <th>Email</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.registration_number}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Students;
