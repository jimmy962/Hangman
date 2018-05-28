export class gameObj{
    current: String;//Is the _ _ _ _ _ string 
    state: number;// Nunmber of lives lost...starting with 0
    leng: number;//length of the word
    wins: number;// NUmber of wins this player has 
    losses: number; // number of losses this player has
    progress: number; //has 3 numbers. 0 => player lost. 1 => player won. 2 => game is still in progress
    
    constructor(){
        this.current = "";
        this.state = 0;
        this.leng = 0; //you don't know the word yet
        this.wins = 0;
        this.losses =0;
        this.progress= 2;
    }
}