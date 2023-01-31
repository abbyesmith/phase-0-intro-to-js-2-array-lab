// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (name){
    cats.push(name)
}

function destructivelyPrependCat (name='Ruby'){
    cats.unshift(name)
}

function destructivelyRemoveLastCat (){
    cats.splice(cats.length-1)
}
function destructivelyRemoveFirstCat() {
    cats.shift(1)
}

function appendCat(name='Shane') {
    return [...cats,name]
}

function prependCat(name='Lisa'){
    return [name, ...cats]
}

function removeFirstCat(){
    return cats.slice(1)
}

function removeLastCat(){
    return cats.slice(0, cats.length-1)
}