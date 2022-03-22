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




//сортировка массива по битам
function sortByBit(arr) {
  const arrBit=bit=>bit.toString(2).replace(/[0]/g,'').length;
  const sortBit = arr.sort(function(a,b){
     if (arrBit(a)===arrBit(b)){
       return (a-b);
     }
       else
      return arrBit(a)-arrBit(b)
  })
   return sortBit;
}
sortByBit([3, 8, 3, 6, 5, 7, 9, 1]) ;

//Функция, которая принимает количество лепестков каждого цветка и возвращать true, если один четный, а второй не четный и false, если наоборот.
function lovefunc(flower1, flower2){
  if((flower1+flower2)%2===0 ){
    return false;
  }
  else return true;
}

// к какому кварталу года принадлежит месяц
const quarterOf = (month) => {
  if (month <=3){
   return 1;
 } else  if (month >=4 && month <=6){
   return 2;
  } else  if (month >=7 && month <=9){
   return 3;
  } else  if (month >=10 && month <=12){
   return 4;
  }   
}



// функция, которая берет ​​коллекцию результатов сыгранных матчей и считает очки нашей команды в чемпионате. 
function points(games) {
  let result =0;
  const game = games.map(function (element){
  const arr = element.toString(',').split('');
    if (arr[0]> arr[2]){
      result+=3;
    } else if (arr[0]<arr[2]){
      result+=0;
    }
    else if (arr[0]==arr[2]){
      result+=1;
    }
})
return result;
}
points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']);


//Имея 2 лифта (с именами «левый» и «правый») в трехэтажном здании (пронумерованные от 0 до 2), напишите функцию лифта, принимающую 3 аргумента (по порядку):
// left - Текущий этаж левого лифта
// right - Текущий этаж правого лифта
// call - Этаж, который вызвал лифт
// Он должен вернуть название ближайшего к вызываемому этажу лифта ("левый"/"правый").
// В случае, когда оба лифта одинаково удалены от вызываемого этажа, выбирайте лифт справа.
function elevator(left, right, call){
  if ((Math.abs(call - left)) < (Math.abs(call- right))) {
    return 'left'
  } else return 'right'  
}

//Ваша функция принимает три аргумента:количество столбов (≥ 1);расстояние между столбами (10 – 30 метров);ширина столба (10 – 50 сантиметров).Рассчитайте расстояние между первым и последним столбом в сантиметрах (без ширины первого и последнего столба)
//
function pillars(num_pill, dist, width) {
  const distance = dist*100;
  let result = 0;
  if (num_pill == 1){
    return 0;
  } else if (num_pill == 2){
    return distance;
  } else {
  return result =((num_pill - 2) * width)+(distance * (num_pill-1));   
  }
}