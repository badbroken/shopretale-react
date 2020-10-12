import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/About";
import How from "./pages/How";
import Shopper from "./pages/Shopper";
import Submit from "./pages/Submit";


function App() {
  return (
    <div>
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/how-it-works" component={How}/>
                <Route path="/shopper" component={Shopper}/>
                <Route path="/submit" component={Submit}/>
            </Switch>

        </Router>
        <Footer/>
    </div>
  );
}

export default App;
