// Пиши код ниже этой строки
const sortByName = users => {
    return [...users].sort((firstName,secondName)=>
    firstName.name.localeCompare(secondName.name))
  };
  // Пиши код выше этой строки