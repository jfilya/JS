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




//преобразовать строку в новую строку, где каждый символ в новой строке — это «(», если этот символ встречается в исходной строке только один раз, или «)», если этот символ встречается в исходной строке более одного раза. Игнорировать заглавные буквы 
function duplicateEncode(word){
  let report = word
  .toLowerCase()
  .split(',')
  .map(letter => {
    let x='';
      for (let i=0; i<letter.length; i++){
      if(letter.indexOf(letter[i]) === letter.lastIndexOf(letter[i])){
        x += '(';
      } 
      else x+= ')';
      }
  return x;
  })
  .toString('');

 console.log(report);
  }
  duplicateEncode('recede');



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



//функция, которая возвращает количество ВСЕХ элементов в массиве, включая любые внутри массивов внутреннего уровня.
function deepCount(a){
  let x = a.length;
  for (let i=0; i<a.length; i++){
  if (Array.isArray(a[i])){
      x += deepCount(a[i]);
      }
    }  
  return x;
}
deepCount([1, 2, [3, 4, [5]]]);




//
function getLengthOfMissingArray(arrayOfArrays) {
  const arr = (arrayOfArrays || [])
    .map(function(array){
      console.log(array);
      if(array == true){
        
        return array.length; 
      }
      else return 0;
    })
    .sort((a, b) => a - b);
  if (arr.includes(0)) {
    return 0;
  };
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1;
    }
  }
  return 0;
}
getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [], [ 5, 6, 7, 8, 9 ]] );





//количество пар, которые вы можете составить, предполагая, что только перчатки одного цвета могут образовывать пары.
function numberOfPairs(gloves){
  const arr = gloves.slice().sort();
  let pair =0;
  for (let i=1; i<arr.length; i++){
  if (arr[i-1] === arr[i]){
      pair++;
      i++;
    } 
  } 
  return pair;
}
numberOfPairs(["red", "green", "red", "blue", "blue"]);


