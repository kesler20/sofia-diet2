import React from "react";
import { useParams } from "react-router-dom";
import { DropDownCard } from "./StyledElements";

const Recipe = () => {
  let params = useParams();

  if (params.query === "meal") {
    return (
      <DropDownCard>
        <ul>
          {JSON.parse(localStorage.getItem(params.type)).ingredients.map(
            (ingredient) => {
              return <li key={ingredient.name}>{JSON.stringify(ingredient)}</li>;
            }
          )}
        </ul>
      </DropDownCard>
    );
  } else if (params.query === "diet") {
    return (
      <DropDownCard>
        <ul>
          {JSON.parse(localStorage.getItem(params.type)).dishes.map(
            (dish) => {
              return <li key={dish.name}>{JSON.stringify(dish)}</li>;
            }
          )}
        </ul>
      </DropDownCard>
    );
  } else {
    return <h1>Hello World</h1>;
  }
};

export default Recipe;
