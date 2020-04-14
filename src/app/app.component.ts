import { Component } from '@angular/core';
import {TestingService} from './services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  carcompany = [];
  carddetails = [];
 constructor(public testingService: TestingService ) {
   this.carcompany = this.testingService.cars;
   this.testingService.getcardetails(this.carddetails).subscribe(carddetails = >{

   });
 }
}
