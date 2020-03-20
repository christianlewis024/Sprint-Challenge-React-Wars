import React from "react";
const CharCard = props => {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <p>Height: {props.height}</p>
      <p>Mass: {props.mass}</p>
      <p>Eye Color: {props.eye_color}</p>
    </>
  );
};
export default CharCard;
