import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyservService {

  constructor(private router:Router) { }
  validuser(){
    if(localStorage.getItem('data')){
      return true;
    }
    else{
      // this.router.navigate(['/']);
      return false;
      
    }
  }

}
