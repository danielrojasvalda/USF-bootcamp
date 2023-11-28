//Object Enhancements Exercise
//In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to 
//“Write an ES2015 Version”.

// **********************
//Same keys and values
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
}
/* Write an ES2015 Version */
const createInstructor_sol = (firstName, lastName) => {
    return {
      firstName,
      lastName
    };
};
// **********************

// **********************
//Computed Property Names
//var favoriteNumber = 42;
//var instructor = {
//  firstName: "Colt"
//}
//instructor[favoriteNumber] = "That is my favorite!"
/* Write an ES2015 Version */
const favoriteNumber = 42;
const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};
// **********************

// **********************
//Object Methods
//var instructor = {
//    firstName: "Colt",
//    sayHi: function(){
//      return "Hi!";
//    },
//    sayBye: function(){
//      return this.firstName + " says bye!";
//    }
//  }
/* Write an ES2015 Version */
const instructor1 = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return `${this.firstName} says bye!`;
    }
};
// **********************

// **********************
//## **createAnimal function**
//Write a function which generates an animal object. The function should accepts 3 arguments:
//- species: the species of animal (‘cat’, ‘dog’)
//- verb: a string used to name a function (‘bark’, ‘bleet’)
//- noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
//Use one or more of the object enhancements we’ve covered.
function createAnimal(species, verb, noise) {
    return {
      species,
      [verb]() {
        console.log(noise);
      }
    };
}
//test
//const dog = createAnimal('dog', 'bark', 'woof');
//console.log(dog.species); // Output: dog
//dog.bark(); // Output: woof

//const cat = createAnimal('cat', 'meow', 'meow');
//console.log(cat.species); // Output: cat
//cat.meow(); // Output: meow

