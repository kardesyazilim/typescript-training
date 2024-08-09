let fruits: string[] = ['Apple', 'Orange', 'Banana'];
let fruits2: Array<string> = ['Apple', 'Orange', 'Banana'];
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
let values2: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana'];


fruits[0]; // returns Apple
fruits[1]; // returns Orange
fruits[2]; // returns Banana
fruits[3]; // returns undefined

for(var index in fruits){ 
console.log(fruits[index]); // output: Apple Orange Banana
}

for(var i = 0; i < fruits.length; i++){ 
console.log(fruits[i]); // output: Apple Orange Banana
}