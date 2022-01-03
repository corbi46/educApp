import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import {Injectable, NgZone} from '@angular/core';
import { BehaviorSubject, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import GoogleUser= gapi.auth2.GoogleUser;
import GoogleAuth = gapi.auth2.GoogleAuth;
import BasicProfile= gapi.auth2.BasicProfile;


@Injectable()
export class YoutubeService{
    private auth: GoogleAuth=null;
    private users= new BehaviorSubject<GoogleUser>(null);

    public isSigned = new BehaviorSubject<any>(false);
    public isAuth=new BehaviorSubject<any>(false);
    public profile : BehaviorSubject<BasicProfile>;
    private accessToken: string | null = null;


    constructor(private httpClient: HttpClient, private zone:NgZone){
        gapi.load('auth2',()=>{
            this.zone.run(()=>{
                this.initAuth();
            });
        });
    }
    initAuth(){
        const params ={
            clientId: '771271566412-h653f8fjogv1tjtt7r79qukkn9j8258g.apps.googleusercontent.com',
            discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
            scope: [
                'https://www.googleapis.com/auth/youtube',
                'https://www.googleapis.com/auth/youtube.upload'
            ].join(' ')
        };
        const auth= gapi.auth2.init(params);
        auth.then(()=> this.zone.run(()=>{
            this.auth= auth;
            this.isAuth.next(true);
        })).catch((error)=>{
            console.log(error, 'auth failed');
        });

        auth.isSignedIn.listen((value)=> this.zone.run(()=> {
            this.isSigned.next(value);
            if(!value){
                this.users.next(null);
            }
        }));
        auth.currentUser.listen((user)=> this.zone.run(()=> {
            this.users.next(user);
        }));
        if(auth.isSignedIn.get()===true){
            auth.signIn();
        }
        this.zone.run(()=> {
            this.users.next(auth.currentUser.get());
        });
    }

    public signIn(){
        this.auth.signIn({prompt: 'select_account'});
    }
    uploadVideo(video: any,
                input:{
                    title: string, description:string,
                    privacyStatus:string, tags?: string[],
                }){
                    if(!this.accessToken){
                        throw new Error('Authentication is required');
                    }
                    const data={
                        snippet:{
                            title: input.title,
                            description: input.description,
                            tags: input.tags,
                            category: 22
                        },
                        status:{
                            privacyStatus: input.privacyStatus,
                            embeddable: true
                        }
                    };
                    const headers = new HttpHeaders()
                    .set('Authorization', 'Bearer '+this.accessToken)
                    .set('Content-Type', 'application/json; charset=UTF-8')
                    .set('X-Upload-Content-Length', video.size + '')
                    .set('X-Upload-Content-Type', 'video/*');

                    const url= 'https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status,contentDetails';
                    return this.httpClient.post(url, data, {headers, observe: 'response', responseType: 'text'})
                        .pipe(switchMap(newData=>{
                            const newRequest= new HttpRequest('PUT', newData.headers.get('location'), video, {reportProgress: true});
                            return this.httpClient.request(newRequest);
                        }));
                }
        public signOut(){
            this.auth.signOut();
        }
}