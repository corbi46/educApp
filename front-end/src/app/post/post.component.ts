import { Component, OnInit } from '@angular/core';
import { video } from '../models/video';
import { MyappService } from '../myapp.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(public myappservice: MyappService) { }
  
  currentVideo: video = {
    title: '',
    likes: 0,
    url: '',
    comments: [{
      username: '',
      body: ''
    }]
  }
  
  

  ngOnInit(): void {  
    this.getVideo();

  }

  getVideo(){
    this.myappservice.getVideo().subscribe(
      res => {
        this.currentVideo = <video>res;
        console.log(this.currentVideo)
      },
      err => console.log(err)
    )
  }




}
