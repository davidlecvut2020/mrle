import React from "react";
import PropTypes from "prop-types";
import { memo } from "react";
import chilliSingle from "../images/chilli-single.png";
import chilliDouble from "../images/chilli-double.png";

const Food = memo(({ food }) => {
  const { code, name, price, description, isHot } = food;
  var imgHot = isHot === 1 ? chilliSingle : chilliDouble;
  // console.log(name);
  return (
    <article className="food">
      <div className="food-container">
        <div class="food-info">
          <span className="code">{code}</span>
          <span className="name">{name}</span>
          <span className="price">{price} Kč</span>
        </div>
        <div className="food-description">
          <span>{description}</span>
          <img className="icon-chilli" src={isHot > 0 ? imgHot : null} />
        </div>
      </div>
    </article>
  );
});

Food.propTypes = {
  food: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Food;
