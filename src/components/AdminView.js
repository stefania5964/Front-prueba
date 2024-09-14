import React, { useState, useEffect } from 'react';

function AdminView() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Aquí iría el fetch para obtener las empresas desde el backend
    fetch('http://localhost:8080/api/companies')
      .then(response => response.json())
      .then(data => setCompanies(data))
      .catch(error => console.error('Error fetching companies:', error));
  }, []);

  const handleDelete = (id) => {
    // Aquí iría la lógica para eliminar una empresa
    fetch(`http://localhost:8080/api/companies/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setCompanies(companies.filter(company => company.id !== id));
        } else {
          console.error('Failed to delete company');
        }
      })
      .catch(error => console.error('Error deleting company:', error));
  };

  const handleUpdate = (id) => {
    // Aquí iría la lógica para actualizar una empresa
    // Tal vez redirigir a un formulario de actualización
  };

  return (
    <div className="AdminView">
      <h1>Admin View</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(company => (
            <tr key={company.id}>
              <td>{company.id}</td>
              <td>{company.name}</td>
              <td>
                <button onClick={() => handleUpdate(company.id)}>Update</button>
                <button onClick={() => handleDelete(company.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminView;
