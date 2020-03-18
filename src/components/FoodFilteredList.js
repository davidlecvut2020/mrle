import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FoodContext } from "../context";
import Food from "./Food";

export default class FoodFilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  static contextType = FoodContext;
  render() {
    let { filterFoodsByIdCategory, getCurrentCategory } = this.context;
    let foods = filterFoodsByIdCategory(this.state.slug);
    if (foods.length === 0) {
      return (
        <div className="error">
          <h3> no such food could be found...</h3>
          <Link to="/menu" className="btn-primary">
            back to menu
          </Link>
        </div>
      );
    }
    let categorySelected = getCurrentCategory(this.state.slug);
    let categoryName = "";
    if (categorySelected) {
      categoryName = categorySelected.name;
    }
    return (
      <>
        <section className="category-header">
          <p className="category-name">
            {this.state.slug === "lunch" ? "Oběd 10:00 - 14:00" : categoryName}
          </p>
          <p className="category-desc">
            Projděte si naše nabídky a vyberte si, co si u nás dáte přístě!
          </p>
          <p className="category-desc">
            {this.state.slug == "main-courses"
              ? "Rýže ZDARMA ke všem hlavním chodům, možnost změny za příplatek"
              : null}
            <div />
          </p>
        </section>
        <section className="foodslist">
          <div className="foodslist-center">
            {foods.map(item => {
              return <Food key={item.id} food={item} />;
            })}
          </div>
        </section>
      </>
    );
  }
}
