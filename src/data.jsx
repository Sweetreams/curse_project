import {
  PlusCircleOutlined,
  FolderOutlined,
  CheckCircleOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { getItem } from "./Components/unitls";
import { Link } from 'react-router-dom';

export const items = [
  getItem('Управление финансами', '1', <FolderOutlined />, [
    getItem(<Link to='financialManager/Orders'>{'Заказыfdgfd'}</Link>, '2', <PlusCircleOutlined />),
    getItem(<Link to='financialManager/Accounts'>{'Счёта'}</Link>, '3', <PlusCircleOutlined />),
    getItem(<Link to='financialManager/Payments'>{'Оплаты'}</Link>, '4', <TableOutlined />),
    getItem(<Link to='financialManager/Report'>{'Отчёт по позициям'}</Link>, '5', <CheckCircleOutlined />),
  ]),
  getItem(<Link to='personneldepartment'>{'Управление кадрами'}</Link>, '6', <FolderOutlined />),
  getItem('Бюджетирование и казнайчество', '7', <FolderOutlined />, [
    getItem(<Link to='budgeting/financialPlanning'>{'Финансовое планирование'}</Link>, '8', <PlusCircleOutlined />),
    getItem(<Link to='budgeting/expensesIncome'>{'Расходы и доходы'}</Link>, '9', <TableOutlined />),
    getItem(<Link to='budgeting/eIStatement'>{'Отчёт о доходах и расходов'}</Link>, '10', <CheckCircleOutlined />),
  ]),
  getItem('Технические', '11', <FolderOutlined />, [
    getItem(<Link to='techical/warehouse'>{'Движение по складу'}</Link>, '12', <PlusCircleOutlined />),
    getItem(<Link to='techical/orderStatus'>{'Статусы заказа'}</Link>, '13', <PlusCircleOutlined />),
    getItem(<Link to='techical/typesOfOperations'>{'Типы операций'}</Link>, '14', <TableOutlined />),
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

export const dataSourceTecStat = [
  {
    key: '1',
    id: '1',
    tz: 'Открыт'
  },
  {
    key: '2',
    id: '2',
    tz: 'Выполнен'
  },
  {
    key: '3',
    id: '3',
    tz: 'Аннулирован'
  },
  {
    key: '4',
    id: '4',
    tz: 'Все отгружено'
  },
  {
    key: '5',
    id: '5',
    tz: 'Обработан'
  },
];

export const dataSourceTecTypes = [
  {
    key: '1',
    id: '1',
    typeoperation: 'Приход'
  },
  {
    key: '2',
    id: '2',
    typeoperation: 'Продажа'
  },
  {
    key: '3',
    id: '3',
    typeoperation: 'Корректировка'
  },
];

export const dataSourceFinPlanning = [
  {
    key: '1',
    id: '1',
    statiya: 'Закупка сырья',
    symma: '100 000',
    date: '1.1.2024',
    period: 'Месяц',
    comment: 'Приобретены материалы для производства',
    typeoperation: 'Расход',
    prognoz: '500 000',
    fact: '100 000',
  },
  {
    key: '2',
    id: '2',
    statiya: 'Заработная плата',
    symma: '25 000',
    date: '15.1.2024',
    period: 'Месяц',
    comment: 'Выплачена зарплата сотрудникам',
    typeoperation: 'Расход',
    prognoz: '100 000',
    fact: '25 000',
  },
  {
    key: '3',
    id: '3',
    statiya: 'Аренда помещения',
    symma: '15 000',
    date: '20.1.2024',
    period: 'Месяц',
    comment: 'Оплачена аренда помещения',
    typeoperation: 'Расход',
    prognoz: '60 000',
    fact: '15 000',
  },
  {
    key: '4',
    id: '4',
    statiya: 'Закупка сырья',
    symma: '100 000',
    date: '1.1.2024',
    period: 'Месяц',
    comment: 'Приобретены материалы для производства',
    typeoperation: 'Расход',
    prognoz: '500 000',
    fact: '100 000',
  },
  {
    key: '5',
    id: '5',
    statiya: 'Рекламная кампания',
    symma: '10 000',
    date: '30.1.2024',
    period: 'Месяц',
    comment: 'Запущена рекламная кампания в социальных',
    typeoperation: 'Расход',
    prognoz: '30 000',
    fact: '10 000',
  },
  {
    key: '6',
    id: '6',
    statiya: 'Поступления от клиентов',
    symma: '50 000',
    date: '10.2.2024',
    period: 'Месяц',
    comment: 'Получены платежи от клиентов за товары или услуги',
    typeoperation: 'Доход',
    prognoz: '200 000',
    fact: '50 000',
  },
  {
    key: '7',
    id: '7',
    statiya: 'Продажа товаров',
    symma: '100 000',
    date: '31.3.2024',
    period: 'Месяц',
    comment: 'Проданы товары клиентам',
    typeoperation: 'Доход',
    prognoz: '200 000',
    fact: '100 000',
  },
  {
    key: '8',
    id: '8',
    statiya: 'Покупка оборудования',
    symma: '50 000',
    date: '1.3.2024',
    period: 'Квартал',
    comment: 'Приобретено оборудование для производства',
    typeoperation: 'Расход',
    prognoz: '100 000',
    fact: '50 000',
  },
];

export const dataSourceExpenseIncome = [
  {
    key: '1',
    id: '1',
    date: '1.1.2024',
    statiya: 'Заработная плата сотрудников',
    symma: -100000,
    comment: 'Выплачена заработная плата сотрудникам за декабрь 2023 года',
  },
  {
    key: '2',
    id: '2',
    date: '5.1.2024',
    statiya: 'Аренда помещения',
    symma: -50000,
    comment: 'Оплачена аренда помещения за январь 2024 года',
  },
  {
    key: '3',
    id: '3',
    date: '20.1.2024',
    statiya: 'Налоги и сборы',
    symma: -25000,
    comment: 'Уплачены налоги и сборы за декабрь 2023 года',
  },
  {
    key: '4',
    id: '4',
    date: '31.3.2024',
    statiya: 'Продажа товаров',
    symma: 100000,
    comment: 'Проданы товары клиентам',
  },
  {
    key: '5',
    id: '5',
    date: '10.2.2024',
    statiya: 'Поступления от клиентов',
    symma: 50000,
    comment: 'Получены платежи от клиентов за товары или услуги',
  },
  
];

export const dataSourceTecWare = [
  {
    key: '1',
    id: '1',
    date: '13.4.2023',
    position: 'GANSOR-1301880',
    typeoperation: 'Продажа',
    kol: '12 шт.',
    operation: '-2',
  },
  {
    key: '2',
    id: '2',
    date: '20.10.2023',
    position: 'HP ProDesk 400 G7 MT',
    typeoperation: 'Корректировка',
    kol: '230 шт.',
    operation: '320',
  },
  {
    key: '3',
    id: '3',
    date: '13.5.2024',
    position: 'Lenovo IdeaCentre 3 07ADA05',
    typeoperation: 'Приход',
    kol: '120 шт.',
    operation: '0',
  },
  {
    key: '4',
    id: '4',
    date: '13.10.2021',
    position: 'Lenovo V15 IAP',
    typeoperation: 'Корректировка',
    kol: '0 шт.',
    operation: '10',
  },
  {
    key: '5',
    id: '5',
    date: '5.5.2021',
    position: 'Lenovo GeekPro G5000',
    typeoperation: 'Корректировка',
    kol: '100 шт.',
    operation: '120',
  },
  {
    key: '6',
    id: '6',
    date: '13.4.2023',
    position: 'DELL Vostro 3681 SFF',
    typeoperation: 'Продажа',
    kol: '76 шт.',
    operation: '-36',
  },
];

export const dataSourcePersonnelD = [
  {
    key: '1',
    id: '1',
    fcs: 'Иванов Иван Иванович',
    position: 'Руководитель отдела продаж',
    department: 'Отдел продаж	',
    dof: '1.1.1980',
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
    dof: '2.2.1990',
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
    dof: '3.3.1995',
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
    dof: '4.4.1992',
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
    dof: '5.5.1975',
    gender: 'Муж',
    telefon: '+7 (555) 555-55-55',
    salar: '40 000',
  },
];

export const columnsAccount = [
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

export const columnsPayments = [
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

export const columnsReport = [
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

export const columnsTecWare = [
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
    title: 'Позиция',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: 'Тип операции',
    dataIndex: 'typeoperation',
    key: 'typeoperation',
  },
  {
    title: 'Количество, шт.',
    dataIndex: 'kol',
    key: 'kol',
  },
  {
    title: 'Остаток после операции',
    dataIndex: 'operation',
    key: 'operation',
  },
]

export const columnsTecTypes = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Тип операции по скаду',
    dataIndex: 'typeoperation',
    key: 'typeoperation',
  }
]

export const columnsTecStat = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Статус заказа',
    dataIndex: 'tz',
    key: 'tz',
  }
]

export const columnsPersonnelD = [
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

export const columnsFinPlanning = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Название статьи',
    dataIndex: 'statiya',
    key: 'statiya',
  },
  {
    title: 'Сумма, р.',
    dataIndex: 'symma',
    key: 'symma',
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Период',
    dataIndex: 'period',
    key: 'period',
  },
  {
    title: 'Комментарий',
    dataIndex: 'comment',
    key: 'comment',
  },
  {
    title: 'Тип операции',
    dataIndex: 'typeoperation',
    key: 'typeoperation',
  },
  {
    title: 'Прогноз, р.',
    dataIndex: 'prognoz',
    key: 'prognoz',
  },
  {
    title: 'Факт, р.',
    dataIndex: 'fact',
    key: 'fact',
  },
]

export const columnsExpenseIncome = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Название статьи',
    dataIndex: 'statiya',
    key: 'statiya',
  },
  {
    title: 'Сумма, р.',
    dataIndex: 'symma',
    key: 'symma',
  },
  {
    title: 'Дата',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Комментарий',
    dataIndex: 'comment',
    key: 'comment',
  },
]