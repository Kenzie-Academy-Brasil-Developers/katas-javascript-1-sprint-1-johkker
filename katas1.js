function oneThroughTwenty() {
  let counter = []
  let i = 0
    for (let a = 1; a <= 20; a++){
      counter[i++] = a 
    }  
    return counter
    
}

console.log(oneThroughTwenty())


function evensToTwenty() {
    
   let counter = []
   let i = 0
    for (let a = 1; a <= 20; a++){
      if(a % 2 == 0) {
        counter[i++] = a
    }  else {
        continue;
    }
  }
    return counter
    
  
}

console.log(evensToTwenty())

function oddsToTwenty() {
    
   let counter = []
   let i = 0
   for (let a = 1; a <= 20; a++){
      if(a % 2 == 0) {
        continue;
    }  else {
        counter[i++]= a 
    }
  }
    return counter
    
  
}

console.log(oddsToTwenty())

function multiplesOfFive() {
     
   let counter = []
   let i = 0
    for (let a = 5; a <= 100; a++){
      if(a % 5 != 0) {
        continue;
    }  else {
        counter[i++] = a
    }
  }
    return counter

}

console.log(multiplesOfFive())

function squareNumbers() {
     
   let counter = []
   let i = 0
    for (let a = 1; a <= 10; a++){
        counter[i++] = (a*a)
    }
      return counter

}

console.log(squareNumbers())

function countingBackwards() {
  let counter = []
  let i = 0
    for (let a = 20; a >= 1; a--){
      counter[i++] = a
    }  
    return counter
}

console.log(countingBackwards())

function evenNumbersBackwards() {
    
   let counter = []
   let i = 0 
   for (let a = 20; a >= 1; a--){
      if(a % 2 == 0) {
        counter[i++] = a
    }  else {
        continue;
    }
  }
    return counter
    
  }

console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
    
   let counter = []
   let i = 0
    for (let a = 20; a >= 1; a--){
      if(a % 2 == 0) {
        continue;
    }  else {
        counter[i++] = a
    }
  }
    return counter
   
}

console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
     
   let counter = []
   let i = 0
    for (let a = 100; a >= 5; a--){
      if(a % 5 != 0) {
        continue;
    }  else {
        counter[i++] = a
    }
  }
    return counter
}

console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
     
   let counter = []
   let i = 0
    for (let a = 10; a >= 1; a--){
        counter[i++] = (a*a)
    }
      return counter
}

console.log(squareNumbersBackwards())