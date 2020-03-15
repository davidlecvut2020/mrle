import React, { Component } from "react";
import Title from "../components/Title";
import { FoodContext } from "../context";
import Category from "../components/Category";
import Loading from "../components/Loading";
export default class CategoriesFoods extends Component {
  static contextType = FoodContext;
  render() {
    let { loading, categories: categories } = this.context;
    categories = categories.map(category => {
      return <Category key={category.id} category={category} />;
    });
    return (
      <section className="featured-categories">
        <Title title="Menu" />
        <div className="featured-categories-center">
          {loading ? <Loading /> : categories}
        </div>
      </section>
    );
  }
}
