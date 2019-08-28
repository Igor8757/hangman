import * as movies_json from './movies.json';


let abc: Array<string> = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

export let gameState: GameState;

export class GameState {
    title: string;
    lives: number;
    hiddenLetters: Array<string>;
    constructor(title){
        this.title = title;
        this.lives = 6;
        this.hiddenLetters = <Array<string>>[... new Set(title.split(' ').join('').split(''))];
    }
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
    console.log(gameState.hiddenLetters)
    initTitle();
    console.log(gameState.hiddenLetters)

    console.log(gameState)
    return gameState;
};
