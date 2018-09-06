import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {AuthService} from 'angular5-social-login';
import { HttpClient } from '@angular/common/http';
const homeRouting: Routes = [
  {
    path:'',
    component:HomeComponent
  }
];
@NgModule({
  imports:[RouterModule.forRoot(homeRouting), SharedModule],
  declarations:[HomeComponent],
  providers:[AuthService]
})
export  class HomeModule {
 constructor(private http: HttpClient){

 }
}
