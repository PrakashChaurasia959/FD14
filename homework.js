// Q1. Array Create karo
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Fruits Array:", fruits);

// Q2. First aur Last Element print karo
console.log("First Element:", fruits[0]);
console.log("Last Element:", fruits[fruits.length - 1]);

// Q3. Array me naya element add karo
fruits.push("Pineapple");
console.log("After Adding Pineapple:", fruits);

// Q4. Array se ek element remove karo
fruits.pop();
console.log("After Removing Last Element:", fruits);

// Q5. Numbers ka Sum nikalo
let numbers = [10, 20, 30, 40, 50];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Total Sum =", sum);

// Q6. Loop ke saath Array print karo
console.log("Numbers Array Elements:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}