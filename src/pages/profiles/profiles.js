import React from "react";
import "./profiles.css";
import InfoBox from "../../components/infobox";

import { Link } from "react-router-dom";

const ProfilesPage = () => {
  return (
    <div className="profileContainer">
      <div className="profileSideMenu">
        <div>
          <h1>Profiles</h1>
        </div>
        <div className="profileSpacer" />
        <div>
          <div className="profileChatInfo">
            <div className="profileChatName">Chat Name</div>
            <div className="profileSpacer" />
            <InfoBox task="Created Date:" description="Time" />
            <div className="profileInfoBox">
              <h3>Name:</h3>
              <h3>Name Goes Here</h3>
            </div>
            <div className="profileInfoBox">
              <h3>Link:</h3>
              <h3>Link to GPT website</h3>
            </div>
            <div className="profileSpacer" />
            <InfoBox task="Chatroom:" description="Name of Chatroom" />
            <InfoBox
              task="Task:"
              description="Description of the task the GPT is completing"
            />
          </div>
        </div>
        <div className="profileBtns">
          <Link to="/">
            <button className="profileMenuButton">Home</button>
          </Link>
          <Link to="/Settings">
            <button className="profileMenuButton">Settings</button>
          </Link>
        </div>
      </div>
      <div className="profileModelCards">
        <div className="profileModelinfo">
          <div>
            <div className="profileQuickInfo">
              <div className="profileModelLogo"></div>
              <div className="profileModelName">
                <h3>Model Name</h3>
              </div>
            </div>
            <div>Description of the model</div>
            <div className="profileActionList">
              <div className="profileModelTags">Send Email</div>
              <div className="profileModelTags">Browse Web</div>
            </div>
          </div>
          <div className="profileChatLogs">
            <div className="profileChatLog profileActive">Chat Name</div>
            <div className="profileChatLog ">Chat Name</div>
            <div className="profileChatLog ">Chat Name</div>
            <div className="profileChatLog ">Chat Name</div>
          </div>
        </div>
      </div>
      <div className="profileChatPreview">
        <div className="profileMessageHistory">
          <div className="profileMessageContainer">
            <div className="profileMessage sent">Message from Host GPT</div>
            <div className="profileMessageInfo">
              <InfoBox task="Host GPT" description="Time Sent" />
            </div>
          </div>
          <div className="profileMessageContainer">
            <div className="profileMessage">Message sent by the GPT</div>
            <div className="profileMessageInfo">
              <InfoBox task="GPT Model Name" description="Time Sent" />
            </div>
          </div>
        </div>
        <div className="profileMessageBtns">
          <button className="profileTerminateBtn">Terminate</button>
          <button className="profilePauseBtn">Pause</button>
          {/* this butn should only show if the chat is currently running */}
          <button className="profileResumeBtn">Resume</button>
          {/* this butn should only show if the chat has been paused */}
        </div>
      </div>
    </div>
  );
};

export default ProfilesPage;
