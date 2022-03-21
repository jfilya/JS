// //МЕТОДЫ МАССИВОВ
const people = [
    { name: 'Владилен', age: 25, budget: 4000 },
    { name: 'Елена', age: 17, budget: 3400 },
    { name: 'Игорь', age: 49, budget: 50000 },
    { name: 'Михаил', age: 15, budget: 1800 },
    { name: 'Василиса', age: 24, budget: 25000 },
    { name: 'Виктория', age: 38, budget: 2300 }
]

for (let i=0; i< people.length; i++){
    console.log(people[i]);
}
//2 аналогичные записи
for (let person of people){
    console.log(person);
}






//ForEach
people.forEach(function(person, index, pArr){
    console.log(person);//{name: 'Владилен', age: 25, budget: 4000}
    console.log(index);// порядковый номер элемента массива (0-6)
    console.log(pArr);//(6) [{…}, {…}, {…}, {…}, {…}, {…}] весь массив
})// 


people.forEach(function(person){
    console.log(person);
})//2 аналогичные записи
people.forEach(person => console.log(person));// стрелочная функция





//Map
const newPeople = people.map(person =>{
    return 'hello'
})
console.log(newPeople);//(6) ['hello', 'hello', 'hello', 'hello', 'hello', 'hello']


const newPeoples = people.map(person =>{
    return person.name;
})
console.log(newPeoples);//(6)['Владилен', 'Елена', 'Игорь', 'Михаил', 'Василиса', 'Виктория']


const newPeoples1 = people.map(person =>{
    return `${person.name} (${person.age})`;
})
console.log(newPeoples1);//(6) ['Владилен (25)', 'Елена (17)', 'Игорь (49)', 'Михаил (15)', 'Василиса (24)', 'Виктория (38)'] новый массив где каждая строка представлена в виде строчки





//Filter
const adults =[];
for (let j=0; j< people.length; j++){
if (people[j].age >=18){
adults.push(people[j]);
    }
}
console.log(adults);
// 2 аналогичные записи
// const adult = people.filter(person =>{
//     if ( person.age >= 18){
//         return true;
//     }
// })
const adult = people.filter(person => person.age >=18);
// const adult = people.filter(person =>{
    //     if ( person.age >= 18){
    //         return true;
    //     }
    // })
console.log(adult);






//Reduce
let amount =0;
for (j=0; j< people.length; j++){
    amount += people[j].budget;
}
console.log(amount);//86500 (сумма всех значений budget)
// 2 аналогичные записи

const amounts =  people.reduce((total, person) =>total + person.budget, 0)
//тоже самое только более подробная запись
// const amounts = people.reduce((total, person) => {
// return total + person.budget;
// }, 0)
console.log(amounts);




//Find
const igor = people.find(person => person.name ==='Игорь');
console.log(igor);//{name: 'Игорь', age: 49, budget: 50000}



//FindIndex
const igorIndex = people.findIndex(person => person.name ==='Игорь');
console.log(igorIndex);//2 - номер индекса






//Пример использования методов одновременно

const newsPeople = people
.filter(person => person.budget> 3000)
.map(person => {
    return {
        info : `${person.name} (${person.age})`,
        budget: person.budget
    }
})
.reduce((total, person) =>total + person.budget, 0)
console.log(newsPeople);