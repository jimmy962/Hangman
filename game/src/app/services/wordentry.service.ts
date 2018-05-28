import {Injectable} from '@angular/core'
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class WordentryService{
    constructor(private http: Http){
        console.log('Task service is initialized');
    }

    getDataObject(){
        return this.http.get('http://localhost:3000/api/starter')
            .map(res => res.json());
    }

    sendChar(newChar){
        var headers=new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('http://localhost:3000/api/char', JSON.stringify(newChar),{headers:headers})
            .map(res => res.json());
    }


}