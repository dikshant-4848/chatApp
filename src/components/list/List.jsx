import React from 'react'
import ChatList from "./chatList/ChatList"
import Userinfo from "./userInfo/userinfo"
import "./list.css"
 const List = () => {
  return (
    <div className='list'>
      <Userinfo></Userinfo>
      <ChatList></ChatList>
    </div>
  )
}
export default List
