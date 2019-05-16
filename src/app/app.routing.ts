import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { LandingComponent } from './landing/landing.component';
import { LiveComponent } from './live/live.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent 		},
    { path: 'news',             component: NewsComponent 		},
    { path: 'landing',          component: LandingComponent 	},
    { path: '', redirectTo: 'forbidden', pathMatch: 'full' 			}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
