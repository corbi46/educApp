import { Component, OnInit } from '@angular/core';
import { MyappService } from '../myapp.service';
import { user } from '../models/user';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public myappservice: MyappService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    return this.myappservice.getUsers().subscribe(
      res => {
        this.myappservice.users = res;
      },
      err => console.log(err)
    )
  }

}
