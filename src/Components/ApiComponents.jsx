import { useState } from 'react';
import { useFetch } from '../Hooks/useFetch';

export const ApiComponents = () => {

 const {data, isLoading, errors} = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <>
      <table className="table table-dark">
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
    </>
  )
}
