import { Component, OnInit } from '@angular/core';
import { MyappService } from '../myapp.service';
import { NgForm } from '@angular/forms';
import { user } from '../models/user';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  newUser: user;

  constructor(public myappservice: MyappService) { }

  ngOnInit(): void {
    
  }

  createUser(form: NgForm ){
    console.log(form.value)
    this.myappservice.createUser(form.value).subscribe(
      res => {
        
      },
      err => console.log(err)
    )
  }


}
