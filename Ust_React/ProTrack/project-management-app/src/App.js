import React from "react";
import HeaderPage from "./Components/header/HeaderPage";
import FooterPage from "./Components/footer/FooterPage";
import SignUpForm from "./Components/signUp/SignUpForm";

const App = () => {
  return (
    <div className="app">
      <HeaderPage />
      <div className="content">
        <SignUpForm />
      </div>
      <FooterPage />
    </div>
  );
};

export default App;
