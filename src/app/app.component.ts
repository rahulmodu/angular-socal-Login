import { Component } from '@angular/core';
import {NotificationService} from './components/shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private notificationService: NotificationService){
    this.subscribeNotification();
  }
  subscribeNotification(){
    this.notificationService
      .notification$
      .subscribe((data)=>{
        if(data ){
          console.log(';$$$$$$$$$$$$$$$$$$ Notification During Error Coming $$$$$$$$$$$$$$', data);
        }
      })
  }
}
