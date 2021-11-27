import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'post/:id', component: PostComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
