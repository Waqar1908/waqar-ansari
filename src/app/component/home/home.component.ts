import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  elementPositionY: number=0;
  elementPositionX: number=0;


  onHover(event: MouseEvent): void {
    // Update the position based on the mouse coordinates
    this.elementPositionX = event.clientX;
    this.elementPositionY = event.clientY;
    console.log(  this.elementPositionX,  this.elementPositionY);

    
  }
  getRadialGradient(){
    return `radial-gradient(600px at ${this.elementPositionX}px ${this.elementPositionY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
  }

}
