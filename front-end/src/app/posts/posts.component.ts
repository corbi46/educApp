import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalVariables } from '../GlobalVariables';
import { MyappService } from '../myapp.service';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(public modal: NgbModal, public route: Router, public myappservice: MyappService) { }

  ngOnInit(): void {
    this.getVideos()
  }

  getVideos(){
    return this.myappservice.getVideos().subscribe(
      res => {
        this.myappservice.videos = res
        console.log(res)
      },
      err => console.log(err)
    )
  }

  goToPost(id: string){
    this.route.navigate(['/post/'+id]);
    this.myappservice.fillId(id)
  }

  comentar(form: NgForm){

  }



}
