import {Component} from '@angular/core';
import {HttpService} from '../shared/services';
import {HttpClient, HttpEventType, HttpRequest} from '@angular/common/http';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import {RequestOptions} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector:'home',
  templateUrl:'./home.component.html'
})
export class HomeComponent {
  popupWindow: any;
  constructor(private socialAuthService: AuthService,
              private http: HttpClient,
              private router: Router) {
    var that = this;
    window.addEventListener('message', function listen(event) {
      if (this.popupWindow){
        const cookie = event.data.token;
        if (event.data.token){

          that.popupWindow.close();
          window.removeEventListener('message', listen);
        }else{
          that.popupWindow.close();
          window.removeEventListener('message', listen);
          this.toastrService.error('something went wrong try again later', 'Error');
        }
      }


    }.bind(this));
  }
  openLoginPage(){
    this.popupWindow =  window.open('http://localhost:3000/auth/facebook', '_blank', 'width=700,height=500,left=200,top=100');
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        if (socialPlatform === 'google') {
          console.log(socialPlatform + " sign in data : ", userData);
          this.http.post('http://localhost:3000/profile', userData, {
            headers :{
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          }).subscribe((data)=>{
            alert('User Saved Success Fully');
            this.getAllUsers();
          })

        } else {

          this.http.post('http://localhost:3000/profile', userData, {
                  headers :{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  }
          }).subscribe((data)=>{
            alert('User Saved Success Fully');
            this.getAllUsers();
          })
        }

        // Now sign-in with userData

      }
    );
  }
  getAllUsers(){
    this.router.navigateByUrl('/user');
  }
  facebookLogin(){
    this.http.get('http://localhost:3000/auth/facebook')
      .subscribe((data)=>{
        alert('User Insert');
        this.router.navigateByUrl('/user');
      })
  }
}
