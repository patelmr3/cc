import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroTitleComponent } from './hero-title/hero-title.component';
import { LogoComponent } from './logo/logo.component';
import { StatusBoxComponent } from './status-box/status-box.component';
import { SignUpCountComponent } from './sign-up-count/sign-up-count.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  { 
    path: '',
    component: HomePageComponent
  },
  {
    path: 'sign-up',
    component: SignUpFormComponent
  },
  {
    path: '**',
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeroTitleComponent,
    LogoComponent,
    StatusBoxComponent,
    SignUpCountComponent,
    SignUpFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
