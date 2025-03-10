let arrayOfNo = [];

// Generating random numbers and putting them in arrayOfNo array
for (let  i = 0; i < 10; i++)    {
    arrayOfNo[i] = generateRandomNumber();
};

console.log(arrayOfNo);

let totalSum = 0;

for (let i = 0; i < arrayOfNo.length; i++) {
    totalSum += arrayOfNo[i];
};

console.log("The total sum is " + totalSum);

function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 1000) + 1;
    return randomNumber;
};

