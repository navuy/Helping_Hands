import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-manage-post',
  templateUrl: './manage-post.component.html',
  styleUrl: './manage-post.component.css'
})
export class ManagePostComponent {

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

    this.util.deletePost(form.value.email).subscribe((data) => {
      if (data.status) {
        this.msg = data.message;
      }
    });

  }
  findUser() {
    this.util.findPosts().subscribe((data) => {
      if (data.status) {
        this.needys = data.list;
      }
      this.msg = data.message;
    });
  }
}

