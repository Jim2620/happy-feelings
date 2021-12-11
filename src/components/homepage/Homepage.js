import React, { useState } from "react";
import "./style.css";

const firstDialog = "How are you doing today?";
const secondDialog = "I'm listening....";
const thirdDialog = "Third Dialog";

export default function App() {
  const [textValue, setTextValue] = useState("");

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  let dialog = firstDialog;
  let bgColor = "rgb(255, 253, 181)";

  if (textValue.length > 20) {
    dialog = secondDialog;
    bgColor = "cyan";
  }

  if (textValue.length > 50) {
    dialog = thirdDialog;
    bgColor = "red";
  }

  return (
    <div>
      <div className="container">
        <p>{dialog}</p>
        <textarea
          style={{ background: bgColor }}
          rows="15"
          cols="75"
          placeholder="Tell me what happened..."
          value={textValue}
          onChange={handleChange}
        ></textarea>
        <button type="submit">I'll tell you what I think</button>
      </div>
    </div>
  );
}
