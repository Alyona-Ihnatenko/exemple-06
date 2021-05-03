const getSortedFriends = users => {
    return [...users].flatMap(user=>user.friends).
    filter((friend,index,array)=>
    array.indexOf(friend)===index).
    sort((firstFriend,secondFriend)=>
    firstFriend.localeCompare(secondFriend))
  };
  // Пиши код выше этой строки