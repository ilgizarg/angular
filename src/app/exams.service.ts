import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {UserService} from "./user.service";


@Injectable()
export class ExamsService {


    constructor (private http: Http,
                 private user: UserService) {}

    getExams(){
        if(this.user.isStudent) {
          return this.http.get('http://localhost:8989/exams.php?username=' + this.user.getUsername())
                .map(response => response.json());

        }

    }


}

