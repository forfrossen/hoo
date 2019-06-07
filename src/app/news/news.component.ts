import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(
	  config: NgbCarouselConfig,
	  private pageScrollService: PageScrollService,
    //private fb: FacebookService
  ) {
	config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  /*
  asdf(){
    const params: InitParams = {
      appId             : '893642437633967',
      status            : true, 
      cookie            : true, 
      xfbml             : true,
      version           : 'v3.3'
    };

    this.fb.init(params);

    
    
    this.fb.getLoginStatus()
      .then(response => {
        if (response.status === 'connected') {
          var accessToken = response.authResponse.accessToken;
        } 
      });

    this.fb.api('/156249841069523/published_posts', 'get', { accessToken: 'EAAMsw1gNJ68BAOHsZClCZBh4ZAeqktR56oeZBQZBZCckL1NdBsQQODSDVZAqnFXKYAKo94Q8XBdCFvHRhqfQZCMdZCWrJN4RBySby3wqlh9ebvfHIh7WLPZAJ9SPlcrZBNfeb4xQ8HRrYgtA3S5XN0sU8ZBLSA5i1dOhZAzVDiEmc44nJg01JhN9jsR3lZBCBxbXrGDKcLCzJq4Uy6kQZDZD' })
      .then(res => console.log(res))
      .catch(e => console.log(e));  
  }

  */

  ngOnInit() {
   
  }

}
