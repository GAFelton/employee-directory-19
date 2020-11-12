import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import EmployeeDirectory from './pages/EmployeeDirectory';
import API from './utils/API';
import sortFunctions from './utils/sortFunctions';

function App() {

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
    <div>
    <Nav></Nav>
    <EmployeeDirectory employees={employees}></EmployeeDirectory>
    </div>
  );
}

export default App;
