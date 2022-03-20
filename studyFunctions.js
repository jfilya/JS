function add(left, right) {
    return left + right;
  }
add(1,10);
//concole : 11

const getFibonacci = function fibonacci(n) {
    if (n <= 1) {
      return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  getFibonacci(5);//concole : 8
//   fibonacci(10);//ReferenceError





//prototype
// const person = {
//   name: 'Maxim',
//   age :25,
//   greet: function() {
//     console.log('Greet!')
//   }
// };

const person = new Object({
  name: 'Maxim',
  age :25,
  greet: function() {
    console.log('Greet!')
  }
})
Object.prototype.sayHello = function() {
  console.log('hello');
}

const lienasss = Object.create(person);
lienasss.name = 'lena';



 // this
 function cookPie() {
   console.log(this.type);// 'lemon', 'choco'
 }
 const lemonPie = {type:'lemon'};
 const chocoPie = {type:'choco'};
 lemonPie.cookPie = cookPie;
 chocoPie.cookPie = cookPie;
 lemonPie.cookPie();
 chocoPie.cookPie();














