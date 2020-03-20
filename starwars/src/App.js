import React, { useState, useEffect } from "react";
import "./App.css";
// import Container from './components/Container';
import axios from "axios";
import CharCard from "./components/CharCard";
import styled from "styled-components";
import img from "../src/lightspeed.jpg";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const Container = styled.div`
    display: flex;
    background-image: url(${img});
    flex-direction: column;
    align-items: center;
    color: black;
    border: yellow 5px solid;
    border-radius: 10px;
    width: 40%;
    margin: 0 auto;
    margin-bottom: 1%;
  `;

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="box">
        {characters.map(character => {
          return (
            <Container>
              <CharCard
                key={character.name}
                name={character.name}
                height={character.height}
                mass={character.mass}
                eye_color={character.eye_color}
                homeworld={character.homeworld}
              />
            </Container>
          );
        })}
      </div>
    </div>
  );
};

export default App;
