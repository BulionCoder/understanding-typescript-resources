// class User {
//   protected _firstName: string = '';
//   private _lastName: string = '';

//   set firstName(name: string) {
//     if (name.trim() === '') {
//       throw new Error('Invalid name.');
//     }
//     this._firstName = name;
//   }

//   set lastName(name: string) {
//     if (name.trim() === '') {
//       throw new Error('Invalid name.');
//     }
//     this._lastName = name;
//   }

//   get fullName() {
//     return this._firstName + ' ' + this._lastName;
//   }

//   static eid = 'USER';

//   static greet() {
//     console.log('Hello!');
//   }
// }

// console.log(User.eid);
// User.greet();

// const max = new User();
// max.firstName = 'Max';
// max.lastName = '';
// // max._firstName = 'Max 2';
// console.log(max.fullName);

// class Employee extends User {
//   constructor(public jobTitle: string) {
//     super();
//     // super.firstName = 'Max';
//   }

//   work() {
//     // ...
//     console.log(this._firstName);
//     // super._firstName
//   }
// }

// abstract class UIElement {
//   constructor(public identifier: string) {}

//   clone(targetLocation: string) {
//     // logic to duplicate the UI element
//   }
// }

// // let uiElement = new UIElement();

// class SideDrawerElement extends UIElement {
//   constructor(public identifier: string, public position: 'left' | 'right') {
//     super(identifier);
//   }

//   // ...
// }

// class User {
//   constructor(private firstName: string, private lastName: string) {}
//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const daria = new User("Daria", "Bunikowska");
// console.log(daria.fullName);

class User {
  private _firstName: string = "";
  private _lastName: string = "";

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid name");
    }
    this._firstName = name;
  }

  set lastName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid name");
    }
    this._lastName = name;
  }
  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  static eid = "USER"; // you can access on the class itself
}

const daria = new User();
// daria.firstName = "Daria";
// daria.lastName = "Bunia";
// console.log(daria.fullName);
console.log(User.eid);

