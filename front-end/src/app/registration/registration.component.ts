import { Component, OnInit } from '@angular/core';
import { MyappService } from '../myapp.service';
import { NgForm } from '@angular/forms';
import { user } from '../models/user';
import { Router } from '@angular/router';
import { GlobalVariables } from '../GlobalVariables';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  newUser: user;

  constructor(public myappservice: MyappService, public router: Router, 
    public globalVariable: GlobalVariables, public app: AppComponent) { }

  ngOnInit(): void {
    
  }
  

  createUser(form: NgForm ){
    console.log(form.value)
    this.myappservice.createUser(form.value).subscribe(
      res => {
        this.globalVariable.currentUser.email = form.value.email;
        this.globalVariable.currentUser.name = form.value.name;
        this.app.loged = true;
        this.router.navigate(['/posts']);
      },
      err => console.log(err)
    );


  }


}
