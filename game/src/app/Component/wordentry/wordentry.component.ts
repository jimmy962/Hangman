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
    Meme: string;
    

    constructor(private entryword: WordentryService){
       this.imagePath = "https://image.ibb.co/dG3OYJ/State0.png";
       this.dataGame=new gameObj();
       this.message="Let's play!";
       this.Meme="https://image.ibb.co/euPafy/you_can_do_it_meme_generator_net_13822620.png"
       this.entryword.getDataObject()
            .subscribe(initData => {
                console.log(initData);
                this.dataGame=initData;
            })
    }  
    
    addTask(event){
        event.preventDefault();
        
        if (this.dataGame.progress==1) 
            this.message="You already won!"
        else if(this.dataGame.progress==0)
            this.message="You already lost!"
        else{
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
                    this.updatePic();
                    
                    if (this.dataGame.progress==1){ //1 means you won!
                        this.Meme="https://image.ibb.co/hUuQAy/winner.jpg";
                    }
                    else if(this.dataGame.progress==0){
                        this.Meme="https://image.ibb.co/dE9mHd/lost.jpg"
                    }         
                });
            }
            else{
                this.message= "Invalid entry. Please enter a single character or a word of length: " +this.dataGame.leng;
                this.word="";
            }
        }
        

    }
    updatePic(){
        switch(this.dataGame.state) {
            case 0: this.imagePath="https://image.ibb.co/dG3OYJ/State0.png"; break;
            case 1: this.imagePath="https://image.ibb.co/gDkFfy/State1.png"; break;
            case 2: this.imagePath="https://image.ibb.co/iYBADJ/State2.png"; break;
            case 3: this.imagePath="https://image.ibb.co/gOn6nd/State3.png"; break;
            case 4: this.imagePath="https://image.ibb.co/ex2iYJ/state4.png"; break;
            case 5: this.imagePath="https://image.ibb.co/eyZK7d/State5.png"; break;
            case 6: this.imagePath="https://image.ibb.co/jsYCSd/State6.png"; break;
            case 7: this.imagePath="https://image.ibb.co/mgMz7d/State7.png"; break;
            case 8: this.imagePath="https://image.ibb.co/gxde7d/State8.png"; break;
            case 9: this.imagePath="https://image.ibb.co/e2eVDJ/State9.png"; break;
            case 10: {this.imagePath="https://image.ibb.co/hzfsSd/State10.png"; this.dataGame.state =-1; break;}
        }  
        
    }
}

