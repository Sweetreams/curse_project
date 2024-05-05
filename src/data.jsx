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
    date: '11.11.2021',
    account: 3,
    order: 'Заказ №3',
    buyer: 'Григорий Распутин',
    invamount: 195170.43,
    shipped: '-',
  },
  {
    key: '2',
    id: '2',
    date: '11.12.2023',
    account: 5,
    order: 'Заказ №2',
    buyer: 'Августин',
    invamount: 1231230.43,
    shipped: '✓',
  },
  {
    key: '3',
    id: '3',
    date: '11.11.2024',
    account: 5,
    order: 'Заказ №10',
    buyer: 'Августин',
    invamount: 1245234.43,
    shipped: '-',
  },
  {
    key: '4',
    id: '4',
    date: '23.12.2023',
    account: 3,
    order: 'Заказ №1',
    buyer: 'Кайзер Григорий',
    invamount: 123000.00,
    shipped: '-',
  },
  {
    key: '5',
    id: '5',
    date: '11.11.2021',
    account: 3,
    order: 'Заказ №6',
    buyer: 'Григорий Распутин',
    invamount: 195000.00,
    shipped: '✓',
  },
];

export const dataSourcePayments = [
  {
    key: '1',
    id: '1',
    date: '11.11.2021',
    order: 'Заказ №3',
    buyer: 'Григорий Распутин',
    invamount: 195170.43,
  },
  {
    key: '2',
    id: '2',
    date: '11.12.2023',
    order: 'Заказ №2',
    buyer: 'Августин',
    invamount: 1231230.43,
  },
  {
    key: '3',
    id: '3',
    date: '11.11.2024',
    order: 'Заказ №10',
    buyer: 'Августин',
    invamount: 1245234.43,
  },
  {
    key: '4',
    id: '4',
    date: '23.12.2023',
    order: 'Заказ №1',
    buyer: 'Кайзер Григорий',
    invamount: 123000.00,
  },
  {
    key: '5',
    id: '5',
    date: '11.11.2021',
    order: 'Заказ №6',
    buyer: 'Григорий Распутин',
    invamount: 195000.00,
  },
];

export const dataSourceReport = [
  {
    key: '1',
    id: '1',
    order: 'GANSOR-1301880',
    buyer: '12 шт',
    invamount: 239000,
  },
  {
    key: '2',
    id: '2',
    order: 'HP ProDesk 400 G7 MT',
    buyer: '10 шт',
    invamount: 1230000,
  },
  {
    key: '3',
    id: '3',
    order: 'Lenovo IdeaCentre 3 07ADA05',
    buyer: '74 шт',
    invamount: 1790000,
  },
  {
    key: '4',
    id: '4',
    order: 'DELL Vostro 3681 SFF',
    buyer: '30 шт',
    invamount: 499599,
  },
];

export const dataSourcePersonnelD = [
  {
    key: '1',
    id: '1',
    fcs: 'Иванов Иван Иванович',
    position: 'Руководитель отдела продаж',
    department: 'Отдел продаж	',
    dof: '01.01.1980',
    gender: 'Муж',
    telefon: '+7 (999) 999-99-99',
    salar: '100 000',
  },
  {
    key: '2',
    id: '2',
    fcs: 'Петрова Анна Петровна',
    position: 'Бухгалтерия',
    department: 'Бухгалтерия',
    dof: '02.02.1990',
    gender: 'Жен',
    telefon: '+7 (888) 888-88-88',
    salar: '50 000',
  },
  {
    key: '3',
    id: '3',
    fcs: 'Сидоров Сергей Сергеевич',
    position: 'Менеджер по продажам',
    department: 'Отдел продаж',
    dof: '03.03.1995',
    gender: 'Муж',
    telefon: '+7 (777) 777-77-77',
    salar: '70 000',
  },
  {
    key: '4',
    id: '4',
    fcs: 'Кузнецова Екатерина Евгеньевна',
    position: 'Менеджер по закупкам',
    department: 'Отдел закупок',
    dof: '04.04.1992',
    gender: 'Жен',
    telefon: '+7 (666) 666-66-66',
    salar: '60 000',
  },
  {
    key: '5',
    id: '5',
    fcs: 'Васильев Василий Васильевич',
    position: 'Водитель',
    department: 'Транспортный отдел',
    dof: '05.05.1975',
    gender: 'Муж',
    telefon: '+7 (555) 555-55-55',
    salar: '40 000',
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
    title: 'Номер заказа',
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

export const columnsPayments =[
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
    title: 'Номер заказа',
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
]

export const columnsReport =[
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Позиция',
    dataIndex: 'order',
    key: 'order',
  },
  {
    title: 'Количество, шт',
    dataIndex: 'buyer',
    key: 'buyer',
  },
  {
    title: 'Сумма, р.',
    dataIndex: 'invamount',
    key: 'invamount',
  },
]

export const columnsPersonnelD =[
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'ФИО',
    dataIndex: 'fcs',
    key: 'fcs',
  },
  {
    title: 'Должность',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: 'Отдел',
    dataIndex: 'department',
    key: 'department',
  },
  {
    title: 'Дата рождения',
    dataIndex: 'dof',
    key: 'dof',
  },
  {
    title: 'Пол',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Телефон',
    dataIndex: 'telefon',
    key: 'telefon',
  },
  {
    title: 'Зарплата',
    dataIndex: 'salar',
    key: 'salar',
  },
]