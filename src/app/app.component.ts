import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgsRevealConfig } from 'ngx-scrollreveal';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ],
	providers: [ NgsRevealConfig ]
} )
export class AppComponent implements OnInit {
	
	private _router: Subscription;

	isFixNavbarLocation: boolean = true;
	fragment;

	@ViewChild( NavbarComponent ) navbar: NavbarComponent;

	constructor(
		private renderer: Renderer,
		private router: Router,
		@Inject( DOCUMENT ) private document: any,
		private element: ElementRef,
		public location: Location,
		config: NgsRevealConfig )
	{

	}
	
	
	ngOnInit() {
		
		this._router = this.router.events.filter( event => event instanceof NavigationEnd ).subscribe( ( event: NavigationEnd ) => {

			if( event.url === "/home" ){
				this.isFixNavbarLocation = false;
				this.moveNavbar("bottom");
			} else {
				this.isFixNavbarLocation = true;
			}
			
			if ( window.outerWidth > 991 ) {
				window.document.children[ 0 ].scrollTop = 0;
			} else {
				window.document.activeElement.scrollTop = 0;
			}
			this.navbar.sidebarClose();
		} );

		this.renderer.listenGlobal( 'window', 'scroll', ( event ) => {
			const number = window.scrollY;
			const navBreakPoint = 200;
				if ( number > navBreakPoint || window.pageYOffset > navBreakPoint ) {
					// add logic
					this.moveNavbar("top");
				} else {
					// remove logic
					this.moveNavbar("bottom");
				}
		} );

		var ua = window.navigator.userAgent;
		var trident = ua.indexOf( 'Trident/' );

		if ( trident > 0 ) {
			// IE 11 => return version number
			var rv = ua.indexOf( 'rv:' );
			var version = parseInt( ua.substring( rv + 3, ua.indexOf( '.', rv ) ), 10 );
		}

		if ( version ) {
			var body = document.getElementsByTagName( 'body' )[ 0 ];
			body.classList.add( 'ie-background' );

		}

		console.log( this.router.url );

	}

	moveNavbar(location: string){
		var navbar: HTMLElement = this.element.nativeElement.children[ 0 ].children[ 0 ];

		if( location === "top" ){
			navbar.classList.remove( 'navbar-transparent' );
			if( ! this.isFixNavbarLocation ){
				console.log("Moving Navbar to: ", location);
				navbar.classList.remove( 'fixed-bottom' );
				navbar.classList.add( 'fixed-top' );
			}

		} else {
			navbar.classList.add( 'navbar-transparent' );
			if( ! this.isFixNavbarLocation ){
				console.log("Moving Navbar to: ", location);
				navbar.classList.remove( 'fixed-top' );
				navbar.classList.add( 'fixed-bottom' );
			}
		}

	}

	removeFooter() {
		var titlee = this.location.prepareExternalUrl( this.location.path() );
		titlee = titlee.slice( 1 );
		if ( titlee === 'signup' || titlee === 'nucleoicons' ) {
			return false;
		}
		else {
			return true;
		}
	}
}
