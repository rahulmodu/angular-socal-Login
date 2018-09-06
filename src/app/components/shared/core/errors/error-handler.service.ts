import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NotificationService} from '../../services/notification.service';
import {Router} from '@angular/router';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor(
    private injector: Injector,
  ) {}

  handleError(error: Error | HttpErrorResponse) {
    console.log(error);
    const notificationService = this.injector.get(NotificationService);
    const router = this.injector.get(Router);

    if (error instanceof HttpErrorResponse) {
      // Server error happened
      console.log('http Error');
      if (!navigator.onLine) {
        // No Internet connection
        console.log('Offline Mode Activate');
        return notificationService.notify('No Internet Connection');
      }
      // Http Error
      return notificationService.notify(`${error.status} - ${error.message}`);
    } else {
      // Client Error Happend
      console.log('Client Error Coming');

    }
    // Log the error anyway
  /*  console.error(error);*/
  }
}
