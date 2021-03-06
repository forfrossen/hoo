import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { NgsRevealModule } from 'ngx-scrollreveal';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

//import { FacebookModule, FBPostComponent } from 'ngx-facebook';

import { HomeModule } from './home/home.module';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    PrivacyPolicyComponent,    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    //FacebookModule.forRoot(),
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    NgsRevealModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
