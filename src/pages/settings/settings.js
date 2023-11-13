import React, { useState } from "react";
import "../settings/settings.css";
import { Link } from "react-router-dom";

const SettingsPage = () => {
  const [openAIKey, setOpenAIKey] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [clusterAddress, setClusterAddress] = useState("");
  const [dbName, setDBName] = useState("");

  const handleOpenAIKeyChange = (event) => {
    setOpenAIKey(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClusterAddressChange = (event) => {
    setClusterAddress(event.target.value);
  };

  const handleDBNameChange = (event) => {
    setDBName(event.target.value);
  };

  // Add your logic to handle navigation
  const navigateToProfiles = () => {
    // Logic to navigate to Profiles
  };

  const navigateToHome = () => {
    // Logic to navigate to Home
  };

  const InputField = ({ id, label, value, type, onChange }) => {
    return (
      <div className="settingsInputField">
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} value={value} onChange={onChange} />
      </div>
    );
  };

  return (
    <div className="settingsContainer">
      <div className="settingsSideMenu">
        <div className="menuItem">
          <h1>Settings</h1>
        </div>
        <div className="settingsSpacer" />
        <div className="settingsBtns">
          <Link to="/">
            <button className="settingsMenuButton">Home</button>
          </Link>
          <Link to="/Profiles">
            <button className="settingsMenuButton">Profiles</button>
          </Link>
        </div>
      </div>
      <div className="settingsContent">
        <div className="settingsSettings">
          <div>
            <InputField
              id="openai-api-key"
              label="OpenAI API Key:"
              type="text"
              value={openAIKey}
              onChange={handleOpenAIKeyChange}
            />

            <div className="settingsHeading">
              <h2>Mongo DB Atlas</h2>
            </div>

            <InputField
              id="username"
              label="User Name:"
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />

            <InputField
              id="password"
              label="Password:"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />

            <InputField
              id="cluster-address"
              label="Cluster Address:"
              type="text"
              value={clusterAddress}
              onChange={handleClusterAddressChange}
            />

            <InputField
              id="db-name"
              label="DB Name:"
              type="text"
              value={dbName}
              onChange={handleDBNameChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
