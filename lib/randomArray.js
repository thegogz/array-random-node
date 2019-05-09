const _ = require('lodash');

let invalidNumbers = [0];

let getRandomInt = function()
{
    let number = Math.floor(Math.random() * 10);
    if(_.includes(invalidNumbers, number)){
        console.log('there was an invalid char');
        return getRandomInt();
    }
    return number;
}

let generateRandomArray = function(length)
{
    let numArray = [];

    for (let i = 0; i < length; i++) {
        numArray.push(getRandomInt());
    }

    return numArray;
}

let onlyOneNumberArray = function(length, number)
{
    let numArray = [];
    for (let i = 0; i < length; i++) {
        numArray.push(number);
    }
    return numArray;
}

module.exports = { getRandomInt : getRandomInt, generateRandomArray : generateRandomArray, onlyOneNumberArray : onlyOneNumberArray};