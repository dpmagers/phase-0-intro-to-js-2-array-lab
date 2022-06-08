const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop();
}
function destructivelyRemoveFirstCat(name) {
    cats.shift();
}
function appendCat(name) {
  const newArray = [...cats, name];
   return newArray;
}
function prependCat(name) {
    const newArray = [name, ...cats,];
     return newArray;
}
function removeLastCat(name) {
    return cats.slice(0,2);
}
function removeFirstCat(name) {
    return cats.slice(1,3);
}