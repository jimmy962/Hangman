import { Component } from '@angular/core';
import {WordentryService} from '../../services/wordentry.service'

@Component({
    selector: 'wordEntry',
    templateUrl : 'wordentry.component.html'
})

export class WordentryComponent{
    word: string;
    imagePath: string;
    state: number;
    constructor(private entryword: WordentryService){
       this.imagePath = "https://image.ibb.co/f0zDVy/State0.png";
       this.state=0;
    }

    

    addTask(event){
        event.preventDefault();
        
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
        
        //change picture
        this.state=this.state+1;

        switch(this.state) {
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
            case 10: {this.imagePath="https://image.ibb.co/k9o1Hd/State10.png"; this.state =-1; break;}
        }
        
        
    }
}