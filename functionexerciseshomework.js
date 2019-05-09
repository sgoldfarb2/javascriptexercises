//Positive Numbers
function positiveNumbers(arr) {
  let newArr = arr.filter(function (element) {
    return element > 0
  })

  return newArr;
}


//Even Numbers
function evenNumbers(arr) {
  let newArr = arr.filter(function (element) {
    return element % 2 === 0
  })
  return newArr;
}


//Square the numbers
function squareNumbers(arr) {
  let squaredArray = arr.map(function (element) {
    return element * element
  })

  return squaredArray
}


//Cities 1
function cities(arr) {
  let coolCities = arr.filter(function (element) {
    return element.temperature < 70
  })

  return coolCities
}



//Cities 2
function citiesTwo(arr) {
  let cityNames = arr.map(function (element) {
    return element.name
  })
  return cityNames
}


//Good job! - wish everyone in the array a good job
function goodJob(arr) {
  arr.forEach(function (element) {
    console.log(`Good Job, ${element}!`)
  })
}


//Sort an array
function sortArray(arr) {
  arr.sort()
  return arr;
}


//sort an array 2
function sortArray2(arr) {
  arr.sort(function (element1, element2) {
    return element1.length - element2.length
  })
}



//sort an array 3
function sortArray3(arr) {
  let newArr = arr.map(function (element) {
    let reducedElem = element.reduce(function (acc, currentVal) {
      return acc + currentVal
    })
    return reducedElem
  })

  return newArr
}
//doesn't work fully! go back to this




// //3 times - call the function three times!
// function fun() {
//   console.log('Hello World')
// }

// let count = 0;
// function call3Times(arg) {
//   if (count < 3) {
//     arg()
//     count++
//   }
// }


// //n times - call the function n times
// function fun() {
//   console.log('Hello World!')
// }

// let count = 0
// function callNTimes(num, func) {
//   if (count < num) {
//     func()
//     count++
//   }

// }


//sum an array
function sumAnArray(arr) {
  return arr.reduce(function (acc, currentVal) {
    return acc + currentVal
  })
}


//acronym - take letters and use reduce to create an acronym
function acronym(arr) {
  return arr.reduce(function (acc, currentElem) {
    return acc + currentElem.slice(0, 1)
  }, '')
}


