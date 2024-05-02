import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import FinOrderPages from './Components/Pages/FinOrderPages.jsx'
import FinAccountsPages from './Components/Pages/FinAccountsPages.jsx'
import FinPaymentsPages from './Components/Pages/FinPaymentsPages.jsx'
import FinReportPages from './Components/Pages/FinReportPages.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'financialManager/Orders',
        element: <FinOrderPages/>,
      },
      {
        path: 'financialManager/Accounts',
        element: <FinAccountsPages/>,
      },
      {
        path: 'financialManager/Payments',
        element: <FinPaymentsPages/>,
      },
      {
        path: 'financialManager/Report',
        element: <FinReportPages/>,
      },
    ],
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
