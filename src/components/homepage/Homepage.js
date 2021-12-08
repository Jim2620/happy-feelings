import React, { Component } from "react";

class homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstDialogue: "How are you doing today?",
      secondDialogue: "Go ahead, I'm listening...",
    };
  }

  // what I'm trying to target the userInput with
  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  // Attempting to create a function to dynamically change the initial question based on userinput character count

  // opening = () => {
  //   if ((inputValue: event.target.value) =< 10) {
  //     return {this.state.firstDialogue}
  //   }
  //   else ((inputValue: event.target.value) > 10) {
  //     return {this.state.secondDialogue}
  // }}


  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "yellow",
            
          }}
        >
          <form>
            <p>{this.state.firstDialogue}</p>
            <textarea
              style={{ width: 750, height: 250 }}
              placeholder="Tell me what happened..."
              onChange={this.handleChange}
            ></textarea>
            <button type="submit">I'll tell you what I think</button>
          </form>
        </div>
      </div>
    );
  }
}

export default homepage;
