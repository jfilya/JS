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






