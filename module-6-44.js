// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => 
 users.filter((user)=>user.gender===gender)
 .reduce((total,user)=>{
     
 return total+=user.balance},0);
  


// Пиши код выше этой строки