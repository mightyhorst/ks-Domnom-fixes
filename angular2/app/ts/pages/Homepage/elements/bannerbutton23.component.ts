import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'bannerbutton23',
	templateUrl: '/app/html/pages/Homepage/elements/bannerbutton23.html',
})

export class BannerButton23 {


	bannerbutton23 = { 
		title : 'Reserve a table',
		href : '/reservations',
		class : 'class="btn btn-mod btn-w btn-medium btn-round"',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('bannerbutton23', this.bannerbutton23);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}