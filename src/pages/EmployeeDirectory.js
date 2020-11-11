import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Col, Container, Row } from '../components/Grid';
import API from '../utils/API';


function EmployeeDirectory() {
  const [employeesList, setEmployeesList] = useState([])
  const [employees, setEmployees] = useState([])

  // Load all employees and store them with setEmployeesList
  useEffect(() => {
    loadEmployeesList()
  }, [])

  // Loads all employees and sets them to employeesList
  function loadEmployeesList() {
    API.getUsers()
      .then(res =>
        setEmployeesList(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <Container fluid>
      {employees.length ? (
        <div className="card-deck">
          {
            employees.map(employee => {
              return (
                <Card>
                  <img className="card-img-top" src={employee.picture} alt={employee.name} />
                  <div className="card-body">
                    <h5 className="card-title">{employee.name}</h5>
                    <p className="card-text">Email: {employee.email}</p>
                    <p className="card-text">Phone: {employee.phone}</p>
                  </div>
                </Card>
              );
            })
          }
        </div>
      ) : (
          <h3>No Results to Display</h3>
        )}
    </Container>
  )
};

export default EmployeeDirectory;