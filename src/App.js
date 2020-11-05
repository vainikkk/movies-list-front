import React from "react"
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom"
import MovieDetails from "./pages/MovieDetails/MovieDetails";

function App() {

  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:movieId" component={MovieDetails} exact/>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
