var person = {
  firstName: "Jimmy",
  lastName: "Smith",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(name) {
    var words = name.toString().split(" ");
    this.firstName = words[0] || "";
    this.lastName = words[1] || "";
  }
};

// person.fullName = "Jack Franklin"; // setter
// console.log(person.firstName); // Jack
// console.log(person.lastName); // Franklin

console.log(person.fullName); //getter
