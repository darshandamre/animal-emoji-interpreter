import React, { useState } from "react";
import emojiDictionary from "./emojis";
import "./styles.css";

export default function App() {
  const [meaning, setMeaning] = useState("");

  const emojiList = Object.keys(emojiDictionary);

  const emojiInputHandler = (event) => {
    let input = event.target.value;
    let meaning = emojiDictionary[input];
    if (meaning === undefined) {
      meaning = "we dont have this in database";
    }
    setMeaning(meaning);
  };

  const emojiClickHandler = (emoji) => {
    let meaning = emojiDictionary[emoji];

    setMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>search animal emojis</h1>
      <input onChange={emojiInputHandler} />

      <h2>{meaning}</h2>

      <h3>emojis known</h3>
      <div style={{ width: "95%", maxWidth: "750px", margin: "auto" }}>
        {emojiList.map((emoji) => {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
