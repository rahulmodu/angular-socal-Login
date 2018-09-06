import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { AppComponent } from './app.component';
import {SharedModule} from './components/shared/shared.module';
import {HomeModule} from './components/home/home.module';
import {RouterModule} from '@angular/router';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";
import {UserModule} from './components/user/user.module';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("448299312330514")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("679646580714-j4psd1bk02p0oq2viast0hnufddd8p87.apps.googleusercontent.com")
      },
    ]
);
  return config;
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
     BrowserModule, HomeModule, CommonModule, RouterModule, HttpClientModule,
     UserModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
