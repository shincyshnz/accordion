import React, { Component } from "react";

const UserList = ({ userList,setUserList }) => {

  const deleteUser = function(userId){
    const newUserList = userList.filter((user)=> user.id !== userId);
    setUserList(newUserList);
  }

  const listItems = userList.map((user)=>
        <li key={user.id}>
          <p>{user.id}</p>
          <p>{user.title}</p>
          <button onClick={()=>deleteUser(user.id)} >Delete</button>
        </li>
  );

  return (
    <>
      <div className="wrapper">
        <ul>
          {listItems}
        </ul>
      </div>
    </>
  );
    
}
export { UserList };
