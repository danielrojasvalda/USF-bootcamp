import React, { useState, useEffect, Component } from 'react';
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";


/** List of jokes. */

const JokeList = ({ numJokesToGet = 5 }) => {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const generateNewJokes = async () => {
    setIsLoading(true);
    await getJokes();
  };

  const vote = (id, delta) => {
    setJokes((prevJokes) =>
      prevJokes.map((j) => (j.id === id ? { ...j, votes: j.votes + delta } : j))
    );
  };

  const getJokes = async () => {
    try {
      let jokes = [];
      let seenJokes = new Set();

      while (jokes.length < numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com", {
          headers: { Accept: "application/json" },
        });
        let { ...joke } = res.data;

        if (!seenJokes.has(joke.id)) {
          seenJokes.add(joke.id);
          jokes.push({ ...joke, votes: 0 });
        } else {
          console.log("duplicate found!");
        }
      }

      setJokes(jokes);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getJokes();
  }, []);

  let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);

  return (
    <div className="JokeList">
      <button className="JokeList-getmore" onClick={generateNewJokes}>
        Get New Jokes
      </button>

      {isLoading ? (
        <div className="loading">
          <i className="fas fa-4x fa-spinner fa-spin" />
        </div>
      ) : (
        sortedJokes.map((j) => (
          <Joke text={j.joke} key={j.id} id={j.id} votes={j.votes} vote={vote} />
        ))
      )}
    </div>
  );
};

export default JokeList;
