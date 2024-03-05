import { createBrowserRouter, Outlet, RouterProvider, useRouteError } from 'react-router-dom'
import errorImg from './assets/error.jpg'
import { Home } from './pages/Home'
import { useEffect } from 'react';
import { About } from './pages/About';
import { Blog } from './pages/Blog';



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
        path: 'about',
        element: <About />,
      },
      {
        path: 'blog',
        element: < Blog />,
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
  function navAnime() {
    const nav = document.querySelector('nav') as HTMLElement
    const btn = document.querySelector('.nav button') as HTMLButtonElement

    console.log(btn)
    console.log(window.scrollY)
    if (window.scrollY > 25) {
      nav.style.position = 'fixed'
      nav.classList.add('bg-blue-800', 'left-0', 'top-0', 'right-0', 'p-6')
      btn.classList.add('text-blue-800')
    } else {
      nav.style.position = 'relative'
      nav.classList.add('left-0', 'top-0', 'right-0', 'p-6')
    }
  }
  useEffect(() => {
    

    window.addEventListener('scroll', navAnime)
  }, [])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
