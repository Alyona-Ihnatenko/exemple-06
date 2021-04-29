// Пиши код ниже этой строки
const sortByDescendingFriendCount = users => {
    return[...users].sort((firstFriends,secondFriends)=>
   secondFriends.friends.length-firstFriends.friends.length)
  };
  // Пиши код выше этой строки