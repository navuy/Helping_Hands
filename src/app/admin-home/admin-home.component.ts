import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  user: string = '';
  msg: string = '';
  msg1: string = '';
  needys:any[]=[];
  helpers:any[]=[];
  constructor(private router: Router,private util:NodeUtilityService) {
    let u: any = localStorage.getItem('user');
    this.user = u;
    if (u == null || u == '') {
      this.router.navigateByUrl('login');
    }
    this.findUser();
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }
  delete(form:any) {
    if(form.value.type=="needy"){
    this.util.deleteNeedy(form.value.email).subscribe((data) => {
      alert("The Needy and their Posts are also Deleted")
      if (data.status) {
        this.msg1 = data.message;
      }
    });
    this.util.deletePostByEmail(form.value.email).subscribe((data) => {
      if (data.status) {
        this.msg = data.message;
      }
    });
  }
  else{
    this.util.deleteHelper(form.value.email).subscribe((data) => {
      if (data.status) {
        this.msg = data.message;
      }
    });
  }
  }
  findUser() {
    this.util.findUser().subscribe((data) => {
      if (data.status) {
        this.needys = data.list;
        this.helpers = data.list1;
      }
      this.msg = data.message;
    });
  }
  recharge(form:any){
    alert("Money Transfer Initiated")
    this.util.recharge(form.value.email,form.value.amount).subscribe(data=>{

      if(data.status){
        this.msg = data.message;
      }


    })
}
}
