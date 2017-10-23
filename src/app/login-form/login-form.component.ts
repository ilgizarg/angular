import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
    // providers: [UserService]
})
export class LoginFormComponent implements OnInit {

    username = new FormControl('', [Validators.required, Validators.email]);
    // private password;
    // private token;
    public loading = false;
    public status: any;

    constructor(
        private user: UserService,
        private router: Router
    ) {}

    ngOnInit() {
    }

    getErrorMessage() {
        return this.username.hasError('required') ? 'You must enter a value' :
            this.username.hasError('email') ? 'Not a valid email' :
                '';
    }

    loginUser(e){
        this.username = e.value;
        this.loading = true;


        this.user.getData(this.username).subscribe( response => {
            this.status = response;
            this.loading = false;
            if (this.status.exists === true) {
                this.user.setLoginIn();
                this.user.setUsername(this.username);
                this.user.isStudent = this.status.isstudent;
                this.user.isTeacher = this.status.isteacher;

                console.log(this.status.exists, this.user.getLoginIn());
                this.router.navigate(['dashboard']);
            }
            this.status.exists = 'Not Found';
            return;


        });


    }


}
