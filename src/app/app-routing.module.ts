import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HelperRegisterComponent } from './helper-register/helper-register.component';
import { NeedyRegisterComponent } from './needy-register/needy-register.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelperHomeComponent } from './helper-home/helper-home.component';
import { NeedyHomeComponent } from './needy-home/needy-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { ManagePostNeedyComponent } from './manage-post-needy/manage-post-needy.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';


const routes: Routes = [ 
  { path: '', component: HomeComponent }, 
  { path: 'register', component: RegisterComponent }, 
  { path: 'helperRegister', component: HelperRegisterComponent }, 
  { path: 'needyRegister', component: NeedyRegisterComponent, }, 
  { path: 'login', component: LoginComponent, }, 
  { path: 'aboutUs', component: AboutUsComponent, }, 
  { path: 'helperHome', component: HelperHomeComponent, },
  { path: 'needyHome', component: NeedyHomeComponent, },
  { path: 'adminHome', component: AdminHomeComponent, },
  { path: 'createPost', component: CreatePostComponent, },
  { path: 'managePost', component: ManagePostComponent, },
  { path: 'managePostNeedy', component: ManagePostNeedyComponent, },
  { path: 'home', component: HomeComponent, },
  { path: 'transactionHistory', component: TransactionHistoryComponent, },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
