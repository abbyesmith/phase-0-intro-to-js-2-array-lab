// Write your solution here!
//test 1
const cats = ["Milo", "Otis", "Garfield"];

//test 2
function destructivelyAppendCat(){
    return cats.push("Ralph");
}

//test 3
function destructivelyPrependCat(){
    return cats.unshift("Bob");
}

//test 4
function destructivelyRemoveLastCat(){
    return cats.pop(0);
}

//test 5
function destructivelyRemoveFirstCat(){
    return cats.shift(0);
}

//test 6
function appendCat(){
    return [...cats, "Broom"]
}

//test 7
function prependCat(){
    return ["Arnold", ...cats]
}

//test 8
function removeLastCat(){
    return cats.slice(0, cats.length - 1);
}

//test 9
function removeFirstCat(){
    return cats.slice(1)
}