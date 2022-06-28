import {
  Card,
  FoodContent,
  CardFolder,
  Heading,
  Badge,
  CreateFoodBtn,
} from "../components/StyledElements";
import { useEffect, React, useState } from "react";

const Food = () => {
  // food is an array of objects containing the input of the user
  // this is stored as metadata to pass to the database which converts the input into an object
  // food : [ ['name',''] , ['protein',],['calories'], ['cost'] ]
  const [food, setFood] = useState([]);
  
  useEffect(() => {
    setFood([]);
  }, []);

  const uploadFood = (target, index, metadata) => {
    let val = "";
    if (metadata === "name") {
      val = target.value.toLowerCase();
    } else {
      val = parseFloat(target.value);
    }

    let foodProperty = food;
    foodProperty[index] = [metadata, val];
    setFood(foodProperty);
    console.log(food);
  };

  const handleUserInput = (e) => {
    console.log(createFood(food));
  };

  const createFood = (foodData) => {
    if (foodData.length < 4) return null;

    let foodObject = {};
    for (let i in foodData) {
      foodObject[foodData[i][0]] = foodData[i][1];
    }

    localStorage.setItem(foodData[0][1], JSON.stringify(foodObject));
    console.log(JSON.parse(localStorage.getItem(foodData[0][1])));
    return foodObject;
  };

  return (
    <FoodContent>
      <Card>
        <form className="create-food-form" onSubmit={(e) => handleUserInput(e)}>
          <Heading>
            <Badge>
              <img
                src="https://uploads-ssl.webflow.com/612b579592e3bf93283444b6/612b69f61d22d5ca878550af_chevron-right.svg"
                loading="lazy"
                alt=""
                className="image-2-copy-copy"
              />
            </Badge>
            <p>Name ?</p>
          </Heading>
          <input
            name="foodName"
            type="text"
            required
            onChange={(e) => uploadFood(e.target, 0, "name")}
          />
          <Heading>
            <Badge>
              <img
                src="https://uploads-ssl.webflow.com/612b579592e3bf93283444b6/612b69f61d22d5ca878550af_chevron-right.svg"
                loading="lazy"
                alt=""
                className="image-2-copy-copy"
              />
            </Badge>
            <p>Protein (g) ?</p>
          </Heading>
          <input
            name="foodProtein"
            type="number"
            step="0.1"
            required
            onChange={(e) => uploadFood(e.target, 1, "protein")}
          />
          <Heading>
            <Badge>
              <img
                src="https://uploads-ssl.webflow.com/612b579592e3bf93283444b6/612b69f61d22d5ca878550af_chevron-right.svg"
                loading="lazy"
                alt=""
                className="image-2-copy-copy"
              />
            </Badge>
            <p>Calories (Kcal) ?</p>
          </Heading>
          <input
            name="foodCalories"
            type="number"
            step="0.1"
            required
            onChange={(e) => uploadFood(e.target, 2, "calories")}
          />
          <Heading>
            <Badge>
              <img
                src="https://uploads-ssl.webflow.com/612b579592e3bf93283444b6/612b69f61d22d5ca878550af_chevron-right.svg"
                loading="lazy"
                alt=""
                className="image-2-copy-copy"
              />
            </Badge>
            <p>Cost (£) ?</p>
          </Heading>
          <input
            name="foodCost"
            type="number"
            step="0.1"
            required
            onChange={(e) => uploadFood(e.target, 3, "cost")}
          />
          <CreateFoodBtn className="btn">
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
        </form>
      </Card>
      <CardFolder />
    </FoodContent>
    
  );
};

export default Food;
