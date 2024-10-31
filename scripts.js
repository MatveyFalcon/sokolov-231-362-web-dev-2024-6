function pow(x, n) {
    if (n < 0 || !Number.isInteger(n)) {
        return 'n должно быть натуральным числом.';
    }
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x; // умножаем x на себя n раз
    }
    return result; 
}

function gcd(a, b) {
    if (a < 0 || b < 0) {
        return 'a и b должны быть неотрицательными числами.';
    }
    while (b != 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function minDigit(x) {
    str = String(x).split('')
    min = 10 // любая цифра в числе (0-9) будет меньше 10, и таким образом, это значение 
             // служит начальной точкой для поиска минимальной цифры
    for (let i = 0; i < str.length; i++){
        if (str[i] < min){
            min = str[i]
        }
    }
    return min
}

function pluralizeRecords(n) {
    if (n < 0) {
        return 'n должно быть неотрицательным числом.';
    }

    let word;
    let verb;
    let foundWord;
    let lastDigit = n % 10;
    let lastTwoDigits = n % 100;

    if (lastDigit == 1 && lastTwoDigits != 11) {
        word = "запись";  // категория one
    } else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
        word = "записи";  // категория few
    } else {
        word = "записей"; // категория many
    }

    if (lastDigit == 1 && lastTwoDigits != 11) {
        verb = "была";  // для 1 записи
        foundWord = "найдена";  // для 1 записи
    } else if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
        verb = "были";  // для 2, 3, 4 записей
        foundWord = "найдены";  // для 2, 3, 4 записей
    } else {
        verb = "было";  // для 0, 5 и более записей
        foundWord = "найдено";  // для 0, 5 и более записей
    }
    
    return `В результате выполнения запроса ${verb} ${foundWord} ${n} ${word}`;
}

function fibb(n) {
    if (n < 0 || n > 1000) {
        return 'n должно быть в диапазоне от 0 до 1000.';
    }

    let a = 0, b = 1; // начальные значения для fib(0) = 0 и fib(1) = 1
    if (n == 0) return a; // если n = 0, вернём 0
    if (n == 1) return b; // если n = 1, вернём 1

    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b; // переходим к следующему шагу
        b = next;
    }
    
    return b; // возвращаем n-е число Фибоначчи
}

function handlePluralizeRecords() {
    const recordsCount = Number(document.getElementById('numberForDeclension').value); 
    const result = pluralizeRecords(recordsCount); 
    document.getElementById('declensionResult').textContent = result; 
}

function calculateGCD() {
    const a = Number(document.getElementById('gcdA').value);
    const b = Number(document.getElementById('gcdB').value);
    const result = gcd(a, b);
    document.getElementById('gcdResult').textContent = `Результат: НОД = ${result}`;
}

function findMinDigit() {
    const number = Number(document.getElementById('minDigit').value);
    const result = minDigit(number);
    document.getElementById('minDigitResult').textContent = `Наименьшая цифра: ${result}`;
}

function findFibonacci() {
    const fibNumber = Number(document.getElementById('fibonacciNumber').value);
    const result = fibb(fibNumber);
    document.getElementById('fibonacciResult').textContent = `Число Фибоначчи: ${result}`;
}

function calculatePower() {
    const base = Number(document.getElementById('base').value);
    const exponent = Number(document.getElementById('exponent').value);
    const result = pow(base, exponent);
    document.getElementById('powerResult').textContent = `Результат: ${result}`;
}

// подключение обработчиков к кнопкам
document.getElementById('powerButton').addEventListener('click', calculatePower);
document.getElementById('gcdButton').addEventListener('click', calculateGCD);
document.getElementById('minDigitButton').addEventListener('click', findMinDigit);
document.getElementById('pluralizationButton').addEventListener('click', handlePluralizeRecords);
document.getElementById('fibonacciButton').addEventListener('click', findFibonacci);
