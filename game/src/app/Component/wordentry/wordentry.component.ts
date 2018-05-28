import { Component } from '@angular/core';
import {WordentryService} from '../../services/wordentry.service'
import {gameObj} from '../../../gameObject'

@Component({
    selector: 'wordEntry',
    templateUrl : 'wordentry.component.html'
})

export class WordentryComponent{
    word: string;
    imagePath: string;
    dataGame: gameObj;
    

    constructor(private entryword: WordentryService){
       this.imagePath = "http://adamsouthard.com/myWork/webWork/GIT%20417/SuperheroHangmanWebsite/7_man.png";
       this.dataGame= new gameObj;
       
    }

    
    
    addTask(event){
        event.preventDefault();
        
        
        //filter out what to send to server
        var len=this.word.length;
        if(len==1){
            console.log("You entered a single character!");
        }
        else if (len==8){
            console.log('You entered a word!');
        }
        else{
            console.log('invalid entry');
        }

        //receiver the updated dataGame
        this.dataGame.current= "_ _ _ a _ _"; //simulating an updated dataGame
        this.dataGame.leng=6;
        this.dataGame.losses=2;
        this.dataGame.wins=5;
        this.dataGame.progress=0;
        this.dataGame.state=5;


        //after you get the object... start here to figure out what to show
        
        //change picture
        if(this.dataGame.progress==2){
            this.updatePic();
        }
        else if (this.dataGame.progress==1){ //1 means you won!
            this.imagePath="https://image.ibb.co/hUuQAy/winner.jpg";
        }
        else if(this.dataGame.progress==0){
            this.imagePath="https://image.ibb.co/dE9mHd/lost.jpg"
        }

    }
    updatePic(){
        switch(this.dataGame.state) {
            case 0: this.imagePath="https://image.ibb.co/f0zDVy/State0.png"; break;
            case 1: this.imagePath="https://image.ibb.co/fwxdxd/State1.png"; break;
            case 2: this.imagePath="https://image.ibb.co/cnGriJ/State2.png"; break;
            case 3: this.imagePath="https://image.ibb.co/dcZQcd/State3.png"; break;
            case 4: this.imagePath="https://image.ibb.co/bCvWHd/State4.png"; break;
            case 5: this.imagePath="https://image.ibb.co/g6f3Vy/State5.png"; break;
            case 6: this.imagePath="https://image.ibb.co/hzuVAy/State6.png"; break;
            case 7: this.imagePath="https://image.ibb.co/cGjmiJ/State7.png"; break;
            case 8: this.imagePath="https://image.ibb.co/gc76iJ/State8.png"; break;
            case 9: this.imagePath="https://image.ibb.co/mYuK3J/State9.png"; break;
            case 10: {this.imagePath="https://image.ibb.co/k9o1Hd/State10.png"; this.dataGame.state =-1; break;}
        }  

    }
}