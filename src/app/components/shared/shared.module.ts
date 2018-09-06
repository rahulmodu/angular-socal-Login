import {NgModule} from '@angular/core';
import {ErrorsModule} from './core/errors/error.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NotificationService} from 'app/components/shared/services';
import {HttpService} from './services/http.service';

@NgModule({
  imports:[ErrorsModule,CommonModule, RouterModule, HttpClientModule],
  declarations:[],
  exports:[ErrorsModule],
  providers:[NotificationService,HttpService]
})
export class SharedModule{

}
