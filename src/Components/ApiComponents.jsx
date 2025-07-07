import { useState } from 'react';
import { useFetch } from '../Hooks/useFetch';

export const ApiComponents = () => {

  const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <>
      {isLoading
        ? <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        : errors
          ? (
            <div className="alert alert-danger text-center my-4" role="alert">
              Error al cargar los datos: {errors.message || 'Intenta de nuevo más tarde.'}
            </div>
          ): <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
      }

    </>
  )
}
