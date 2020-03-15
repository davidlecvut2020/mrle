import React from "react";
import "./App.css";

import Home from "./pages/Home";
import CategoriesFoods from "./pages/CategoriesFoods";
import FoodFilteredList from "./components/FoodFilteredList";
import Photogallery from "./pages/PhotoGallery";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { Switch, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu/" component={CategoriesFoods} />
          <Route exact path="/menu/:slug" component={FoodFilteredList} />
          <Route exact path="/fotogalerie/" component={Photogallery} />
          <Route exact path="/kontakt/" component={Contact} />
          <Route component={Error} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
