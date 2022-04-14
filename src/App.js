import React from 'react';
import { ChatEngine, ChatEngineWrapper } from 'react-chat-engine';
import ChatFeed from "./Components/ChatFeed";
import LoginForm from "./Components/LoginForm";
import "./App.css";

const projectID = process.env.REACT_APP_PROJECTID;

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <ChatEngineWrapper>
      <ChatEngine
        height='100vh'
        projectID={projectID}
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()}
      />
    </ChatEngineWrapper>
  );
}

export default App;