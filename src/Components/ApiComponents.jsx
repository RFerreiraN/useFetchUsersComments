import { useFetch } from '../Hooks/useFetch';
import { useState } from 'react';


export const ApiComponents = () => {

  const [endpoint, setEndpoint] = useState('users');
  
  const getComments = () => {
    setEndpoint(prev => prev === 'users' ? 'comments' : 'users')
  }

  const { data, isLoading, errors } = useFetch(`https://jsonplaceholder.typicode.com/${endpoint}`)

  return (
    <>
    <h1>Datos de API</h1>
    <hr />
    <button className='btn btn-success' onClick={getComments}>Presionar</button>
      {isLoading
        ?
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        : errors
          ? (
            <div className="alert alert-danger text-center my-4" role="alert">
              Error al cargar los datos: {errors.message || 'Intenta de nuevo más tarde.'}
            </div>
          ) : <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Data</th>
              </tr>
            </thead>
            <tbody>
              { data.map( user => (
                endpoint === 'users' 
                ? <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>

                : <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.body}</td>
                </tr>
              ))}

            </tbody>

          </table>
      }
    </>
  )
}
