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
//после запятой указываем систему счисления