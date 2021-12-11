import React, { useState } from "react";
import "./style.css";

const firstDialog = "First Dialog";
const secondDialog = "Second Dialog";
const thirdDialog = "Third Dialog";

export default function App() {
  const [textValue, setTextValue] = useState("");

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  let dialog = firstDialog;
  let bgColor = "yellow";

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: bgColor,
        }}
      >
        <form>
          <p>{dialog}</p>
          <textarea
            style={{
              width: 750,
              height: 250,
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            placeholder="Tell me what happened..."
            value={textValue}
            onChange={handleChange}
          ></textarea>
          <button type="submit">I'll tell you what I think</button>
        </form>
      </div>
    </div>
  );
}
