// Function for checking if a card number is valid or invalid with the Luhn algorithm

function validateCred(arr) {
    let doubleDigit = 0;
    let sumNum = 0;

    if (arr.length % 2 === 0) {
        for (let i = arr.length - 1; i >= 0; i--) {

            if (i === arr.length - 1) {
                doubleDigit = arr[i];
            }
            else if ((i + 1) % 2 === 0) {
                doubleDigit = arr[i];
            }
            else {
                doubleDigit = arr[i] * 2;
            }

            if (doubleDigit > 9) {
                doubleDigit = doubleDigit - 9;
            }
            else  {
                doubleDigit = doubleDigit;
            }
            sumNum += doubleDigit;
        }

        if ((sumNum % 10) === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        for (let i = arr.length - 1; i >= 0; i--) {

            if (i === arr.length - 1) {
                doubleDigit = arr[i];
            }
            else if (i % 2 === 0) {
                doubleDigit = arr[i];
            }
            else {
                doubleDigit = arr[i] * 2;
            }

            if (doubleDigit > 9) {
                doubleDigit = doubleDigit - 9;
            }
            else  {
                doubleDigit = doubleDigit;
            }
            sumNum += doubleDigit;
        }

        if ((sumNum % 10) === 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
const myNumber = [5, 1, 3, 3, 7, 9, 1, 0, 2, 5, 7, 9]
console.log(validateCred(myNumber));

const button = document.querySelector('#button')
const message = document.querySelector('#message')

function limitLength(element, maxLength) {
    if (element.value.length > maxLength) {
        element.value = element.value.slice(0, maxLength);
    }
}

function splitNumber(string) {
    let numArray = [];
    for (let i = 0; i < string.length; i++) {
        numArray.push(parseInt(string[i]));
    }
    return numArray;
}

button.addEventListener('click', function(event) {
    event.preventDefault

    const creditCardNumberUser = [];
    const numberUser = document.querySelector('#card-number');
    console.log(numberUser);
    const valueUser = numberUser.value;
    console.log(typeof valueUser);
    const splitValue = splitNumber(valueUser);
    console.log(splitValue);

    creditCardNumberUser.push(splitValue);
    console.log(creditCardNumberUser);

    if (creditCardNumberUser[0].length < 16) {
        message.innerHTML = "Please check your number again"
        message.style.display = 'flex';
    }
    else {
        if (validateCred(creditCardNumberUser[0])) {
            message.innerHTML = "It's all good ✅";
            message.style.display = 'flex';
        }
        else {
            message.innerHTML = "Your card is not valid ❌";
            message.style.display = 'flex';
            console.log(creditCardNumberUser[0]);
        }
    }

    
}); 

// Function for putting the invalid cards into a new array

function findInvalidCards(arr) {
    let validCards = [];
    let invalidCards = [];

    for (let i = 0; i < arr.length; i++) {
        let checkCard = validateCred(arr[i]);
    
        if (checkCard === true) {
            validCards.push(arr[i]);
        }
        else {
            invalidCards.push(arr[i]);
        }
    }
    return invalidCards;
}

// Function for putting the companies who give out invalid cards into a new array

function idInvalidCardCompanies(arr) {
    let invalidIdCompanies = [];
    let checkId = findInvalidCards(arr);
    console.log(checkId);

    for (let i = 0; i < checkId.length; i++) {
        let companyId = checkId[i][0];
        let company = '';

        if (companyId === 3) {
            company = 'Amex (American Express)';
        }
        else if (companyId === 4) {
            company = 'Visa';
        }
        else if (companyId === 5) {
            company = 'Mastercard';
        }
        else if (companyId === 6) {
            company = 'Discover';
        }
        else {
            return "Company not found";
        }

        if (invalidIdCompanies.indexOf(company) === -1) {
            invalidIdCompanies.push(company);
        }
    }
    return invalidIdCompanies;
}

