import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes,ActivatedRoute } from '@angular/router';

import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { OwlModule } from 'ng2-owl-carousel';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CategoryComponent } from './category/category.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsSourceComponent } from './news-source/news-source.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';


import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './services/auth.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { VenueService } from "app/services/venue.service";

import { StatusComponent } from './components/status/status.component';
import { EnsureAuthenticated } from './services/ensure-authenticated.service';
import { LoginRedirect } from './services/login-redirect.service';


import {
    ReactiveFormsModule,
        FormsModule,
        FormGroup,
        FormControl,
        Validators,
        FormBuilder
} from '@angular/forms';

const appRoutes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'signup', component: SignupComponent},
    // {path:'login', component: LoginComponent},

    {path:'privacy',component:PrivacyPolicyComponent},
    {path:'news-sources',component:NewsSourceComponent},
    {path:'category',component:CategoryComponent},
    {path:'news-details',component:NewsDetailsComponent},
    // { path: 'status', component: StatusComponent },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginRedirect]
    },

    {
        path: 'status',
        component: StatusComponent,
        canActivate:
            [EnsureAuthenticated]
    }
];

@NgModule({
  declarations: [
    AppComponent,
    PrivacyPolicyComponent,
    CategoryComponent,
    NewsDetailsComponent,
    NewsSourceComponent,
      HomeComponent,
      SignupComponent,
      LoginComponent,
      StatusComponent

  ],

  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      RouterModule.forRoot(appRoutes),
      LocalStorageModule.withConfig({
          prefix: 'my-app',
          storageType: 'localStorage'
      })

  ],

    providers: [AuthService,VenueService,EnsureAuthenticated,
        LoginRedirect,{ provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
