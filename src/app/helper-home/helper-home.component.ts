import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-helper-home',
  templateUrl: './helper-home.component.html',
  styleUrl: './helper-home.component.css'
})
export class HelperHomeComponent {
  user: string = '';
  posts:any[]=[];
  balance:number=0;
  msg:string="";
  msg1:string="";
  defaultValue:number=0;
  constructor(private router: Router,private util:NodeUtilityService) {
    let u: any = localStorage.getItem('user');
    this.user = u;
    if (u == null || u == '') {
      this.router.navigateByUrl('login');
    }
    this.findPosts()
    this.findBalance()
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }
  findPosts() {
    this.util.findPosts().subscribe((data) => {
      if (data.status) {
        this.posts = data.list;
      }
      this.msg = data.message;
    });
  }
  update(email:string,form:any,pname:string){
    if(this.balance<form.value.amount){
      alert("balance is less")
    }
    else{
      alert("Money Transfer Initiated")
    this.util.updateAmount(email,form.value.amount,this.user).subscribe(data=>{

      if(data.status){
        this.msg = data.message;
      }


    })
    this.util.contribute(this.user,pname,email,form.value.amount).subscribe(data=>{

      if(data.status){
        this.msg1 = data.message;
      }


    })
  }

  }
  findBalance() {
    this.util.findBalance(this.user).subscribe((data) => {
      if (data.status) {
        this.balance = data.list.amount;
      }
      this.msg = data.message;
    });
  }

  findPostsByEmail(form:any) {
    this.util.findPostsNeedy(form.value.email).subscribe((data) => {
      if (data.status) {
        this.posts = data.list;
      }
      this.msg = data.message;
    });
  }

}
