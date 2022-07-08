const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let line of horizontalJoin) {
        if (line.includes(word)) {
            return true
        }
    }
    let newArr = [];
    for (let i in letters[0]) {
        let newRow = [];
        for (let j in letters) {
            newRow.push(letters[j][i])
        }
        newArr.push(newRow);
    }
    const verticalJoin = newArr.map(ls => ls.join(''))
    for (let line of verticalJoin) {
        if (line.includes(word)) {
            return true
        }
    }
    return false
}



module.exports = wordSearch