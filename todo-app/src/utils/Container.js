import React from "react";
import { Section2 } from "../components/Section2";
import { Section3 } from "../components/Section3";

export class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
    this.addInputValue = this.addInputValue.bind(this)
  }

  addInputValue(title){
console.log(title)
    const formValue = {
id:Date.now(),
title,
created:new Date()

    }
//    console.log(formValue)
const newList = [formValue, ...this.state.list]

this.setState({list:newList})
  }
  render() {

    return (
      <main className="container d-flex ">
        <Section2  addInputValue ={this.addInputValue}/>
        <Section3 list={this.state.list}/>
      </main>
    );
  }
}
