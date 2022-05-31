const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){


    cats.push(name)
}

function destructivelyPrependCat(name){


    cats.unshift(name)
}

function destructivelyRemoveLastCat(){


    cats.pop()
}

function destructivelyRemoveFirstCat(){


    cats.shift()
}

function appendCat(name){


    const newCat = [...cats]

    newCat.push(name)
    return newCat
}

function prependCat(name){


    const newCat = [...cats]

    newCat.unshift(name)
    return newCat
}

function removeLastCat(){


    const newCat = [...cats]

    newCat.pop()
    return newCat
}

function removeFirstCat(){


    const newCat = [...cats]

    newCat.shift()
    return newCat
}