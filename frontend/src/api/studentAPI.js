import axios from "axios";

export function getStudents() {
  return axios
    .get("http://localhost:8000/api/students/")
    .then((response) => response.data);
}

export function deleteStudent(studentId) {
  return axios
    .delete("http://localhost:8000/api/students/" + studentId + "/", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
}

export function addStudent(student) {
  return axios
    .post("http://localhost:8000/api/students/", {
      studentId: null,
      first_name: student.first_name.value,
      last_name: student.last_name.value,
      registration_number: student.registration_number.value,
      email: student.email.value,
      course: student.course.value,
    })
    .then((response) => response.data);
}

export function updateStudent(studentId, student) {
  return axios
    .put("http://localhost:8000/api/students/" + studentId + "/", {
      first_name: student.first_name.value,
      last_name: student.last_name.value,
      registration_number: student.registration_number.value,
      email: student.email.value,
      course: student.course.value,
    })
    .then((response) => response.data);
}
