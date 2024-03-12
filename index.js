const Number1 = +prompt("Введите первое число:");
const Number2 = +prompt("Введите второе число:");

if (Number1 > Number2) {
    console.log("Первое число больше второго.");
} else if (Number1 < Number2) {
    console.log("Первое число меньше второго.");
} else {
    console.log("Числа равны.");
}






let String1 = prompt("Введите строку: ");
const length = String1.length + 4;
const bor1 = "*".repeat(length);

console.log(bor1);

for (let i = 0; i < 1; i++) {
  console.log(`* ${String1} *`);
}

console.log(bor1);



let oroz;
const numbers = [];

console.log("Введите число (или 'токто', чтобы закончить):");

while (true) {
    oroz = prompt("Введите число (или 'токто', чтобы закончить):");

    if (oroz === "токто") {
        break;
    }

    if (!isNaN(+oroz)) {
        numbers.push(+oroz);
    }
}

console.log("Добавленные числа:", numbers);




const myObject = {
    stringProperty: "Салам, дуйно!",
    numberProperty: 42,
    booleanProperty: true,
    arrayProperty: [1, 2, 3, 4, 5],
    objectProperty: { key: "value" },
    undefinedProperty: undefined,
    nullProperty: null
 };
 
 console.log("Ключи объекта:");
 console.log(Object.keys(myObject));
 
 console.log("Значения объекта:");
 console.log(Object.values(myObject));



