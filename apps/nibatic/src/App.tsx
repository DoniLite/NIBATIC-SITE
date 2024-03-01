import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import error from './assets/error.jpg'
import { Home } from './pages/Home'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />
      }
    ]
  }
])


function ErrorPage() {
  return (
    <>
      <div style={{height: '100vh'}} className='w-full flex justify-center items-center'>
        <h1 className=' text-center text-white font-bold'>Une erreur s'est produite...🤕</h1>
        <img src={error} alt="Image 404 error" className=' mt-6 rounded-full' style={{width: '20rem', height: '20rem'}} />
      </div>
    </>
  )
}

function Root() {
  return (
    <>
      <Outlet />
    </>
  )
}

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
