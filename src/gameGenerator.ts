import * as movies_json from './movies.json';


let abc: Array<string> = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

export let gameState: GameState;

export enum letterState {
    HIDDEN,
    INIT_REVEALED,
    REVEALED
}

export class Letter {
    letter: string;
    state: letterState;
    constructor(letter){
        this.letter = letter;
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
        this.letters = abc.map((letter: string) => new Letter(letter));
    }
}


export const generateGame = () => {
    let movies = movies_json.default
    let movie = movies[Math.floor(Math.random() * movies.length)].title.toUpperCase();
    let gameState = new GameState(movie);
    console.log(gameState)
    return gameState;
};
