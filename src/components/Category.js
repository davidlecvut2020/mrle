import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/lunch.jpg";
import PropTypes from "prop-types";
import { memo } from "react";
const Category = memo(({ category }) => {
  const { name, slug, image } = category;
  // console.log(name);
  return (
    <article className="category">
      <div className="img-container">
        <img src={image || defaultImg} alt="category" />
        <Link to={`/menu/${slug}`} className="btn-primary food-link">
          Více
        </Link>
      </div>
      <p className="category-info">{name}</p>
    </article>
  );
});

Category.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};
export default Category;
