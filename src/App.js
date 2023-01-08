import "./styles.css";
import React, { useState } from "react";

const movie = {
  Action: [
    {
      name: "Sholay (1975)",
      rating: "8.1/10"
    },
    {
      name: "RRR (2022)",
      rating: "7.9/10"
    },
    {
      name: "Singham (2011)",
      rating: "6.8/10"
    }
  ],
  Comedy: [
    {
      name: "3 Idiots (2009)",
      rating: "8.4/10"
    },
    {
      name: "Munna Bhai M.B.B.S. (2003)",
      rating: "8.1/10"
    },
    {
      name: "Hera Pheri (2000)",
      rating: "8.1/10"
    }
  ],
  Drama: [
    {
      name: "Rang De Basanti (2006)",
      rating: "8.1/10"
    },
    {
      name: "Nayak: The Real Hero (2001)",
      rating: "7.8/10"
    },
    {
      name: "Yeh Jawaani Hai Deewani (2013)",
      rating: "7.2/10"
    }
  ],
  Biography: [
    {
      name: "Rocketry: The Nambi Effect (2022)",
      rating: "8.8/10"
    },
    {
      name: "Shershaah (2021)",
      rating: "8.4/10"
    },
    {
      name: "Gandhi (1982)",
      rating: "8.0/10"
    }
  ]
};

const genreWeUse = Object.keys(movie);
export default function App() {
  const [selectedGenre, setGenre] = useState("Biography");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>🎥 My Movie Collection</h1>
      <p style={{ fontSize: "smaller" }}>
        Checkout my favorite movies. Select a genre to get started
      </p>

      <div>
        {genreWeUse.map(function (genre) {
          return (
            <button onClick={() => genreClickHandler(genre)}>{genre}</button>
          );
        })}

        <hr />

        <div style={{ textAlign: "left" }}>
          <ul>
            {movie[selectedGenre].map(function (movie) {
              return (
                <li>
                  <div>{movie.name}</div>
                  <div>{movie.rating}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
