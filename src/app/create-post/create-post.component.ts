import { Component } from '@angular/core';
import { NodeUtilityService } from '../node-utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  msg:string=""
  user:string=""
  constructor(private util:NodeUtilityService, private router:Router){
    let u: any = localStorage.getItem('user');
    this.user = u;
  }
  createPost(form:any){
    this.util.createPost(form.value.oname,form.value.description,form.value.phone,form.value.mprice,this.user).subscribe(data=>{

      if(data.status){
        this.msg = data.message;
      }


    })

  }
}
