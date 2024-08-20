import { useState } from "react";

import "./App.css";
import Formarea from "./component/Form section/Formarea";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <div className="main">
        <Formarea />
      </div>
      <Footer/>
    </>
  );
}

export default App;
