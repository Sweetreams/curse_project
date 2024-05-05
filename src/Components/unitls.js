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