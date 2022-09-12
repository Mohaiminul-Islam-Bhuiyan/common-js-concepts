function greeting(greetingHandler , name){
    greetingHandler(name)
}

// const numbers = [44, 45, 66];
// const laptop = {price: 45000, brand: 'apple', memory: '256gb'}

function greetingHandler(name){
    console.log('good morning', name)
}

function greetEvening(name){
    console.log('good evening', name)
}

function greetNight(name){
    console.log('good night', name)
}

greeting(greetingHandler, 'tom')
greeting(greetingHandler, 'kakua')
greeting(greetingHandler, 'tuki')
greeting(greetEvening, 'nipi')
greeting(greetEvening, 'mimo')
greeting(greetNight , 'sabita')

