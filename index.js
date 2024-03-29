// дз 1
function getEmail(...emails) {
    return `${surname}${name}${Math.round(Math.random()*20)}@gmail.com`
}

let surname = prompt('your surname').trim().toLowerCase()
let name = prompt('your name').trim().toLowerCase()

let answer = getEmail(surname, name)

alert(answer);


// ---------------------------


// дз 2 1
// function showId() {
//     return Math.random().toString(36)
// }

// alert(showId());

// ----------------------

// дз 2 2
function randomID() {
    let num = +prompt('Какой длины вы хотите айди')
    let abc = "qwertyuiop0123456789"
    let result = ''
    let len = abc.length;
    
    while(result.length < num) {
        result += abc[Math.random() * len | 0]
    }
    return result
}
alert("ID "+ randomID())

// ------------------------



// дз 3

