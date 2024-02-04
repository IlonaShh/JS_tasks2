// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js

const widthValue = document.getElementById('widthValue');
const heightValue = document.getElementById('heightValue');

function updateSize() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  widthValue.textContent = `Ширина вікна: ${screenWidth} пікселів`;
  heightValue.textContent = `Висота вікна: ${screenHeight} пікселів`;
}

updateSize();

window.addEventListener('resize', updateSize);