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
class User {
  constructor(public name: string, public age?: number) {}
}

const daria = new User('Max', 37);
const jakub = new User('Jakub')

