import { Component } from '@angular/core';
import { WordentryService} from './services/wordentry.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[WordentryService]
})
export class AppComponent {
  title = "Jimmy's Hangman";
}
