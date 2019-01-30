import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

export default class AccordianOutput extends Component {
  render() {
    return (
      <div className='Accordion'>
        <Accordion>
          {this.props.sections.map((section, index) => (
            <AccordionItem key={index} expanded={section.isExpanded}>
              <AccordionItemTitle>
                <h3>{section.name}</h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                <p>Content for {section.name}</p>

                <button
                  onClick={e => {
                    this.props.handleButton(index);
                  }}
                  className='btn btn-primary'>
                  Save and Continue
                </button>
              </AccordionItemBody>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }
}
