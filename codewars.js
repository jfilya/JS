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

//Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let result = Math.abs(dadYearsOld - 2 * sonYearsOld);
  return result;  
}

// Ваша задача — просуммировать различия между последовательными парами в массиве в порядке убывания.
// Например: сумма различий ([2, 1, 10]) Возвращает 9 По убыванию: [10, 2, 1] Сумма: (10 - 2) + (2 - 1) = 8 + 1 = 9
function sumOfDifferences(arr) {
  const array= arr.sort((a, b) => b - a);
  let result=0;
  for(let i=0; i<array.length-1; i++){  
      result +=  Math.abs(array[i]-array[i+1]);
  }
  return result;
}

//Переместите первую букву каждого слова в конец, а затем добавьте «ay» в конец слова. Оставьте знаки препинания нетронутыми.
function pigIt(str){
  let arrMin=[];
  let arr = str.split(' ');
  let res = [];
  let result =[];
  let total = [];
  for (let i=0;i<arr.length; i++){
   arrMin =  arr[i].split('');   
    for (let j=0; j<arrMin.length; j++){
      if(j==0){
        arrMin.push(arrMin[j]);
        arrMin.splice(arrMin[j], 1);
        if( arr[i] !='!' && arr[i] !='?'){
          arrMin.push('ay');
        }
        res = arrMin.join('');    
      }   
    }           
      result.push(res); 
      total = result.join(' ')
  }  
  return total;
}




//Вы пишете функцию, которая принимает два набора аргументов произвольной длины. Возвращаемое значение будет суммой значений всех аргументов.
const calculate = (...a)=>(...b)=> { 
  let sumA=0;
    for( let i=0; i< a.length; i++){
    sumA+=a[i];     
    }
  let sumB=0;
    for( let i=0; i< b.length; i++){
      sumB+=b[i];   
    }
  let sum = sumA+sumB;
  return sum;
}




//Функция, которая проверяет, что код купона действителен и срок его действия не истек.
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  const entDate = Date. parse(currentDate);
  const expDate = Date. parse(expirationDate);
  if (enteredCode === correctCode && entDate <= expDate){
    return true;
  } else return false; 
}
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015");



//Найдите количество пятниц 13 в данном году.
function unluckyDays(year){
  let date=0; 
  let fry=0;
  for (let i=0; i<12; i++){
    date = new Date(year, i, 13);
    if( date.getDay() === 5){
      fry++;
    } 
  }
  return fry;
}


//Верните список языков, на которых ваша тестовая оценка не ниже 60, в порядке убывания результатов.
function myLanguages(results) {
  let newRes=[];
  for (let key in results) {  
    if (results[key]>=60){
      newRes.push(key);
      }
    }
  return newRes.sort((a, b) => results[b] - results[a]);
}
myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65});
myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93});




//Для заданной строки верните список пар букв
var runLengthEncoding = function(str){
  let arr=[];
  let v=1;
  for (let i=0; i< str.length; i++){
    if( str[i] !== str [i+1]){
      arr.push([v, str[i]]);
      v=1;
    }
    else  {
      v++;
    }
  }  
  return arr;
}
runLengthEncoding("hello world!")
 //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]





//Сортировка мусора по материалам
//  lввод = [
//   {type: 'rotten apples', material: 'organic'},
//   {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
//   {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
//   {type: 'amazon box', material: 'paper'},
//   {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
// ];
// вывод = [
//   ['wine bottle', 'amazon box', 'beer bottle'],
//   ['wine bottle', 'beer bottle'],
//   ['rotten apples', 'out of date yogurt'],
//   ['out of date yogurt']
// ];
 function recycle(array) {
  const a=[];
  const paper=[];
  const glass=[];
  const organic=[];
  const plastic=[];
for (let i=0; i<array.length; i++){
  if(array[i].material==='paper' || array[i].secondMaterial==='paper'){     
    paper.push(array[i].type);
  }
 if(array[i].material === 'glass' || array[i].secondMaterial=== 'glass' ){  
    glass.push(array[i].type); 
  } 
   if(array[i].material === 'organic'  || array[i].secondMaterial=== 'organic'){  
    organic.push(array[i].type);
  }
 if(array[i].material === 'plastic' || array[i].secondMaterial=== 'plastic'){ 
    plastic.push(array[i].type); 
  }  
}
  a.push( paper,glass,organic,plastic)
  return a;
}



//функциz, которая форматирует продолжительность, заданную в виде количества секунд, удобным способом в виде количества днейб часов и т.д.
function formatDuration (seconds) {
let years = Math.floor(seconds / 31536000);
  if(years===1){
    years+=' year, ';
  }
  if(years>1){
    years+=' years, '
  }
let days = Math.floor((seconds % 31536000) / 86400);  
  if(days===1){
  days+=' day, ';
  }
  if(days>1){
    days+=' days, '
  }
let hours = Math.floor(((seconds % 31536000) % 86400) / 3600);
  if(hours===1){
  hours+=' hour';
  }
  if(hours>1){
    hours+=' hours'
  }
let minutes = Math.floor((((seconds % 31536000) % 86400)% 3600) / 60);
   if(minutes===1){
  minutes+=' minute';
  }
  if(minutes>1){
    minutes+=' minutes'
  }
                         
let second = Math.floor((((seconds % 31536000) % 86400) % 3600) %60) /1;
   if(second===1){
  second+=' second';
  }
  if(second>1){
    second+=' seconds'
  }
  if(seconds===0){
   return 'now';
 }
    else  if(seconds<60){
   return second;
 }
    else if(seconds<3600){
       if (minutes>1 || second ===0){
          return minutes;
       }
       if(minutes === 1){
         return minutes+' and '+second;
       }
   return minutes+' and '+second
 }
    else if(seconds<86400){
      if( minutes===0|| second ===0){
        return hours;
      }
      return hours+', '+minutes+' and '+second;
 }
  else if(seconds<31536000){
    if(minutes===0){
      return days+hours+' and '+second;
    }
      if(hours===0){
      return days+minutes+' and '+second;
    }
      if(second===0){
      return days+hours+' and '+minutes;
    }
   return days+hours+', '+minutes+' and '+second;
 }
  else if(seconds>=31536000){
    if(second===0){
      return years+days+hours+' and '+minutes;
    }
    if(minutes===0){
      return years+days+hours+' and '+second;
    }
    if(hours===0){
    return years+days+minutes+' and '+second;
    }
   return years+days+hours+', '+minutes+' and '+second;
 }   
}



// сортировка массива
const flip=(d, a)=>{
 console.log(d)
  if (d=='R'){
    a.sort(function(a, b) {
      return a - b;
    });
    return a;
  }
  else {
    a.sort(function(a, b) {
      return b-a;
      });
    return a;
    }
}

