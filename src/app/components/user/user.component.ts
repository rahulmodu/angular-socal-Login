import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector:'user-page',
  templateUrl:'./user.component.html'
})
export  class UserComponent {
  users: any;
  constructor(private http: HttpClient){
     this.getAllUsers();
  }
  getAllUsers(){
    this.http.get('http://localhost:3000/user')
      .subscribe((data)=>{
        console.log('Data Found');
        this.users =  data;
      })
  }

  fileChange($event){
    console.log($event.target.files[0]);
    this.getImagePreview(event).then((result)=>{
      this.http.put(`http://localhost:3000/${this.users[0]._id}`, {image: result},
        { headers :{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }}).subscribe((data)=>{
            alert('Profile Update SuccessFully');
      })
    })
  }

  getImagePreview(event){
   return new Promise((resolve, reject)=>{
     console.log(event.target.files[0]);
     const fileReader = new FileReader();
     fileReader.addEventListener('load', () => {
       console.log(fileReader.result);
       return resolve(fileReader.result);
     });
     fileReader.readAsDataURL(event.target.files[0]);
   })
  }

}
