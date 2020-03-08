import React from "react";

import { Header, Footer, Navigation } from "./layout";
import { Home } from "./pages/home";
import { Popup } from "./components/popup";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Home />
      <Footer />

      <Popup />
    </div>
  );
}

export default App;
