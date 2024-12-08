import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// pages
// import LandingPage from './pages/LandingPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Services from './pages/Services.jsx'
import FindDoctor from './pages/FindDoctor.jsx'
import Contact from './pages/Contact.jsx'
// import Payment from './components/Payment.jsx'
import Dashboard from './pages/Dashboard.jsx'
// import Appoinment from './components/Appoinment.jsx'
import SlotBook from './pages/SlotBook.jsx'
import Auth from './pages/Auth.jsx'
import AdminDash from './pages/AdminDash.jsx'
import Dash from './pages/dash.jsx'
import Doctors from './pages/doctors.jsx'
import AdminAppoint from './pages/adminAppoint.jsx'



// routes
const router = createBrowserRouter([
  // the landing page section
  
  {
    path:'/',
    element:<Home/>,
    errorElement:<ErrorPage/>
  },
  // {
  //   path:'/home',
  //   element:<Home/>,
  // },
  {
    path:'/login',
    element:<Auth />,
  },
  {
    path:'/register',
    element:<Auth register={true}/>,
  },
  {
    path:'/adminlogin',
    element:<Login />,
  },
  {
    path:'/services',
    element:<Services/>,
  },
  {
    path:'/doctors',
    element:<FindDoctor/>,
  },
  {
    path:'/contact',
    element:<Contact />,
  },
  {
    path:'/payment',
    element:<Dashboard />,
  },
  {
    path:'/appointment',
    element:<SlotBook />,
  },
  {
    path:'/dashboard',
    element:<AdminDash/>,
  },
  {
    path:'/dashboard/view',
    element:<Dash/>,
  },
  {
    path:'/dashboard/add-doctors',
    element:<Doctors/>,
  },
  {
    path:'/dashboard/checkappointment',
    element:<AdminAppoint/>,
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
