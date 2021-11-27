import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { user } from '../models/user';
import { MyappService } from '../myapp.service';
import { Router } from '@angular/router';
import { GlobalVariables } from '../GlobalVariables';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public myappservice: MyappService, private route: Router, public globalVariable: GlobalVariables, public app: AppComponent) { }

  userLogged: user={
    name: '',
    email: '',
    password: '',
    gender: '',
    edad: 0
  };

 
  ngOnInit(): void {
    this.getUsers();
    this.app.loged = false;
  }

  getUsers(){
    return this.myappservice.getUsers().subscribe(
      res => {
        this.myappservice.users = res
        console.log(this.myappservice.users.length)
      },
      err => console.log(err)
    )
  }

  logIn(userLogIn: NgForm){
    var i: number = 0;
    for(let user of this.myappservice.users){
      if(this.userLogged.email == user.email && this.userLogged.password == user.password){
        this.app.currentUser.name = user.name;
        console.log(this.app.currentUser.name);
        this.app.currentUser.email = user.email;
        this.app.currentUser.password = user.password;
        this.app.currentUser.gender = user.gender;
        this.app.currentUser.edad = user.edad;
        console.log("Usuario registrado")
        this.app.loged = true;
        this.route.navigate(['/posts']);
      }else{
        
      }
      i++;
    }
  }

  goRegister(): void{
    this.route.navigate(['/registration']);
  }

}
