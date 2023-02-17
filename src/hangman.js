// Class syntax
class Hangman {
    constructor(word,guessLeft){
        this.word = word.toLowerCase().split('')
    this.guessLeft = guessLeft
    this.guessedLetters = []
    this.status = 'playing'
    }
    checkStatus(){
        const finished = this.word.every((letter)=>{
            return this.guessedLetters.includes(letter) || letter === ' '
        })
        if(this.guessLeft === 0){ 
            this.status = 'failed'
        }else if(finished){
            this.status = 'finished'
        }else{
            this.status = 'playing'
        }
    }
    getStatusMessage(){
        if(this.status === 'playing'){
            return `Guess Left : ${this.guessLeft}`
        }else if(this.status === 'failed'){
            return `Nice Try :) Word was "${this.word.join('')}"`
        }else{
            return 'Great work :) You guessed the word.'
        }
    }
    getPuzzle(){
        let puzzle = ''
    
        this.word.forEach((letter)=>{
            if(this.guessedLetters.includes(letter) || letter === ' '){
                puzzle += letter
            }else{
                puzzle += '*'
            }
        });
    return puzzle
    }
    makeGuess(guess){
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess) 

        if(this.status !== 'playing'){
            return // undefined
        }
        if(isUnique){
            this.guessedLetters.push(guess)
        }if (isUnique && isBadGuess){
            this.guessLeft --
        }
        this.checkStatus()
    }
}

/*
// Const syntax
const Hangman = function(word,guessLeft){
    this.word = word.toLowerCase().split('') // her şeyi array'e ayırır
    this.guessLeft = guessLeft
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.checkStatus = function () {
    const finished = this.word.every((letter)=>{
        return this.guessedLetters.includes(letter)
    })

    // let finished = true
    // this.word.forEach((letter)=>{
    //     if(this.guessedLetters.includes(letter)){
    //     }else{
    //         finished = false
    //     }
    // })

    if(this.guessLeft === 0){ 
        this.status = 'failed'
    }else if(finished){
        this.status = 'finished'
    }else{
        this.status = 'playing'
    }
}

Hangman.prototype.getStatusMessage = function(){
    if(this.status === 'playing'){
        return `Guess Left : ${this.guessLeft}`
    }else if(this.status === 'failed'){
        return `Nice Try :) Word was "${this.word.join('')}"`
    }else{
        return 'Great work :) You guessed the word.'
    }
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ''
    
    this.word.forEach((letter)=>{
        if(this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter
        }else{
            puzzle += '*'
        }
    });
    return puzzle
}
Hangman.prototype.makeGuess = function(guess){
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess) 

    if(this.status !== 'playing'){
        return // undefined
    }
    if(isUnique){
        this.guessedLetters.push(guess)
    }if (isUnique && isBadGuess){
        this.guessLeft --
    }
    this.checkStatus()
}
*/

