let countElement = document.getElementById("count-element")
console.log(countElement)

let count = 0 
console.log(count)

function increment(){
    count += 1
    countElement.innerText = count
}

function decrement(){
    count -=1
    countElement.innerText = count
}

function save(){
    console.log("Passenger count: " + count)
    count = 0
    countElement.innerText = 0
}

