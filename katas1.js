function oneThroughTwenty() {
  let counter = ""
    for (let a = 1; a <= 20; a++){
      counter += a + "\n"
    }  
    return counter
    
}

console.log(oneThroughTwenty())


function evensToTwenty() {
    
   let counter = ""
    for (let a = 1; a <= 20; a++){
      if(a % 2 == 0) {
        counter += a + "\n"
    }  else {
        counter += "\n"
    }
  }
    return counter
    
  
}

console.log(evensToTwenty())

function oddsToTwenty() {
    
   let counter = ""
    for (let a = 1; a <= 20; a++){
      if(a % 2 == 0) {
        counter += "\n"
    }  else {
        counter += a + "\n"
    }
  }
    return counter
    
  
}

console.log(oddsToTwenty())

function multiplesOfFive() {
     
   let counter = ""
    for (let a = 5; a <= 100; a++){
      if(a % 5 != 0) {
        counter += ""
    }  else {
        counter += a + "\n"
    }
  }
    return counter

}

console.log(multiplesOfFive())

function squareNumbers() {
     
   let counter = ""
    for (let a = 1; a <= 10; a++){
        counter += (a*a) + "\n"
    }
      return counter

}

console.log(squareNumbers())

function countingBackwards() {
  let counter = ""
    for (let a = 20; a >= 1; a--){
      counter += a + "\n"
    }  
    return counter
}

console.log(countingBackwards())

function evenNumbersBackwards() {
    
   let counter = ""
    for (let a = 20; a >= 1; a--){
      if(a % 2 == 0) {
        counter += a + "\n"
    }  else {
        counter += "\n"
    }
  }
    return counter
    
  }

console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
    
   let counter = ""
    for (let a = 20; a >= 1; a--){
      if(a % 2 == 0) {
        counter += "\n"
    }  else {
        counter += a + "\n"
    }
  }
    return counter
   
}

console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
     
   let counter = ""
    for (let a = 100; a >= 5; a--){
      if(a % 5 != 0) {
        counter += ""
    }  else {
        counter += a + "\n"
    }
  }
    return counter
}

console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
     
   let counter = ""
    for (let a = 10; a >= 1; a--){
        counter += (a*a) + "\n"
    }
      return counter
}

console.log(squareNumbersBackwards())