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
class Diet extends Component {
  state = {
    diet: {
      name: "Diet Name",
      dishes: [{ name: "Meal Name", ingredient: [], total: [0, 0, 0] }],
      total: [0, 0, 0],
    },
  };

  render() {
    return (
      <div>
        <form onSubmit={this.createDiet}>
          <Heading>
            <Badge>
              <img
                src="https://uploads-ssl.webflow.com/612b579592e3bf93283444b6/612b69f61d22d5ca878550af_chevron-right.svg"
                loading="lazy"
                alt=""
                className="image-2-copy-copy"
              />
            </Badge>
            <p>Day of the week ?</p>
            <input
              name="dietName"
              type="text"
              onChange={(e) => this.changeDietName(e.target)}
            />
          </Heading>
          <Table className="meal-table">
            <tbody>
              <tr>
                <th>Meal Name</th>
                <th>Amount (g)</th>
              </tr>
              {this.state.diet.dishes.map((meal) => {
                let mealId = this.state.diet.dishes.indexOf(meal);
                return (
                  <tr key={mealId}>
                    <td>
                      <input
                        type="text"
                        onChange={(e) => this.addMealToDiet(e.target, mealId)}
                      />
                    </td>
                    <td>
                      <input
                        name="mealAmount"
                        type="number"
                        onChange={(e) =>
                          this.multiplyByAmount(e.target, mealId)
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
                <td>{this.state.diet.total[0]}</td>
                <td>{this.state.diet.total[1]}</td>
                <td>{this.state.diet.total[2]}</td>
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
        <DietInfoBtn />
      </div>
    );
  }

  createDiet = () => {
    let diet = this.state.diet;
    this.calculateTotal();
    console.log(`{diet.name} created successfully ✅`, diet);
    localStorage.setItem(`${diet.name}`, JSON.stringify(diet));
  };

  changeDietName = (target) => {
    let diet = this.state.diet;
    diet.name = target.value;

    this.setState({ diet });
    this.calculateTotal();
  };

  addMealToDiet = (entry, mealId) => {
    let diet = this.state.diet;
    let newMeal = JSON.parse(localStorage.getItem(entry.value.toLowerCase()));
    if (newMeal) {
      console.log("New meal added 🍲", newMeal);
      console.log(`the current diet : ${diet.name}`, diet.dishes);
      diet.dishes[mealId] = newMeal;
    }

    this.setState({ diet });
    this.calculateTotal();
  };

  multiplyByAmount = (target, mealId) => {
    let amount = parseFloat(target.value);
    amount = amount / baseFoodAmount;
    let diet = this.state.diet;

    let meal = diet.dishes[mealId];
    let oldMeal = JSON.parse(localStorage.getItem(meal.name.toLowerCase()));
    meal.total[0] = oldMeal.total[0] * amount;
    meal.total[1] = oldMeal.total[1] * amount;
    meal.total[2] = oldMeal.total[2] * amount;
    console.log("this meal will be modified", meal);
    diet.dishes[mealId] = meal;

    this.setState({ diet });
    this.calculateTotal();
  };

  addRow = () => {
    let diet = this.state.diet;
    diet.dishes.push({});
    console.log("added a new meal");

    this.setState({ diet });
    this.calculateTotal();
  };

  deleteRow = () => {
    let diet = this.state.diet;
    diet.dishes.pop();
    console.log("removed some meal");

    this.setState({ diet });
    this.calculateTotal();
  };

  calculateTotal = () => {
    let totalValues = [];
    let totalSumValues = [];
    for (let meal of this.state.diet.dishes) {
      totalValues.push([meal.total[0], meal.total[1], meal.total[2]]);
    }

    totalValues = zip(totalValues);
    for (let mealPropertyValues of totalValues) {
      totalSumValues.push(sum(mealPropertyValues));
    }
    let diet = this.state.diet;
    diet.total = totalSumValues;
    console.log(diet);
    this.setState({ diet });
  };
}

const DietInfoBtn = () => {

  let navigate = useNavigate();

  const redirect = () => {
    navigate("/database/diet");
  };

  return (
    <PrimaryBtn className="btn info-btn" onClick={redirect}>
      Diet Info
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

export default Diet;
