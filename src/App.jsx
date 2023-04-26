import "./App.css";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/firstPage/FirstPage";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
