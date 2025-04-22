let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// Зміна зображення при кліку
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/logo.png') {
        myImage.setAttribute('src', 'images/car.png');
    } else {
        myImage.setAttribute('src', 'images/logo.png');
    }
}

// Функція для введення імені
function setUserName() {
    let myName = prompt('Будь ласка, введіть ваше ім\'я.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Ласкаво просимо на наш сайт, ' + myName + '!';
    }
}

// Перевірка, чи є збережене ім'я
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ласкаво просимо на наш сайт, ' + storedName + '!';
}

// Зміна імені при натисканні кнопки
myButton.onclick = function() {
    setUserName();
}