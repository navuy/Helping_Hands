import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NodeUtilityService } from '../node-utility.service';

@Component({
  selector: 'app-manage-post-needy',
  templateUrl: './manage-post-needy.component.html',
  styleUrl: './manage-post-needy.component.css'
})
export class ManagePostNeedyComponent {
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
    this.util.findPostsNeedy(this.user).subscribe((data) => {
      if (data.status) {
        this.needys = data.list;
      }
      this.msg = data.message;
    });
  }
}
