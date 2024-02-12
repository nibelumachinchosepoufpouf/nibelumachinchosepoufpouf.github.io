import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  currentAction: any;
  actions = [
    {route : "/home", title : "Home", icon: "house"},
    {route : "/gpt", title : "GPT", icon: "person"},
  ]

constructor(private router: Router) {

}

  handleRoute(action:any) {
    this.currentAction = action;
    this.router.navigateByUrl(action.route)
  }
}
