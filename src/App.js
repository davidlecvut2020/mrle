import React from "react";
import "./App.css";
import Home from "./pages/Home";
import CategoriesFoods from "./pages/CategoriesFoods";
import FoodFilteredList from "./components/FoodFilteredList";
import Photogallery from "./pages/PhotoGallery";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import WithTracker from "./components/WithTracker";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={WithTracker(Home)} />
        <Route exact path="/menu/" component={WithTracker(CategoriesFoods)} />
        <Route
          exact
          path="/menu/:slug"
          component={WithTracker(FoodFilteredList)}
        />
        <Route
          exact
          path="/photogallery/"
          component={WithTracker(Photogallery)}
        />
        <Route exact path="/contakt/" component={WithTracker(Contact)} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
