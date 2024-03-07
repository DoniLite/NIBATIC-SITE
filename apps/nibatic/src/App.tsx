import { createBrowserRouter, Outlet, RouterProvider, useRouteError } from 'react-router-dom'
import errorImg from './assets/error.jpg'
import { Home } from './pages/Home'
import { Pricing } from './pages/Pricing';
import { Forum } from './pages/Forum';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'forum',
        element: <Forum />,
      }
    ]
  }
])


function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div style={{height: '100vh'}} className='w-full flex justify-center items-center bg-blue-800 flex-col'>
        <h1 className=' text-center text-white font-bold'>Une erreur s'est produite...🤕</h1>
        <img src={errorImg} alt="Image 404 error" className=' mt-6 rounded-full' style={{width: '20rem', height: '20rem'}} />
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
