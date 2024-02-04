// Задано сторінку з 3 кнопками . Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при наведенні колір фону міняється на коричневий
//         
// Запустіть виконане завдання за допомогою Live Server 
// Перевірте виконання за допомогою команди node tests/task2.test.js

document.addEventListener('DOMContentLoaded', function () {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');
    const body = document.body;

    button1.addEventListener('click', function () {
        body.style.backgroundColor = 'rgb(0, 0, 255)';
    });

    button2.addEventListener('dblclick', function () {
        body.style.backgroundColor = 'rgb(255, 192, 203)';
    });

    button3.addEventListener('mouseover', function () {
        body.style.backgroundColor = 'rgb(165, 42, 42)';
    });
});
