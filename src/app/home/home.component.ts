import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  mouseOver = false;
  mouseOverCount = 0;


  handleMouseOver() {
    this.mouseOver= true;
    this.mouseOverCount++;
  }
  handleMouseOut() {
    this.mouseOver = false;
    this.mouseOverCount = this.mouseOverCount >= 5 ? 0 : this.mouseOverCount;
  }

}
