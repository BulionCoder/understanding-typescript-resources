// class User {
//   name: string;
//   age: number;

//   constructor(n: string, a: number) {
//     // this.name = 'Max';
//     this.name = n;
//     this.age = a;
//   }
// }

// TS shortcut (alternative version)
// class User {
//   constructor(public name: string, public age?: number) {}
// }

// Public - Private

// class User {
//   public hobbies: string[] = [];
//   constructor(public name: string, private age?: number) {}

//   // here accessing property age is possible, because we do it inside the class
//   greet() {
//     console.log(`Hello ${this.age} Smarty Pants`);
//   }
// }

// const daria = new User("Daria", 37);
// const jakub = new User("Jakub");

// daria.hobbies = ["tennis", "joga", "graphic design"];

// daria.age = 56 // accesing private property outside the class is not available

// it can be read, access, can't be re-assigned
class User {
  readonly hobbies: string[] = [];
  constructor(public name: string, private age?: number) {}

  // here accessing property age is possible, because we do it inside the class
  greet() {
    console.log(`Hello ${this.age} Smarty Pants`);
  }
}

const daria = new User("Daria", 37);
const jakub = new User("Jakub");

// daria.hobbies = ["tennis", "joga", "graphic design"]; // it won't work
daria.hobbies.push("tennis", "joga", "graphic design"); // it won't work

console.log(daria)
