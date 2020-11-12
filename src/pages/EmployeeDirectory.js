import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Container } from '../components/Grid';
import API from '../utils/API';
import sortFunctions from '../utils/sortFunctions';


function EmployeeDirectory() {
  // EmployeesList is the master list, derived from the API.
  const [employeesList, setEmployeesList] = useState([])
  // Employees is the array to be modified with sorting & filtering.
  const [employees, setEmployees] = useState([])

  // Load all employees and store them with setEmployeesList
  useEffect(() => {
    loadEmployeesList()
  }, [])

  // Only sets employees array once employeesList has changed.
  useEffect(() => {
    setEmployees(employeesList)
  }, [employeesList])

  // Loads all employees and sets them to employeesList
  async function loadEmployeesList() {
    try {
      const response = await API.getUsers()
      setEmployeesList(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container fluid>
      {employees.length ? (
        <div className="card-deck d-flex justify-content-center">
          {
            employees.map(employee => {
              return (
                <Card key={employee.id.value.toString()} id={employee.id.value}>
                  <img className="card-img-top" src={employee.picture.large} alt={employee.name.first} />
                  <div className="card-body">
                    <h5 className="card-title">{employee.name.first} {employee.name.last}</h5>
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