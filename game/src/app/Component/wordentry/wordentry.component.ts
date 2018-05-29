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
    message: string;
    

    constructor(private entryword: WordentryService){
       this.imagePath = "https://image.ibb.co/f0zDVy/State0.png";
       this.dataGame=new gameObj();
       this.message="Let's play!";
       this.entryword.getDataObject()
            .subscribe(initData => {
                console.log(initData);
                this.dataGame=initData;
            })
    }

    
    
    addTask(event){
        event.preventDefault();
        
        
        //filter out what to send to server
        var len=this.word.length;
        if((len==1)||(len==this.dataGame.leng)){//When they send a single letter or a Word of proper size
            var newChar={stuff: this.word};
            this.entryword.sendChar(newChar).subscribe(clearEntry =>{
                this.word=""; //erases the entry  bar
                var newChar2={stuff: String, current: {x: new gameObj}}; //template for receiving the updated word
                newChar2=clearEntry;
                //var temp=clearEntry.current;
                console.log(clearEntry.current);
                //console.log(temp);
                this.dataGame=clearEntry.current;

                //which picture to show
                if(this.dataGame.progress==2){
                    this.updatePic();
                }
                else if (this.dataGame.progress==1){ //1 means you won!
                    this.imagePath="https://image.ibb.co/hUuQAy/winner.jpg";
                }
                else if(this.dataGame.progress==0){
                    this.imagePath="https://image.ibb.co/dE9mHd/lost.jpg"
                }          
            });
        
                
        }
        else{
            this.message= "Invalid entry. Please enter a single character or a word of length: " +this.dataGame.leng;
            this.word="";
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