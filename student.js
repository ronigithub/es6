// default all classes are private
// with export keyword we can import it anywhere(means publicly accessible)

import { Person } from "./person";

export class Student extends Person {
  constructor(name, batch) {
    super(name);
    this.batch = batch;
  }

  learn() {
    console.log("Learn");
  }
}
