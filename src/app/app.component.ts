import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',

  // Define aanimations for fade in and out. 
  animations: [
    trigger('fade', [
      state('visible', style({
        opacity: 1,
      })),
      state('invisible', style({
        opacity: 0.01,
      })),
      transition('visible => invisible', [
        animate('5s')
      ]),
      transition('invisible => visible', [
        animate('5s')
      ]),
    ]),
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timersubscription: Subscription;

  title = 'imageFade';
  isVisible = true;

  img1 = "../assets/frog.png"
  img2 = "../assets/mio.jpg"
  imgShowed = this.img1

  now:number   // For time
  oldTime = 0

  ngOnInit() {
    // A timer that triggers every second
    const timersource = interval(1000);     
    this.timersubscription = timersource.subscribe(val => this.trigAnimation()); 
  }

  // Trigger the animation
  toggle() {
    console.log("Toggle!")
    this.isVisible = !this.isVisible;
  }

  // When the fade out animation is done, change the image source.
  event: any
  animEnd(event) {
    console.log('Animation Ended');
    console.log("From " + event.fromState )

    // Just change image file when the image is hidden
    if (event.fromState == "visible") {
      if (this.imgShowed == this.img1) {
        console.log("img1 is on display!")
        this.imgShowed = this.img2
      }
      else {
        console.log("img2 is on display!")
        this.imgShowed = this.img1
      }
    }
  }
  
  // Update time variable and trigger the animation every fifth second. 
  counter;
  trigAnimation() {
    this.now = Date.now();
    // Trigger the animation every 10th seconds
    this.counter = Math.round(5-(this.now-this.oldTime)/1000)
    if (this.counter<0) {
      this.counter=5
    }
    console.log(this.counter)

    if (this.now-this.oldTime > 5000) {
      this.oldTime = this.now
      this.toggle()
    }

  }

}
