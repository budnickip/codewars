function removeExclamationMarks(s) {  
    return s.replace(/[^\w\s]/gi, '');
  }

console.log(removeExclamationMarks('Hello World!'))