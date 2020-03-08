import React from "react";

import { Header, Footer, Navigation } from "./layout";
import { Home } from "./pages/home";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
