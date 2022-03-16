document.body.innerHTML= '<h1>Hello from JavaScript</h1>'
console.log('test 2')

var a=5;
console.log(typeof a)

console.log(0.1 + 0.2)//0.3000000000004

var b = {aa: 1, aaa:{b:2}}
JSON.stringify(b);// 
console.log(b)
JSON.parse('{aa: 1, aaa:{b:2}}')

parseInt("045str", 10) //45 
parseInt(045+ 'str', 10)//37 здесь посчитаем число в 8ричной системе (стараемся избегать вот таких сложений))
//после запятой указываем систему 

var num = 42
//три способа преобразования в строку
string(num);//42
num.toString();//42
" " + num; //42 (сложить строку с числом = строка)

// boolean
// ! - отрицание false
// !! - отрицание отрицания т.е. true

myArray = ['a','b','c','d'];
delete myArray[1]; // ['a', underfined,'c','d']
myArray.splice(1,1); //['a', 'c', 'd']



 var array = [];
 for (var i =0; i<10; i++){
     array.push(i);
 }
