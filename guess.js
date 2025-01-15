const secretNumber = Math.floor(Math.random() * 100) + 1

let min = 1
let max = 100
let attempts = 0

while (true){
    attempts++

    const guess = Math.floor((  min + max) / 2)
    console.log(`Компьютер 2: Пробую число ${guess}.`);

    if (guess === secretNumber) {
        console.log(`Компьютер 2: Угадал! Число ${guess}.`);
        console.log(`Число угадано за ${attempts} попыток.`);
        break;
      } else if (guess < secretNumber) {
        console.log(`Компьютер 1: Больше.`);
        min = guess + 1;
      } else {
        console.log(`Компьютер 1: Меньше.`);
        max = guess - 1;
      }
}