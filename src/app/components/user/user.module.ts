import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {AuthService} from 'angular5-social-login';
import { HttpClient } from '@angular/common/http';
import {UserComponent} from './user.component';
import {CommonModule} from '@angular/common';
const userRouting: Routes = [
  {
    path:'user',
    component:UserComponent
  }
];
@NgModule({
  imports:[RouterModule.forRoot(userRouting), SharedModule, CommonModule],
  declarations:[UserComponent],
  providers:[]
})
export  class UserModule {
}
