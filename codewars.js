// по количеству рукопожатий посчитать количество людей
function getParticipants(handshakes){
    let count = 1;  
    let i = 0;
  while( i <= handshakes){
      count += 1;
      i += (count - 1); 
    }
    return count ; 
  }
  getParticipants(6);








// function duplicateEncode(word){
// let lower = word.toLowerCase().split();
// console.log(lower);
// let a="";
// for (let i=0; i<lower.length; i++){
//     if (lower.indexOf[i] === lower.lastIndexOf[i]){ 
//         lower[i] = "(";
//     }
//     else lower[i] =")";
        
// }
// console.log(lower);
// return lower;
// }
//   duplicateEncode("recede");
// function duplicateEncode(word){
//     let lower = word.toLowerCase().split('');
//     let x='';
//     for (let i=0; i<=lower.length; i++){
//       if(lower.indexOf(i) == lower.lastIndexOf(i)){
//         x += '(';
//       } 
//       else x+= ')';
//       }
//   return x;
//   }
//   duplicateEncode("recede");





//возвращает сумму всех чисел, кратных 3 или 5, меньше переданного числа.
function solution(number){
    let sum=0;
      for (let i=1; i<number; i++){
        if ( i % 3 === 0 || i % 5 === 0){
          sum+=i;
        } 
      }
      return sum;
    }
    solution(50);




//Пример: использование метода slice()
function head(arr){
    let  newArr = arr.slice(0,1);
    return +newArr;
    }
    function tail(arr){
    let  newArr =arr.slice(1);
    return  newArr;
    }
    function init(arr){
    let newArr = arr.slice(0,arr.length-1);
    return newArr;
    }
    function last(arr){
    let newArr = arr.slice(arr.length-1);
    return +newArr;
    }



//функциz, которая возвращает количество ВСЕХ элементов в массиве, включая любые внутри массивов внутреннего уровня.
    function deepCount(a){
          let b = a.join();
          let c = b.split(',');
          return c.length;
      }
   deepCount([1,2,3,[1,2,[1],4]]);