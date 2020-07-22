const cardsArray = [
    {
        name: 'bird',
        img: 'img/bird.jpg',
    },
    {
        name: 'bunny',
        img: 'img/bunny.png',
    },
    {
        name: 'cat',
        img: 'img/cat.jpg',

    },
    {
        name: 'chick',
        img: 'img/chick.jpg',
    },
    {
        name: 'cow',
        img: 'img/cowimage.jpg',
    },
    {
        name: 'dog',
        img: 'img/dog.png',
    },
    {
        name: 'donkey',
        img: 'img/donkey.jpg',
    },
    {
        name: 'frog',
        img: 'img/frog.jpg',
    },
    {
        name: 'horse',
        img: 'img/horse.png',
    },
    {
        name: 'pig',
        img: 'img/pig.png',
    },
    {
        name: 'sheep',
        img: 'img/sheep.jpg',
    },
    {
        name: 'turtle',
        img: 'img/turtle.png'
    }
]

let gameGrid = cardsArray.concat(cardsArray)
gameGrid.sort(() => 0.5 - Math.random())
let count = 0
let firstGuess = ''
let secondGuess = ''
let previousGuess = null
let delay = 1500

const game = document.getElementById('game')

const grid = document.createElement('section')
grid.setAttribute('class', 'grid')

game.appendChild(grid)

gameGrid.forEach((item) => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.dataset.name = item.name
    const front = document.createElement('div')
    front.classList.add('front')
    const back = document.createElement('div')
    back.classList.add('back')

    back.style.backgroundImage = `url(${item.img})`
    grid.appendChild(card)
    card.appendChild(front)
    card.appendChild(back)
})

grid.addEventListener('click', function (event)
{
    let clicked = event.target

    if (clicked.nodeName === 'SECTION' || clicked === previousGuess || 
    clicked.parentNode.classList.contains('selected'))
    {
        return
    }
    clicked.classList.add('selected')

    if (count < 2) 
{
    count++
    if (count === 1){
        firstGuess = clicked.parentNode.dataset.name
        console.log(firstGuess)
        clicked.parentNode.classList.add('selected')
    }
    else
    {
        secondGuess = clicked.parentNode.dataset.name
        console.log(secondGuess)
        clicked.parentNode.classList.add('selected')
    }
    if(firstGuess !== '' && secondGuess !== '')
    {
        if (firstGuess === secondGuess)
        {
            setTimeout(match, delay)
            setTimeout(resetGuesses, delay)

        }
        else
        {
           setTimeout(resetGuesses, delay)
        }
    }
    previousGuess = clicked;
    
}
})


const match = () => {
    var selected = document.querySelectorAll('.selected')
    selected.forEach((card) => {
        card.classList.add('match')
    })
}
const resetGuesses = () => {
    firstGuess = ''
    secondGuess = ''
    count = 0

    var selected = document.querySelectorAll('.selected')
    selected.forEach((card) => {
        card.classList.remove('selected')
    })
}