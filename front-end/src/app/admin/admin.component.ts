import { Component, OnInit } from '@angular/core';
import { MyappService } from '../myapp.service';
import { user } from '../models/user';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public myappservice: MyappService, public modal: NgbModal) { }

  ngOnInit(): void {
    this.getUsers()
    this.getVideos()
  }

  getUsers(){
    return this.myappservice.getUsers().subscribe(
      res => {
        this.myappservice.users = res;
      },
      err => console.log(err)
    )
  }

  getVideos(){
    return this.myappservice.getVideos().subscribe(
      res => {
        this.myappservice.videos = res;
      },
      err => console.log(err)
    )
  }

  createVideo(form: NgForm){
    //console.log(form.value)
    
    this.myappservice.createVideo(form.value).subscribe(
      res => {

      },
      err => console.log(err)
    )

  }

}
