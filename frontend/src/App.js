import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      {/* We wrote exact above because path / exists in /chats also so when you go to /chats then homepage also comes because /chats contains / also so homepage also renders */}

      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
