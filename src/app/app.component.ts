import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, MatButtonToggleModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  currentAction: any;
  actions = [
    {route : "/home", title : "Home", icon: "house", disabled : false},
    {route : "/gpt", title : "GPT", icon: "person",  disabled : true},
  ]

constructor(private router: Router) {

}

  handleRoute(action:any) {
    this.currentAction = action;
    this.router.navigateByUrl(action.route)
  }
}
