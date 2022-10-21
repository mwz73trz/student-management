import React, { Component } from "react";
import { Modal, Col, Row, Form, Button } from "react-bootstrap";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { updateStudent } from "../api/studentAPI";

const UpdateStudentModal = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(props.student.id, e.target).then(
      (result) => {
        alert(result);
        props.setUpdated(true);
      },
      (error) => {
        alert("Failed to Update Student");
      }
    );
  };

  return (
    <div className="container">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Student Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="first_name">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="first_name"
                    required
                    defaultValue={props.student.first_name}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="last_name">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    required
                    defaultValue={props.student.last_name}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="registration_number">
                  <Form.Label>Registration Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="registration_number"
                    required
                    defaultValue={props.student.registration_number}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    required
                    defaultValue={props.student.email}
                    placeholder=""
                  />
                </Form.Group>
                <Form.Group controlId="course">
                  <Form.Label>Course</Form.Label>
                  <Form.Control
                    type="text"
                    name="course"
                    required
                    defaultValue={props.student.course}
                    placeholder=""
                  />
                </Form.Group>
                <p></p>
                <Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="submit" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateStudentModal;
