animal = 'cat';

function myAnimal() {
  var animal = 'dog';
  return animal;
}

function yourAnimal() {
  var animal = 'cat';
  return animal;
}

function add2(n) {
  var two = 2;
  return(n + two);
}

function funkyFunction() {
  return function() {
    return "FUNKY!";
  };
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you on
var theFunk = funkyFunction();
theFunk(); 