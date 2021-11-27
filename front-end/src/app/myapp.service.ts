import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './models/user';
import { video } from './models/video';
@Injectable({
  providedIn: 'root'
})
export class MyappService {
  URL_API = "http://localhost:4000/api/educapp";
  id_video: string = "";

  userExist: boolean = null;

  users: user[];
  videos: video[];

  newUser: user={
    name: '',
    password: '',
    email: '',
    gender: '',
    edad: 0
  };


  currentUser: user ={
    name: '',
    password: '',
    email: '',
    gender: '',
    edad: 0
  }

  newVideo: video={
    title: '',
    likes: 0,
    url: '',
    comments: [{
      username: '',
      body: ''
    }]
  }

  constructor(private http: HttpClient) { 

  }

  getUsers(){
    console.log(this.http.get(this.URL_API));
    return this.http.get<user[]>(this.URL_API+'/');
  }

  createUser(user: user){
    return this.http.post(this.URL_API+'/', user);
  }

  getVideos(){
    return this.http.get<video[]>(this.URL_API+'/getVideos');
  }

  createVideo(video: video){
    return this.http.post(this.URL_API+'/createVideo', video);
  }

  updateVideo(video: video){
    return this.http.put(this.URL_API+'/updateVideo/'+video._id,video)
  }

  getVideo<video>(){
    return this.http.get(this.URL_API+'/getVideo/'+this.id_video);
  }

  fillId(id: string){
    this.id_video = id;
  }

}
