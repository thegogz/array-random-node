const _ = require('lodash');

var invalidNumbers = [0];

var getRandomInt = function()
{
    let number = Math.floor(Math.random() * 10);
    if(_.includes(invalidNumbers, number)){
        console.log('there was an invalid char');
        return getRandomInt();
    }
    return number;
}

var generateRandomArray = function(length)
{
    var numArray = [];

    for (let i = 0; i < length; i++) {
        numArray.push(getRandomInt());
    }

    return numArray;
}

var onlyOneNumberArray = function(length, number)
{
    let numArray = [];
    for (let i = 0; i < length; i++) {
        numArray.push(number);
    }
    return numArray;
}

