import React from "react";
import Header from "./containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Router>
          <Routes>
            <Route path="/" exact Component={ProductListing} />
            <Route path="/project/:projectId" exact Component={ProductDetail} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
