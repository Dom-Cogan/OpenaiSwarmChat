import React from "react";
import "../home/home.css";
import sendIcon from "../../images/send.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeSideMenu">
        {/* Assuming you will have a list of tasks here */}
        <div className="homeTaskList">
          <div className="homeTsk">Task Name</div>
          {/* More tasks */}
        </div>
        <div className="homeButtons">
          <Link to="/settings">
            <button className="homeMenuButton">Settings</button>
          </Link>
          <Link to="/profiles">
            <button className="homeMenuButton">Profiles</button>
          </Link>
          <button className="homeMenuButton">New Task</button>
        </div>
      </div>
      <div className="homeCenter">
        <div className="homeChatRoomCard">Chat Room Name</div>
      </div>
      <div className="homeChatWindow">
        <div className="homeMessageHistory">
          {/* The chat window could have messages and an input box */}
          <div className="homeMmessage homeUserMessage">
            This message was sent by the user
          </div>
          <div className="homeMessage">
            This message was sent to the user by the Host GPT in the chat
          </div>
          {/* More messages */}
        </div>
        <div className="homeInputBox">
          <input type="text" placeholder="Type a message..." />
          <button className="homeSendBtn">
            <img src={sendIcon} alt="Send" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
