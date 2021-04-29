// Пиши код ниже этой строки
const sortByAscendingBalance = users => {
    return [...users].sort((firstBalance,secondBalance)=>firstBalance.balance-secondBalance.balance)
  };
  // Пиши код выше этой строки
  console.log( sortByAscendingBalance);