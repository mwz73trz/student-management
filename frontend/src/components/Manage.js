import React, { useEffect, useState } from "react";
import { Tab, Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { getStudents, deleteStudent } from "../api/studentAPI";
import AddStudentModal from "./AddStudentModal";
import UpdateStudentModal from "./UpdateStudentModal";

const Manage = () => {
  const [students, setStudents] = useState([]);
  const [addModalShow, setAddModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [editStudent, setEditStudent] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleUpdate = (e, student) => {
    e.preventDefault();
    setEditModalShow(true);
    setEditStudent(student);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setAddModalShow(true);
  };

  const handleDelete = (e, studentId) => {
    if (window.confirm("Are you sure?")) {
      e.preventDefault();
      deleteStudent(studentId).then(
        (result) => {
          alert(result);
          setIsUpdated(true);
        },
        (error) => {
          alert("Failed to Delete Student");
        }
      );
    }
  };

  useEffect(() => {
    let mounted = true;
    if (students.length && !isUpdated) {
      return;
    }

    getStudents().then((data) => {
      if (mounted) {
        setStudents(data);
      }
    });
    return () => {
      mounted = false;
      setIsUpdated(false);
    };
  }, [isUpdated, students]);

  let AddModelClose = () => setAddModalShow(false);
  let EditModelClose = () => setEditModalShow(false);

  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <p id="manage"></p>
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
              <th>Action</th>
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
                <td>
                  <Button
                    className="mr-2"
                    variant="danger"
                    onClick={(event) => handleDelete(event, student.id)}
                  >
                    <RiDeleteBin5Line />
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <Button
                    className="mr-2"
                    onClick={(event) => handleUpdate(event, student)}
                  >
                    <FaEdit />
                  </Button>
                  <UpdateStudentModal
                    show={editModalShow}
                    student={editStudent}
                    setUpdated={setIsUpdated}
                    onHide={EditModelClose}
                  ></UpdateStudentModal>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button variant="primary" onClick={handleAdd}>
            Add Student
          </Button>
          <AddStudentModal
            show={addModalShow}
            setUpdated={setIsUpdated}
            onHide={AddModelClose}
          ></AddStudentModal>
        </ButtonToolbar>
      </div>
    </div>
  );
};

export default Manage;
