import React, { Component } from "react";
import "./App.css";
import Accordion from "./Accordion";

export default class App extends Component {
  state = {
    sections: [
      { name: "Section 1", isExpanded: true },
      { name: "Section 2", isExpanded: false },
      { name: "Section 3", isExpanded: false },
      { name: "Section 4", isExpanded: false }
    ]
  };

  handleButton = this.handleButton.bind(this);

  handleButton(itemIndex) {
    console.log("THIS IS ", this);

    const nextSectionId = itemIndex + 1;
    console.log("Clicked on index -> ", itemIndex);
    console.log("Next Section Index -> ", nextSectionId);

    this.setState(prevState => {
      const sections = [...prevState.sections];
      sections.forEach((section, index) => {
        if (index === nextSectionId) {
          section.isExpanded = true;
          // Update the label to see the one that should open change it's state.
          section.label = sections[index].name = section.name =
            sections[index].name +
            " -> Update: " +
            Math.floor(Math.random() * 100);
        } else {
          section.isExpanded = false;
        }
      });
      return {
        sections: sections
      };
    });
  }

  componentDidMount() {
    console.log("Mounted");
    console.log(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated");
    console.log("Previous State -> ", prevState);
    console.log("Current State", this.state.sections);
  }

  render() {
    return (
      <div className='App'>
        <Accordion
          sections={this.state.sections}
          handleButton={this.handleButton}
        />
      </div>
    );
  }
}
