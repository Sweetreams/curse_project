import {
    PlusCircleOutlined,
    FolderOutlined,
    CheckCircleOutlined,
    TableOutlined,
  } from '@ant-design/icons';
import { getItem } from "./Components/unitls";
import { Link } from 'react-router-dom';

export const items = [
  getItem('Управление финансами', '1', <FolderOutlined/>, [
    getItem(<Link to='financialManager/Orders'>{'Заказы'}</Link>, '2', <PlusCircleOutlined/>),
    getItem(<Link to='financialManager/Accounts'>{'Счёта'}</Link>, '3', <PlusCircleOutlined/>),
    getItem(<Link to='financialManager/Payments'>{'Оплаты'}</Link>, '4', <TableOutlined/>),
    getItem(<Link to='financialManager/Report'>{'Отчёт по позициям'}</Link>, '5', <CheckCircleOutlined/>),
  ]),
  getItem(<Link to='personneldepartment'>{'Управление кадрами'}</Link>, '6', <FolderOutlined/>),
  getItem('Бюджетирование и казнайчество', '7', <FolderOutlined/>, [
    getItem(<Link to='budgeting/financialPlanning'>{'Финансовое планирование'}</Link>, '8', <PlusCircleOutlined/>),
    getItem(<Link to='budgeting/expensesIncome'>{'Расходы и доходы'}</Link>, '9', <TableOutlined/>),
    getItem(<Link to='budgeting/eIStatement'>{'Отчёт о доходах и расходов'}</Link>, '10', <CheckCircleOutlined/>),
  ]),
  getItem('Технические', '11', <FolderOutlined/>, [
    getItem(<Link to='techical/warehouse'>{'Движение по складу'}</Link>, '12', <PlusCircleOutlined/>),
    getItem(<Link to='techical/orderStatus'>{'Статусы заказа'}</Link>, '13', <PlusCircleOutlined/>),
    getItem(<Link to='techical/typesOfOperations'>{'Типы операций'}</Link>, '14', <TableOutlined/>),
  ]),
];

export const dataSourceAccount = [
  {
    key: '1',
    id: '1',
    date: '11.11.21',
    account: 3,
    order: 'Заказ №3',
    buyer: 'Григорий Распутин',
    invamount: 195170.43,
    shipped: '-',
  },
  {
    key: '2',
    id: '2',
    date: '11.12.23',
    account: 5,
    order: 'Заказ №2',
    buyer: 'Августин',
    invamount: 1231230.43,
    shipped: '✓',
  },
  {
    key: '3',
    id: '3',
    date: '11.11.24',
    account: 5,
    order: 'Заказ №10',
    buyer: 'Августин',
    invamount: 1245234.43,
    shipped: '-',
  },
  {
    key: '4',
    id: '4',
    date: '23.12.23',
    account: 3,
    order: 'Заказ №1',
    buyer: 'Кайзер Григорий',
    invamount: 123000.00,
    shipped: '-',
  },
  {
    key: '5',
    id: '5',
    date: '11.11.21',
    account: 3,
    order: 'Заказ №6',
    buyer: 'Григорий Распутин',
    invamount: 195000.00,
    shipped: '✓',
  },
];

export const columnsAccount =[
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Номер счёта',
    dataIndex: 'account',
    key: 'account',
  },
  {
    title: 'Заказ',
    dataIndex: 'order',
    key: 'order',
  },
  {
    title: 'Покупатель',
    dataIndex: 'buyer',
    key: 'buyer',
  },
  {
    title: 'Сумма счёта, р.',
    dataIndex: 'invamount',
    key: 'invamount',
  },
  {
  title: 'Отгружен',
  dataIndex: 'shipped',
  key: 'shipped',
  },
]