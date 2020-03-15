import React, { Component } from "react";
import { PageView, initGA } from "./components/Tracking";
import category from "./data/category";
import menu from "./data/menu";
import galery from "./data/gallery";

const FoodContext = React.createContext();

function initializeReactGA() {
  console.log("spustim tracker");
  initGA("UA-160721617-1");
  PageView();
}

export default class FoodProvider extends Component {
  state = {
    foods: [],
    sortedfoods: [],
    categories: [],
    photogalleries: [],
    loading: true
  };
  componentDidMount() {
    let categories = this.formatCategory(category);
    let foods = this.formatMenu(menu);
    let photogalleries = this.formatPhotogalleries(galery);
    if (!this.loading) {
      initializeReactGA();
    }
    this.setState({
      foods,
      categories: categories,
      sortedfoods: foods,
      loading: false,
      photogalleries: photogalleries
    });
  }
  formatPhotogalleries(galery) {
    let tempItems = [...galery];
    return tempItems;
  }
  formatCategory(category) {
    let tempItems = category.map(item => {
      let id = item.sys.id;
      let image = item.fields.image.fields.file.url;
      let categ = { ...item.fields, image, id };
      return categ;
    });
    return tempItems;
  }
  formatMenu(menu) {
    let tempItems = menu.map(item => {
      let id = item.sys.id;
      let image = item.fields.image.fields.file.url;
      let food = { ...item.fields, image, id };
      return food;
    });
    return tempItems;
  }
  getFood = slug => {
    let tempfoods = [...this.state.foods];
    const food = tempfoods.find(food => food.slug === slug);
    return food;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterfoods
    );
  };
  filterFoods = () => {
    let { foods, type, price } = this.state;

    let tempfoods = [...foods];
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempfoods = tempfoods.filter(food => food.type === type);
    }
    // filter by price
    tempfoods = tempfoods.filter(food => food.price <= price);
    this.setState({
      sortedfoods: tempfoods
    });
  };
  filterFoodsByIdCategory = slugCategory => {
    let tempfoods = [...this.state.foods];
    let categories = [...this.state.categories];
    let categorySelected = categories.find(
      category => category.slug === slugCategory
    );

    if (categorySelected) {
      tempfoods = tempfoods.filter(
        food => food.idCategory === categorySelected.id
      );
      return tempfoods;
    } else {
      return [];
    }
  };
  getCurrentCategory = slugCategory => {
    let categories = [...this.state.categories];
    let categorySelected = categories.find(
      category => category.slug === slugCategory
    );
    return categorySelected;
  };
  render() {
    return (
      <FoodContext.Provider
        value={{
          ...this.state,
          getfood: this.getfood,
          handleChange: this.handleChange,
          filterFoodsByIdCategory: this.filterFoodsByIdCategory,
          getCurrentCategory: this.getCurrentCategory
        }}
      >
        {this.props.children}
      </FoodContext.Provider>
    );
  }
}
const FoodConsumer = FoodContext.Consumer;

export { FoodProvider, FoodConsumer, FoodContext };

export function withFoodConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <FoodConsumer>
        {value => <Component {...props} context={value} />}
      </FoodConsumer>
    );
  };
}
