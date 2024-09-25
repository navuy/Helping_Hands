import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string=""
  password:string=""
  msg:string="";
  sList:any[]=[];
  constructor(private util:NodeUtilityService,private router: Router){}

  login(form:any) {
    this.util.login(form.value.email,form.value.password).subscribe((data) => {
      if (data.status) {
        console.log("sucess")
        localStorage.setItem('user', form.value.email);
        if(data.user==2)
          this.router.navigateByUrl('helperHome');
        if(data.user==1)
          this.router.navigateByUrl('needyHome');
        if(data.user==3)
          this.router.navigateByUrl('adminHome');
      }
      this.msg = data.message;
    });
  }

}
