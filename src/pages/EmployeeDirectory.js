import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Container } from '../components/Grid';
import API from '../utils/API';


function EmployeeDirectory() {
  const [employeesList, setEmployeesList] = useState([])
  const [employees, setEmployees] = useState([])

  // Load all employees and store them with setEmployeesList
  useEffect(() => {
    loadEmployeesList()
  }, [])

  // Loads all employees and sets them to employeesList
  async function loadEmployeesList() {
    try {
      const response = await API.getUsers()
      setEmployeesList(response.data.results);
      setEmployees(employeesList)
    } catch (err) {
      console.log(err);
    }
  };
  
  // To be used with a sort function: Ex. singers.sort(compareValues('band', 'desc'));
  function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }


  return (
    <Container fluid>
      {employees.length ? (
        <div className="card-deck d-flex justify-content-center">
          {
            employees.map(employee => {
              return (
                <Card id={employee.id.value}>
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