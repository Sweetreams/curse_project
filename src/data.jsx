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
    getItem('Управление кадрами', '6', <FolderOutlined/>),
  getItem('Бюджетирование и казнайчество', '7', <FolderOutlined/>, [
    getItem('Финансовое планирование', '8', <PlusCircleOutlined/>),
    getItem('Затраты и доходы', '9', <TableOutlined/>),
    getItem('Отчёт о доходах и расходов', '10', <CheckCircleOutlined/>),
  ]),
  getItem('Технические', '11', <FolderOutlined/>, [
    getItem('Движение по складу', '12', <PlusCircleOutlined/>),
    getItem('Статусы заказа', '13', <PlusCircleOutlined/>),
    getItem('Типы операций', '14', <TableOutlined/>),
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
  }
];

export const columns =[
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