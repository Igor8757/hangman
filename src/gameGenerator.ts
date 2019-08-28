import * as movies_json from './movies.json';


let abc: Array<string> = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

export let gameState: GameState;

export enum letterState {
    HIDDEN,
    INIT_REVEALED,
    REVEALED
}

export class Letter {
    value: string;
    state: letterState;
    constructor(letter){
        this.value = letter;
        this.state = letterState.HIDDEN;
    }
}

export class GameState {
    title: string;
    lives: number;
    letters: Array<Letter>;
    constructor(title){
        this.title = title;
        this.lives = 6;
        this.letters = []
        abc.forEach(element => {
            this.letters.push(new Letter(element))
        });
    }
}

export const getState = (value, states) => {
    console.log(value)
    console.log(states)
    let res = null;
    states.forEach(element => {
        if(element.value == value)
            res = element.state;
    });
    console.log(res)
    return res;
}

const revealLetters = (left: number) => {
    if(left == 0) return;
    let randy = Math.floor(Math.random() * gameState.letters.length);
    if(gameState.letters[randy].state == letterState.HIDDEN){
        gameState.letters[randy].state = letterState.INIT_REVEALED
        revealLetters(left - 1)
    }

}

const initTitle = () =>{
    let revealables = gameState.title.replace(' ', '').length / 4;
    revealLetters(revealables)
}


export const generateGame = () => {
    let movies = movies_json.default
    let movie = movies[Math.floor(Math.random() * movies.length)].title.toUpperCase();
    gameState = new GameState(movie);
    initTitle();
    console.log(gameState)
    return gameState;
};
