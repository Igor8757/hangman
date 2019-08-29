import * as movies_json from './movies.json';

export let gameState: GameState;

export class GameState {
    title: string;
    lives: number;
    hiddenLetters: Array<string>;
    isWin: boolean;
    isLoss: boolean
    constructor(title){
        this.title = title;
        this.lives = 6;
        this.hiddenLetters = <Array<string>>[... new Set(title.split(' ').join('').split(''))];
        this.isLoss =  this.lives == 0
        this.isWin = this.hiddenLetters.length == 0;
    }

   
}

export const revealLetter = (key: string) => {
    if(gameState.isWin || gameState.isLoss) return gameState.hiddenLetters;
    let res = [...gameState.hiddenLetters];
    for( var i = 0; i < res.length; i++){ 
        if ( res[i] == key ) {
            res.splice(i, 1); 
        }
    }
    console.log(gameState)
    return res;
}


const initTitle = () =>{
    let toReveal = Math.round(gameState.title.replace(' ', '').length / 4);
    while(toReveal > 0){
        let randy = Math.floor(Math.random() * gameState.hiddenLetters.length);
        for( var i = 0; i < gameState.hiddenLetters.length; i++){ 
            if ( i === randy ) {
                gameState.hiddenLetters.splice(i, 1); 
            }
         }
        toReveal--; 
    }

}


export const generateGame = () => {
    let movies = movies_json.default
    let movie = movies[Math.floor(Math.random() * movies.length)].title.toUpperCase();
    gameState = new GameState(movie);
    initTitle();
    console.log(gameState)
    return gameState;
};
