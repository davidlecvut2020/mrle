import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/lunch.jpg";
import PropTypes from "prop-types";
import { memo } from "react";
const Galery = memo(({ galery }) => {
  const { name, slug, image } = galery;
  // console.log(name);
  return (
    <article className="category">
      <div className="img-container">
        <img src={image || defaultImg} alt="category" />
        {/* <Link to={`/fotogalerie/${slug}`} className="btn-primary food-link">
          Více
        </Link> */}
      </div>
      <p className="category-info">{name}</p>
    </article>
  );
});

Galery.propTypes = {
  galery: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired
  })
};
export default Galery;
