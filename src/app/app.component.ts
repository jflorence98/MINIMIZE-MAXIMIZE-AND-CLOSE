import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  state: string = 'basic-demo';

  responsiveMenu() {
    const x = document.getElementById('myTopnav');
   
  }

}
