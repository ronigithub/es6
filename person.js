// default all classes are private
// with export keyword we can import it anywhere(means publicly accessible)
export class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}
