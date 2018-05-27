import { Component } from '@angular/core';
import {WordentryService} from '../../services/wordentry.service'

@Component({
    selector: 'wordEntry',
    templateUrl : 'wordentry.component.html'
})

export class WordentryComponent{
    title: string;
    constructor(private entryword: WordentryService){
       
    }

    addTask(event){
        event.preventDefault();
        console.log(this.title);
    }
}