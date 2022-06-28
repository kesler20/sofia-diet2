import { useNavigate, useParams } from "react-router-dom";
import { Table } from "../components/StyledElements";
const sizeOfDatabase = 1000;

const Database = () => {
  let params = useParams();
  let navigate = useNavigate();

  const localStorageDisplay = () => {
    let databaseItems = [];
    for (let i = 0; i < sizeOfDatabase; i++) {
      databaseItems.push(localStorage.getItem(localStorage.key(i)));
    }
    return databaseItems;
  };

  const redirect = (name) => {
    if (params.query == "meal") navigate(`/database/meal/${name}`);
    if (params.query == "diet") navigate(`/database/diet/${name}`);
  };

  const filterByQuery = () => {
    let rawItems = localStorageDisplay();
    let allItems = [];
    rawItems.forEach((i) => {
      try {
        allItems.push(JSON.parse(i));
      } catch (e) {
        console.log(e);
      }
    });
    allItems = allItems.filter((item) => item !== null);

    if (params.query === "food") {
      const filteredItems = allItems.filter((item) =>
        item.hasOwnProperty("protein")
      );
      const totalValues = filteredItems.map((item) => [
        item.protein,
        item.calories,
        item.cost,
      ]);
      for (let i in filteredItems) {
        filteredItems[i].total = totalValues[i];
      }
      return filteredItems.map((item) => JSON.stringify(item));
    }

    if (params.query === "meal") {
      return allItems
        .filter((item) => item.hasOwnProperty("ingredients"))
        .map((item) => JSON.stringify(item));
    }

    if (params.query === "diet") {
      return allItems
        .filter((item) => item.hasOwnProperty("dishes"))
        .map((item) => JSON.stringify(item));
    }

    return [<h1>The Query was Invalid</h1>];
  };

  return (
    <div style={{ margin: 50 }}>
      <Table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Total Protein (g)</th>
            <th>Total Calories (Kcal)</th>
            <th>Total Cost (£)</th>
          </tr>
          {filterByQuery().map((item) => {
            item = JSON.parse(item);
            return (
              <tr onClick={() => redirect(item.name)}>
                <td key={item.name}>{item.name}</td>
                <td key={item.name}>{item.total[0]}</td>
                <td key={item.name}>{item.total[1]}</td>
                <td key={item.name}>{item.total[2]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Database;
