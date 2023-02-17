// HTTP (Hyper text transfer protocol)
// Request --> what do we want to do
// Response --> what was actually done 

const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')
const resetButton = document.querySelector('#reset')
let game1

window.addEventListener('keypress',(e) =>{
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

// //// App commands, adjusted word lenght --> 3
// getPuzzle('3').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

//// Shows location according to the local IP
getLocation().then((location)=>{
    console.log(`You are currently: ${location.city} / ${location.country}`)
    console.log(`Timezone: ${location.timezone}`)

}).catch((err) =>{
    console.log(err)
})

//// Renders game every step
const render = () =>{
    puzzleElement.innerHTML = `<span>${game1.getPuzzle()}<span>`
    guessesElement.textContent = game1.getStatusMessage()

}

//// Reset button for game
const startGame = async ()=>{
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle,8)
    render()
}

// Start of the game via button
document.querySelector('#reset').addEventListener('click', (e) => {
    startGame()
    
});

// Initial start of the game
startGame()  

// fetch('https://puzzle.mead.io/puzzle', {}).then((response) =>{
//     if(response.status === 200){
//         response.json()
//     }else{
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then((data)=>{
//     console.log(data.puzzle)
// }).catch((err) => {
//     console.log(err)
// })


// // Output VERMEZ // Error veriyo find fonksiyonunu tanımlamıyor
// getCountry('TR').then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })



// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((err) =>{
//     console.log(err)
// })