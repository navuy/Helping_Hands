import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-needy-home',
  templateUrl: './needy-home.component.html',
  styleUrl: './needy-home.component.css'
})
export class NeedyHomeComponent {
  user: string = '';
  balance:number=0;
  msg: string = '';
  msg1: string = '';
  needys:any[]=[];
  helpers:any[]=[];
  constructor(private router: Router, private util:NodeUtilityService) {
    let u: any = localStorage.getItem('user');
    this.user = u;
    if (u == null || u == '') {
      this.router.navigateByUrl('login');
    }
    this.findBalanceNeedy();
    this.findUser();
  }
  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }
  findBalanceNeedy() {
    this.util.findBalanceNeedy(this.user).subscribe((data) => {
      if (data.status) {
        this.balance = data.list.amount;
      }
      this.msg = data.message;
    });
  }
  findUser() {
    this.util.findContribution(this.user).subscribe((data) => {
      if (data.status) {
        this.needys = data.list;
      }
      this.msg = data.message;
    });
  }
}

