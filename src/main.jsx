import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import FinOrderPages from './Components/Pages/FinOrderPages.jsx'
import FinAccountsPages from './Components/Pages/FinAccountsPages.jsx'
import FinPaymentsPages from './Components/Pages/FinPaymentsPages.jsx'
import FinReportPages from './Components/Pages/FinReportPages.jsx'
import PersonnelDepartment from './Components/Pages/PersonnelDepartment.jsx'
import BudExpensesandIncome from './Components/Pages/BudExpensesandIncome.jsx'
import BudFinancialPlanning from './Components/Pages/BudFinancialPlanning.jsx'
import BudIncomeandExpenseStatement from './Components/Pages/BudIncomeandExpenseStatement.jsx'
import TecOrderStatus from './Components/Pages/TecOrderStatus.jsx'
import TecTypesOfOperations from './Components/Pages/TecTypesOfOperations.jsx'
import TecWarehouse from './Components/Pages/TecWarehouse.jsx'
import MainPages from './Components/Pages/MainPages.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'mainpage',
        element: <MainPages/>,
      },
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
      {
        path: 'personneldepartment',
        element: <PersonnelDepartment/>
      },
      {
        path: 'budgeting/financialPlanning',
        element: <BudFinancialPlanning/>
      },
      {
        path: 'budgeting/expensesIncome',
        element: <BudExpensesandIncome/>
      },
      {
        path: 'budgeting/eIStatement',
        element: <BudIncomeandExpenseStatement/>
      },
      {
        path: 'techical/warehouse',
        element: <TecWarehouse/>
      },
      {
        path: 'techical/orderStatus',
        element: <TecOrderStatus/>
      },
      {
        path: 'techical/typesOfOperations',
        element: <TecTypesOfOperations/>
      },
    ],
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
