import {
  Heading,
  Badge,
  Table,
  BtnCanvas,
  AddBtn,
  DeleteBtn,
  CreateFoodBtn,
  PrimaryBtn,
} from "../components/StyledElements";
import { zip, sum } from "../CommonFunctions";
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const baseFoodAmount = 100; //g
class Meal extends Component {
  state = {
    meal: {
      name: "Diet Name",
      ingredients: [{ name: "Food Name", protein: 0, calories: 0, cost: 0 }],
    },
  };

  redirect = () => {
    const navigate = useNavigate();
    navigate("/database/meal");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.createMeal}>
          <Heading>
            <Badge>
              <img
                src="https://uploads-ssl.webflow.com/612b579592e3bf93283444b6/612b69f61d22d5ca878550af_chevron-right.svg"
                loading="lazy"
                alt=""
                className="image-2-copy-copy"
              />
            </Badge>
            <p>Meal Name?</p>
            <input
              name="dietName"
              type="text"
              onChange={(e) => this.changeMealName(e.target)}
            />
          </Heading>
          <Table className="meal-table">
            <tbody>
              <tr>
                <th>Food Name</th>
                <th>Amount (g)</th>
              </tr>
              {this.state.meal.ingredients.map((food) => {
                let foodId = this.state.meal.ingredients.indexOf(food);
                return (
                  <tr key={foodId}>
                    <td>
                      <input
                        type="text"
                        onChange={(e) => this.addFoodToMeal(e.target, foodId)}
                      />
                    </td>
                    <td>
                      <input
                        name="mealAmount"
                        type="number"
                        onChange={(e) =>
                          this.multiplyByAmount(e.target, foodId)
                        }
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Table>
            <tbody>
              <tr>
                <th>Total Protein (g)</th>
                <th>Total Calories (Kcal)</th>
                <th>Total Cost (£)</th>
              </tr>
              <tr>
                <td>{this.calculateTotal()[0]}</td>
                <td>{this.calculateTotal()[1]}</td>
                <td>{this.calculateTotal()[2]}</td>
              </tr>
            </tbody>
          </Table>
          <BtnCanvas>
            <AddBtn className="btn" onClick={this.addRow}>
              <p>+</p>
            </AddBtn>
            <DeleteBtn className="btn" onClick={this.deleteRow}>
              <p>+</p>
            </DeleteBtn>
            <CreateFoodBtn className="btn" type="submit">
              Create
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15 15"
                width="12"
                height="12"
                style={{ marginLeft: "0.33em" }}
              >
                <g
                  stroke="currentColor"
                  strokeWidth="1.75"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M4.497 1H3a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-1.5h0"
                    opacity=".6"
                  ></path>
                  <path d="M9 1.008L14 1v5M14 1L6 9"></path>
                </g>
              </svg>
            </CreateFoodBtn>
          </BtnCanvas>
        </form>

        <MealInfoBtn />
      </div>
    );
  }

  createMeal = () => {
    let meal = this.state.meal;
    meal["total"] = this.calculateTotal();
    console.log(`{meal.name} created successfully ✅`, meal);
    localStorage.setItem(`${meal.name}`, JSON.stringify(meal));
  };

  changeMealName = (target) => {
    let meal = this.state.meal;
    meal.name = target.value;
    this.setState({ meal });
  };

  addFoodToMeal = (entry, foodId) => {
    let meal = this.state.meal;
    let newFood = JSON.parse(localStorage.getItem(entry.value.toLowerCase()));
    if (newFood) {
      console.log("New food added 🍲", newFood);
      console.log(`the current meal : ${meal.name}`, meal.ingredients);
      meal.ingredients[foodId] = newFood;
    }

    this.setState({ meal });
  };

  multiplyByAmount = (target, foodId) => {
    let amount = parseFloat(target.value);
    amount = amount / baseFoodAmount;
    let meal = this.state.meal;

    let food = meal.ingredients[foodId];
    let oldFood = JSON.parse(localStorage.getItem(food.name.toLowerCase()));
    console.log("this food will be modified", food);
    food.protein = oldFood.protein * amount;
    food.calories = oldFood.calories * amount;
    food.cost = oldFood.cost * amount;
    meal.ingredients[foodId] = food;

    this.setState({ meal });
  };

  addRow = () => {
    let meal = this.state.meal;
    meal.ingredients.push({});
    console.log("added a new food");
    this.setState({ meal });
  };

  deleteRow = () => {
    let meal = this.state.meal;
    meal.ingredients.pop();
    console.log("removed some food");
    this.setState({ meal });
  };

  calculateTotal = () => {
    let totalValues = [];
    let totalSumValues = [];
    for (let food of this.state.meal.ingredients) {
      totalValues.push([food.protein, food.calories, food.cost]);
    }
    totalValues = zip(totalValues);
    for (let foodPropertyValues of totalValues) {
      totalSumValues.push(sum(foodPropertyValues));
    }
    let meal = this.state.meal;
    meal.total = totalSumValues;
    return totalSumValues;
  };
}

const MealInfoBtn = () => {
  
  let navigate = useNavigate();
  
  const redirect = () => {
    navigate("/database/meal");
  };

  return (
    <PrimaryBtn className="btn info-btn" onClick={redirect}>
      Meal Info
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15 15"
        width="12"
        height="12"
        style={{ marginLeft: "0.33em" }}
      >
        <g
          stroke="currentColor"
          strokeWidth="1.75"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M4.497 1H3a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-1.5h0"
            opacity=".6"
          ></path>
          <path d="M9 1.008L14 1v5M14 1L6 9"></path>
        </g>
      </svg>
    </PrimaryBtn>
  );
};

export default Meal;
