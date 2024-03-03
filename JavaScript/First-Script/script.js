console.log("It's my first Script in JavaScript");

// Variables
let username="Matvey";
let surname="Guralskiy";
console.log("Hi!"+username+" "+surname)

let person = {
    username: 'Lebron',
    surname: 'James'
};
console.log(person.username+" "+person.surname);

// dot notation
person.username = 'John';
person.surname = 'Smith';
console.log(person);

//bracket Notation
person['username'] = 'Bob';
person['surname'] = 'Clark';
console.log(person);

// Array
let selectedAnimal = ['elephant','wolf','leon'];
console.log(selectedAnimal[0]);
selectedAnimal[3] = 'giraffe';
console.log(selectedAnimal);
console.log("The number of elements inside the array: "+selectedAnimal.length);

// Function
function parameters(){
    let yourname = "John";
    let age = 23;
    let isApprove = true;
    let noMeaning = undefined;
    let selectedColor = null;
    return [typeof yourname, typeof age, typeof isApprove, typeof noMeaning,typeof selectedColor];
}
console.log(parameters());

function locations(city, country) {
    console.log("Your city is so nice " + city + " and I really love your country " + country)
}
locations('Tel-aviv', 'Israel');

function square(number) {
    return number*number
}
console.log("Your number to square is "+square(4))


function factorial(number){
    if (number == 0) {
        return 1;
    } else {
        return factorial(number-1) * number;
    }
}
console.log("Your number 5 equal to factorial "+factorial(5));
