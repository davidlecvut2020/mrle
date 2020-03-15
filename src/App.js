import React from "react";
import "./App.css";
import ReactGA from "react-ga";

import Home from "./pages/Home";
import CategoriesFoods from "./pages/CategoriesFoods";
import FoodFilteredList from "./components/FoodFilteredList";
import Photogallery from "./pages/PhotoGallery";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";

function initializeReactGA() {
  console.log("spustim tracker");
  ReactGA.initialize("UA-160721617-1");
  ReactGA.pageview("/");
}

function App() {
  initializeReactGA();
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu/" component={CategoriesFoods} />
        <Route exact path="/menu/:slug" component={FoodFilteredList} />
        <Route exact path="/fotogalerie/" component={Photogallery} />
        <Route exact path="/kontakt/" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
