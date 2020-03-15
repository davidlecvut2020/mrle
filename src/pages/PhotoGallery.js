import React, { Component } from "react";
import Title from "../components/Title";
import { FoodContext } from "../context";
import Galery from "../components/Gallery";
import Loading from "../components/Loading";
export default class PhotoGallery extends Component {
  static contextType = FoodContext;
  render() {
    let { loading, photogalleries: photogalleries } = this.context;

    return (
      <section className="featured-categories">
        <Title title="Photogalerie" />
        <div className="featured-categories-center">
          {loading ? (
            <Loading />
          ) : (
            <Galery images={photogalleries} showLightboxThumbnails={false} />
          )}
        </div>
      </section>
    );
  }
}
