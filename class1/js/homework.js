//Madlib


function madlib(name, subject) {

  return `${name}'s favorite subject is ${subject}`;
}


//tip calulator
function tipAmount(amount, levelOfService) {
  if (levelOfService === 'good') {
    return amount * .2
  } else if (levelOfService === 'fair') {
    return amount * .15
  } else {
    return amount * .1
  }
}


//tip calculator 2
function totalAmount(amount, levelOfService) {
  if (levelOfService === 'good') {
    return (amount * .2) + amount
  } else if (levelOfService === 'fair') {
    return (amount * .15) + amount
  } else {
    return (amount * .1) + amount
  }
}


//print numbers for loop
function printNumbersForLoop(startingNum, endingNum) {
  for (let i = startingNum; i <= endingNum; i++) {
    console.log(i)
  }
}

//print numbers while loop
function printNumbers(startingNum, endingNum) {
  while (startingNum <= endingNum) {
    console.log(startingNum);
    startingNum++;
  }
}

//print a square
function printSquare(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      console.log('*')
    } console.log('\n')
  }
}

//print a box
function printBox(width, height) {
  for (let i = 0; i < width; i++) {
    console.log('\n');
    for (let j = 0; j < height; j++) {
      console.log('*')
    }
  }
}
//go back to this one, always so bad at these!!


//print a banner
function printBanner(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    console.log('*')
  }
  console.log(sentence)
  for (let j = 0; j < sentence.length; j++) {
    console.log('*')
  }
}



//leetspeak
function leetSpeak(str) {
  str = str.split('')
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'A') {
      str[i] = 4;
    } else if (str[i] === 'e' || str[i] === 'E') {
      str[i] = 3;
    } else if (str[i] === 'g' || str[i] === 'G') {
      str[i] = 6;
    } else if (str[i] === 'i' || str[i] === 'I') {
      str[i] = 1;
    } else if (str[i] === 'o' || str[i] === 'O') {
      str[i] = 0;
    } else if (str[i] === 's' || str[i] === 'S') {
      str[i] = 5
    } else if (str[i] === 't' || str[i] === 'T') {
      str[i] = 7;
    }
  }
  return str.join('');
}






//Long long vowels
function longVowels(str) {
  str = str.split('')
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        str[i] = str[i] + str[i] + str[i] + str[i];
        break;
      }
    }
  }
  console.log(str.join(''))
  return str.join('')
}


//just the positives
function positiveNumbers(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      newArray.push(arr[i])
    }
  }
  return newArray;
}





