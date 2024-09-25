import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-helper-register',
  templateUrl: './helper-register.component.html',
  styleUrl: './helper-register.component.css'
})
export class HelperRegisterComponent {
  msg:string=""
  constructor(private util:NodeUtilityService){}
  insert(form:any){
    this.util.insertHelper(form.value.fname,form.value.lname,form.value.gender,form.value.dob,form.value.address,form.value.phone,form.value.country,form.value.email,form.value.password).subscribe(data=>{

      if(data.status){
        this.msg = data.message;
      }


    })

  }
  
}
