import { Component, OnInit } from '@angular/core';
import { GlobalVariables } from '../GlobalVariables';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string = 'Pepito ';
  constructor(public app: AppComponent) { }

  ngOnInit(): void {

    console.log(this.app.currentUser)
  }


}
