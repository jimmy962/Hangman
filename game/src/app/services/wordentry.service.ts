import {Injectable} from '@angular/core'
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class WordentryService{
    constructor(private http: Http){
        console.log('Task service is initialized');
    }

    
}