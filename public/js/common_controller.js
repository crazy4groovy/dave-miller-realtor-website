import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js";

export default class extends Controller {
  static targets = ["name"];

  connect() {
    setInterval(this.logName, 2000);
    // this.element.innerText = '123';
  }

  logName() {
    console.log("myApp!", this.name);
    // console.log("myApp!", this.nameTarget.value);
  }

  get name() {
    if (!this.hasNameTarget) {
      return "NOT FOUND!";
    }
    return this.nameTarget.value;
  }
}
