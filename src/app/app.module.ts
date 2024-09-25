import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NeedyRegisterComponent } from './needy-register/needy-register.component';
import { HelperRegisterComponent } from './helper-register/helper-register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HelperHomeComponent } from './helper-home/helper-home.component';
import { NeedyHomeComponent } from './needy-home/needy-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { DollarPipePipe } from './dollar-pipe.pipe';
import { HighlightDirective } from './highlight.directive';
import { ManagePostNeedyComponent } from './manage-post-needy/manage-post-needy.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NeedyRegisterComponent,
    HelperRegisterComponent,
    AboutUsComponent,
    HelperHomeComponent,
    NeedyHomeComponent,
    AdminHomeComponent,
    CreatePostComponent,
    ManagePostComponent,
    DollarPipePipe,
    HighlightDirective,
    ManagePostNeedyComponent,
    TransactionHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
