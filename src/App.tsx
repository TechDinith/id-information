import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import IdInforPage from "./components/pages/idInfor/idInfor.page";
import SignInPage from "./components/pages/singIn/signIn.page";
import SignUpPage from "./components/pages/signUp/signup.page";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/idinfor" element={<IdInforPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
