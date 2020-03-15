import React, { Component } from "react";
import Title from "../components/Title";
import { FoodContext } from "../context";
import Category from "../components/Category";
import Loading from "../components/Loading";
export default class CategoriesFoods extends Component {
  static contextType = FoodContext;
  componentDidMount() {
    // this.getData();
    console.log("jsem tu componentDidMount CategoriesFoods", this.context);
  }
  componentDidUpdate() {
    // this.getData();
    console.log("jsem tu componentDidUpdate CategoriesFoods", this.context);
  }
  componentWillUnmount() {
    // this.getData();
    console.log("jsem tu componentWillUnmount CategoriesFoods", this.context);
  }
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
