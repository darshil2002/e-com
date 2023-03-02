import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent {

  // variables 
  invaliduser=false;

  // making form dynemic with this code 
  newuser=true;
  newuserfound(){
    this.newuser=true;
  }
  olduserfound(){
    this.newuser=false;
  }
  // dynemic form ends here 
  
  // pushing data in api and local storage ||signup 
  constructor (private http:HttpClient,private route:Router){}
  pushFormData(data:any){
    // console.log(data.name);
    localStorage.setItem('data',JSON.stringify(data));
    this.http.post(`http://localhost:3000/myUserData`,data).subscribe()
    this.newuser=false
    this.route.navigate(['app-myform'])
  }
  // signup ends here 

  // login starts here
  jumpToAuth(data:any){
    this.http.get(`http://localhost:3000/myUserData?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((result:any)=>{
      if(result && result.body && result.body.length>=1){
        console.log('authentic user you are')
        this.route.navigate(['/app-home'])
      }
      else{
        console.log('not valid')
        this.invaliduser=true;
      }
    })
  }

}
