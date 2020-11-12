import React from 'react';
import Card from '../components/Card';
import { Container } from '../components/Grid';

function EmployeeDirectory(props) {
  return (
    <Container fluid>
      {props.employees.length ? (
        <div className="card-deck d-flex justify-content-center">
          {
            props.employees.map(employee => {
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