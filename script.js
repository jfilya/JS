document.body.innerHTML= '<h1>Hello from JavaScript</h1>'
console.log('test 2')

var a=5;
console.log(typeof a)

console.log(0.1 + 0.2)//0.3000000000004

var b = {aa: 1, aaa:{b:2}}
JSON.stringify(b);// 
console.log(b);
// JSON.parse('{aa: 1, aaa:{b:2}}');

parseInt("045str", 10); //45 
parseInt(045+ 'str', 10);//37 здесь посчитаем число в 8ричной системе (стараемся избегать вот таких сложений))
//после запятой указываем систему 

var num = 42;
//три способа преобразования в строку
// string(num);//42
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
}//[0,1,2,3,4,5,6,7,8,9]



function sum(a,b) {
    return a+b;
}

var division = function (a, b){
    return a/b;
}








// Scope- места, где доступны переменные

// Scope:
// -global
// -local

function space() {
    var loki='loki';

    function planet() {
        var god ='god';
        console.log(loki,god);
        //здесь переменные наследуются
    }
    planet();
}
space();// loki god

function calculate () {
    var x =3, y = 5;

    function calculateInner() {
        var y = 7, c = 11;
        x += y+c;// в переменную x добавляется конструкция y+c (a=a+y+c) (3 += 7+11)
    };
    calculateInner();
    console.log('x=', x , ';','y=', y);//x=21, y=5
}
calculate();

//hoisting(всплытие) - все объявления переменных и функций всплывают вверх их непосредственного скоупа
xspace();
 function xspace(){
     console.log(xloki);
 }
var xloki='xgod'; //underfined

var yloki;
function yspace(){
    console.log(yloki);
}
yspace();
yloki = 'ygod';//underfined



// single var pattern - все переменнные, которые будут использоваться в функции, объявляются внутри функции


// global scope - самый дальний скоуп, тот за которым ничего нет
// для web  глобальный скоуп это window
//local scope