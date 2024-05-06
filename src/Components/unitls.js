export function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
}

export const genderVerif = (values) => {
  if(values === 'male'){
    return 'Муж'
  } else {
    return 'Жен'
  }
}

export const typeOperationVerif = (values) => {
  if(values === 'doxod'){
    return 'Доход'
  } else {
    return 'Расход'
  }
}

export const periodVerif = (values) => {
  if(values === 'day'){
    return 'День'
  }
  else if(values === 'week'){
    return 'Неделя' 
  }
  else if(values === 'month'){
    return 'Месяц' 
  }
  else if(values === 'quarter'){
    return 'Квартал'
  }
  else{
    return 'Год'
  }
}

export const typeOperationTecWareVerif = (values) => {
  if(values === 'sale'){
    return 'Продажа'
  }
  else if(values === 'going'){
    return 'Приход'
  }
  else {
    return 'Корректировка'
  }
}
