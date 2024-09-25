import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeUtilityService {

  constructor(private httpClient:HttpClient) { }
  url:string="http://localhost:5000/";
  sayHai():Observable<any>{
    return this.httpClient.get(this.url+"sayHai");
  }
  add(x:number,y:number):Observable<any>{
    return this.httpClient.get(this.url+"add?num1="+x+"&num2="+y);
  }
  insertHelper(  fname:string,lname:string,gender:string,dob:string,address:string,phone:string,country:string,email:string,password:string):Observable<any>{
    return this.httpClient.get(this.url+"insertHelper?fname="+fname+"&lname="+lname+"&gender="+gender+"&dob="+dob+"&address="+address+"&phone="+phone+"&country="+country+"&email="+email+"&password="+password);
  }
  insertNeedy(  oname:string,otype:string,fundedby:string,address:string,phone:string,country:string,email:string,password:string):Observable<any>{
    return this.httpClient.get(this.url+"insertNeedy?oname="+oname+"&otype="+otype+"&fundedby="+fundedby+"&address="+address+"&phone="+phone+"&country="+country+"&email="+email+"&password="+password);
  }
  login(email:string,password:string):Observable<any>{
    return this.httpClient.get(this.url+"login?email="+email+"&password="+password);
  }  
  findPosts():Observable<any>{
    return this.httpClient.get(this.url+"findPosts");
  } 
  updateAmount(email:string,amount:string,email1:string):Observable<any>{
    return this.httpClient.get(this.url+ "updateAmount?email="+email+"&amount="+amount+"&email1="+email1);
  }
  createPost(  oname:string,description:string,phone:string,pname:string,email:string):Observable<any>{
    return this.httpClient.get(this.url+"createPost?oname="+oname+"&description="+description+"&phone="+phone+"&pname="+pname+"&email="+email);
  }
  findBalance(email:string):Observable<any>{
    return this.httpClient.get(this.url+"findBalance?email="+email);
  } 
  findBalanceNeedy(email:string):Observable<any>{
    return this.httpClient.get(this.url+"findBalanceNeedy?email="+email);
  } 
  deleteNeedy(email:string):Observable<any>{
    return this.httpClient.get(this.url+ "deleteNeedy?email="+email);
  }
  deleteHelper(email:string):Observable<any>{
    return this.httpClient.get(this.url+ "deleteHelper?email="+email);
  }
  findUser():Observable<any>{
    return this.httpClient.get(this.url+"findUser");
  } 
  deletePost(pname:string):Observable<any>{
    return this.httpClient.get(this.url+ "deletePost?pname="+pname);
  }
  recharge(email:string,amount:string):Observable<any>{
    return this.httpClient.get(this.url+ "recharge?email="+email+"&amount="+amount);
  }
  deletePostByEmail(email:string):Observable<any>{
    return this.httpClient.get(this.url+ "deletePostByEmail?email="+email);
  }
  findPostsNeedy(email:string):Observable<any>{
    return this.httpClient.get(this.url+"findPostsByEmail?email="+email);
  } 
  contribute(  email:string,pname:string,oemail:string,amount:number):Observable<any>{
    return this.httpClient.get(this.url+"contribute?pname="+pname+"&email="+email+"&oemail="+oemail+"&amount="+amount);
  }
  findContribution(oemail:string):Observable<any>{
    return this.httpClient.get(this.url+"findContributionsByEmail?oemail="+oemail);
  } 
  findContribution1(email:string):Observable<any>{
    return this.httpClient.get(this.url+"findContributionsByEmail1?email="+email);
  } 
}
