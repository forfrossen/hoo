import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { FBMLAttribute } from 'ngx-facebook/dist/esm/components/fbml-component';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private fb: FacebookService) {
    const params: InitParams = {
      appId             : '893642437633967',
      status            : true, 
      cookie            : true, 
      xfbml             : true,
      version           : 'v3.3'
    };

    fb.init(params);

    
    
    fb.getLoginStatus()
      .then(response => {
        if (response.status === 'connected') {
          var accessToken = response.authResponse.accessToken;
        } 
      });

    fb.api('/156249841069523/published_posts', 'get', { accessToken: 'EAAMsw1gNJ68BAOHsZClCZBh4ZAeqktR56oeZBQZBZCckL1NdBsQQODSDVZAqnFXKYAKo94Q8XBdCFvHRhqfQZCMdZCWrJN4RBySby3wqlh9ebvfHIh7WLPZAJ9SPlcrZBNfeb4xQ8HRrYgtA3S5XN0sU8ZBLSA5i1dOhZAzVDiEmc44nJg01JhN9jsR3lZBCBxbXrGDKcLCzJq4Uy6kQZDZD' })
      .then(res => console.log(res))
      .catch(e => console.log(e));  
  }
  
  

  

  ngOnInit() {
   
  }

}
