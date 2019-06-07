import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { LiveComponent } from 'app/live/live.component';
import { BandComponent } from 'app/band/band.component';
import { NewsComponent } from 'app/news/news.component';
import { MediaComponent } from 'app/media/media.component';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
		RouterModule,
		NgsRevealModule,
		NgbCarouselModule
    ],
	declarations: [
		HomeComponent,
		LiveComponent,
		BandComponent,
		NewsComponent,
		MediaComponent,
	],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
