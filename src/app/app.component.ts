import { Component, NgModule, OnInit } from '@angular/core';
import { MyappService } from './myapp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private myappService: MyappService){}

  ngOnInit(): void{
    this.getUsers();
  }


  getUsers(){
    this.myappService.getUsers().subscribe(
      res => {
        this.myappService.users = res;
      },
      err => console.log(err)
    )
  }
  title = 'front-end';
}
