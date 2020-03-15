import React from "react";
import { withFoodConsumer } from "../context";
import Loading from "./Loading";
import FoodsFilter from "./FoodsFilter";
import FoodsList from "./FoodsList";

function FoodContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <FoodsFilter rooms={rooms} />
      <FoodsList rooms={sortedRooms} />
    </>
  );
}

export default withFoodConsumer(FoodContainer);
