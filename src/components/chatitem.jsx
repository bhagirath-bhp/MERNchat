import React from "react";
import ProfileImage from "../components/profileImage";
import "../styles/chatitem.css";

const ChatItem = (props) => {
  
  return (props.type=='chat-recieved')
  ? (
    <div className="chat-item">
      <div className="profile"><ProfileImage url={props.profileurl}/></div>
      <div className={`chat-item-content ${props.type}`}>
        <div className="chat-details">
          <div className="sender-name">solo</div>
          <div className="send-time">7-30</div>
        </div>
        <div className="chat-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ullam
          dolorem eligendi aliquid illum a rem reiciendis, earum animi
          doloribus.
        </div>
      </div>
    </div>
  )
  :
  (
    <div className="chat-item">
      <div className={`chat-item-content ${props.type}`}>
        <div className="chat-details">
          <div className="sender-name">solo</div>
          <div className="send-time">7-30</div>
        </div>
        <div className="chat-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ullam
          dolorem eligendi aliquid illum a rem reiciendis, earum animi
          doloribus.
        </div>
      </div>
      <div className="profile"><ProfileImage url={props.profileurl}/></div>
    </div>
  )
};

export default ChatItem;
