import { Injectable } from '@angular/core';
import { SOAPService, Client } from 'ngx-soap';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private isLoginIn;
    private username;
    private client: Client;
    private token;
    public isStudent;
    public isTeacher;


    constructor (
    	private http: Http,
    	private soap: SOAPService
     ) {
        this.isLoginIn = false;
    }

    setLoginIn(){
        this.isLoginIn = true;
    }

    getLoginIn(){
        return this.isLoginIn;
    }

    setUsername(e){
        this.username = e;
    }

    getUsername(){
        return this.username;
    }

    getToken(username, password) {
        return this.http.get('https://distant.ieml.ru/login/token.php?username='+ username + '&password=' + password + '&service=local_mobile').map(response => response.json());


    }

    getData(username) {
       // //  let headers = new Headers();
       // //  headers.append('Content-type', 'text/html;charset=utf-8');
       // //  headers.append('Accept','text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8');
       // // // headers.append('origin','*');
       // //  let options = new RequestOptions();
       // //  options.headers = headers;
       //  //console.log('headers:', options);
       // //this.http.get('https://idis.ieml.ru/Education/services/studentcard?wsdl').subscribe(response =>{
        // 	//this.soap.createClient(response.text()).then((client: Client) => {
       //      //    this.client = client;
        // 		console.log('Response', username);
        // 		console.log('response2', response.text());
        //	return;
        ///	});

       return this.http.get('http://localhost:8989/user.php?username='+ username) .map(response => response.json());
    }

}
