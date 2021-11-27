import { Component, NgModule, OnInit } from '@angular/core';
import { MyappService } from './myapp.service';
import { GlobalVariables } from './GlobalVariables';
import { user } from './models/user';
import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(public myappService: MyappService, public route: Router, public globalVariable: GlobalVariables){}
  loged: boolean = false;

  currentUser: user = {
    name: '',
    email: '',
    password: '',
    gender: '',
    edad: 0
  }
  
  ngOnInit(): void{
    this.checkLogIn()
  }

  checkLogIn(): void{
    console.log(this.loged)
  }

  goToLogInPage(): void {
    this.route.navigate(['/home']);
  }

  goToProfile(): void{
    this.route.navigate(['/profile']);
  }

  logout(): void{
    this.currentUser.name = '';
    this.currentUser.email = '';
    this.currentUser.password = '';
    this.currentUser.gender = '';
    this.currentUser.edad = 0;
    this.loged = false;
    this.route.navigate(['/home']);
  }

  title = 'EducApp';
}
