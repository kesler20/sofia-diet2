import styled from "styled-components";

export const CardFolder = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 550px;
  border-radius: 15px;
  background-color: rgb(144, 80, 204);
  transform: rotate(10deg) translate(-40%);
  animation: roll-in-left 2s;
  box-shadow: 20px 20px 20px rgb(155, 155, 155);

  input {
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    font-size: 17px;
    background: transparent;
  }

  .create-food-btn {
    margin: 20px;
    z-index: 150;
  }

  .badge {
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: rgb(88, 88, 88);
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  .question {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Card = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 500px;
  z-index: 100;
  margin-bottom: -450px;
  height: 500px;
  border: 0.1px solid rgb(190, 190, 190);
  background-color: white;
  transform: translate(-40%);
  border-radius: 15px;
  animation: roll-in-right 2s;

  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    font-size: 17px;
    margin-left: 10px;
  }
`;

export const FoodContent = styled.div`
  margin-top: 100px;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    font-size: 17px;
    margin-left: 10px;
  }
`;

export const Badge = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: rgb(88, 88, 88);
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #9050cc;
    color: white;
  }

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    font-size: 17px;
  }
`;

export const PrimaryBtn = styled.button`
  background: linear-gradient(
    90deg,
    rgba(76, 175, 80, 1) 0%,
    rgba(49, 220, 255, 1) 100%
  );
  border: none;
  color: white;
`;

export const DangerBtn = styled.button`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 0, 1) 0%,
    rgba(255, 59, 0, 1) 34%
  );
  border: none;
  color: white;
`;

export const BtnCanvas = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const AddBtn = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: #0074d9;
  justify-content: center;
  align-items: center;
  margin: 20px;
  font-size: 30px;
  color: white;
`;

export const DeleteBtn = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: rgb(243, 9, 9);
  justify-content: center;
  align-items: center;
  margin: 20px;
  font-size: 30px;
  color: white;
  transform: rotate(-45deg);
`;
export const CreateFoodBtn = styled.button`
  margin: 20px;
  z-index: 150;
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 200px;
  width: 100%;
  height: 100%;

  h1 {
    font-size: 60px;
    /* global 92%+ browsers support */
    background: linear-gradient(
      90deg,
      rgba(0, 255, 235, 1) 36%,
      rgba(0, 255, 235, 1) 39%,
      rgba(7, 58, 187, 1) 100%
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }

  h4 {
    font-size: 30px;
    color: grey;
    font-weight: 300;
    margin: 50px 0px 50px;
  }

  h4 a {
    color: rgb(78, 78, 78);
  }
`;

export const DropDownCard = styled.div`
  width: 400px;
  height: 280px;
  padding: 10px;
  color : black;
  margin : 50px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 4px 5px 7px 7px rgba(105, 105, 105, 0.2);
`;
