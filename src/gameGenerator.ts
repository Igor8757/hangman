import * as movies_json from './movies.json';

/*
*
TODOS:

3 . Enable image changes on the hangman + implement lives mechanism
4 . Add the score screen.
5 . Fix words sliding over to next line (hard)
*/



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

export const revealLetter = (key: string) => {
    let res = [...gameState.hiddenLetters];
    for( var i = 0; i < res.length; i++){ 
        if ( res[i] == key ) {
            res.splice(i, 1); 
        }
    }
    console.log(res)
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
    console.log(gameState.hiddenLetters)
    initTitle();
    console.log(gameState.hiddenLetters)

    console.log(gameState)
    return gameState;
};
