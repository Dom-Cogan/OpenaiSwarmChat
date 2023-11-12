import React from 'react';
import './home.css';

const TaskList = () => {
  // Placeholder tasks
  const tasks = ['Task Name 1', 'Task Name 2', 'Task Name 3'];
  return (
    <aside className="task-list">
      {tasks.map((task, index) => (
        <div key={index} className="task-item">{task}</div>
      ))}
      <button className="new-task-btn">Create New Task</button>
      <button className="settings-btn">Settings</button>
    </aside>
  );
};

const ChatRoomCard = ({ roomName, hostName, modelName, lastMessage }) => {
  return (
    <div className="chat-room-card">
      <div className="chat-room-name">{roomName}</div>
      <div className="chat-room-host">{hostName}</div>
      <div className="chat-room-model">{modelName}</div>
      <div className="chat-room-last-message">{lastMessage}</div>
    </div>
  );
};

const ChatRoomList = () => {
  // Placeholder chat rooms
  const chatRooms = [
    { roomName: 'Chat Room 1', hostName: 'Host GPT', modelName: 'Model One', lastMessage: 'Last Message' },
    // ... other chat rooms
  ];

  return (
    <section className="chat-room-list">
      {chatRooms.map((chatRoom, index) => (
        <ChatRoomCard key={index} {...chatRoom} />
      ))}
    </section>
  );
};

const HostChat = () => {
  return (
    <aside className="host-chat">
      <div className="host-chat-title">Host Chat</div>
      {/* Messages and input box will go here */}
    </aside>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      <TaskList />
      <ChatRoomList />
      <HostChat />
    </div>
  );
};

export default Home;
