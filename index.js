 let KatzDeliLine = [];
 
 let servingNumber = 0;

function takeANumber (KatzDeliLine, string) {
  let i = KatzDeliLine.length - 1;
  
  servingNumber++;
  
  KatzDeliLine.push(`${servingNumber}`);
  
  return (`Welcome, ${servingNumber}. You are number ${KatzDeliLine.length} in line.`);
}

function nowServing(deliLine) {
  if (deliLine.length <= 0){
    return "There is nobody waiting to be served!";
  } else {
    var removePerson = deliLine.shift();
      return`Currently serving ${removePerson}`+ '.';
  }
}


function currentLine(line) {
  
  if (line.length === 0){
    return "The line is currently empty.";
  }
  for (let i = 0; i < line.length; i++) {
      
      
  }return `The line is currently: ${servingNumber.join(", ")}`;
}



