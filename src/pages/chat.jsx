import React from 'react'
import ChatItem from '../components/chatitem';
import ProfileImage from '../components/profileImage';
import '../styles/chat.css'
import { AiOutlineSend } from 'react-icons/ai'

const chat = () => {
    let name = 'MERN chat';
  return (
    <div className='chat'>
        <div className="header">
            <div className="logo"><ProfileImage url="https://picsum.photos/201"/></div>
            <div className="name">{name}</div>
            <div className="profile">P</div>
        </div>
        <div className="chat-area">
            <ChatItem type="chat-recieved" profileurl='https://picsum.photos/200'/>
            <ChatItem type="chat-sent" profileurl='https://picsum.photos/199'/>
            <ChatItem type="chat-recieved" profileurl='https://picsum.photos/200'/>
            <ChatItem type="chat-sent" profileurl='https://picsum.photos/199'/>
            <ChatItem type="chat-recieved" profileurl='https://picsum.photos/200'/>
            <ChatItem type="chat-sent" profileurl='https://picsum.photos/199'/>
            <ChatItem type="chat-recieved" profileurl='https://picsum.photos/200'/>
            <ChatItem type="chat-sent" profileurl='https://picsum.photos/199'/>
        </div>
        <div className="typing-area">
          <form action="">
            <input type="text"/>
            <button type="submit"><AiOutlineSend/></button>
          </form>
        </div>
    </div>
  )
}

export default chat