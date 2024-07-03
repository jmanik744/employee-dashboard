import React, { useEffect, useState } from 'react';
import './main.css';

const Main = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setEmployees(data.data));
  }, []);

  return (
    <main className="main">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Start Date</th>
            <th>Office</th>
            <th>Extn.</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.salary}</td>
              <td>{employee.start_date}</td>
              <td>{employee.office}</td>
              <td>{employee.extn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Main;
