var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens = [...kittens, name];
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens = [name, ...kittens];
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

/*function appendKitten(name) {
  var newArray = kittens;
  newArray.push(name);
  return newArray;
}

function prependKitten(name){
  var newArray2 = kittens;
  newArray2.unshift(name);
  return newArray2;
}*/

function appendKitten(name) {
  var newArray = [...kittens, name];
  return newArray;
  //return kittens;
}

function prependKitten(name){
  var newArray2 = [name, ...kittens]
  return newArray2;
  //return kittens;
}

function removeLastKitten() {
  var newArray3 = kittens;
  newArray3.slice(0,(newArray3.length -1));
  return newArray3;
}

function removeFirstKitten() {
  var newArray4 = kittens;
  newArray4.slice(1);
  return newArray4;
}
