import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-needy-register',
  templateUrl: './needy-register.component.html',
  styleUrl: './needy-register.component.css'
})
export class NeedyRegisterComponent {
  msg:string=""
  oname:string=""
  otype:string=""
  fundedby:string=""
  address:string=""
  country:string=""
  phone:string=""
  email:string=""
  password:string=""

  constructor(private util:NodeUtilityService){}
  insert(form:any){
    this.util.insertNeedy(form.value.oname,form.value.otype,form.value.fundedby,form.value.address,form.value.phone,form.value.country,form.value.email,form.value.password).subscribe(data=>{

      if(data.status){
        this.msg = data.message;
      }

    })

  }
}
