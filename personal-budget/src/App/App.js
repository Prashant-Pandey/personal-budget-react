import React from 'react';
import Menu from '../Menu/Menu';
import Hero from '../Hero/Hero';
import HomePage from '../HomePage/HomePage';
import Footer from '../Footer/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AboutPage from '../AboutPage/AboutPage';
import LoginPage from '../LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <header>
        <Menu />
        <Hero />
      </header>
      <main className="container center" id="main-container" role="main">
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
