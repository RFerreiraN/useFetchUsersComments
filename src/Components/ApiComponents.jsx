import { useFetch } from '../Hooks/useFetch';
import { PacmanLoader } from "react-spinners";


export const ApiComponents = () => {

  const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <>
      {isLoading
        ? <PacmanLoader />
        /*
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        */
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
                <th scope="col">Website</th>
              </tr>
            </thead>
            <tbody>
              {data.map(user => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                </tr>
              ))}

            </tbody>

          </table>
      }
      <button className='btn btn-success'>Presionar</button>
    </>
  )
}
