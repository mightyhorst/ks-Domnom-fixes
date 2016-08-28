import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'bannerbutton12',
	templateUrl: '/app/html/pages/Homepage/elements/bannerbutton12.html',
})

export class BannerButton12 {


	bannerbutton12 = { 
		title : 'Discover our menu',
		href : '/menu',
		class : 'btn btn-mod btn-medium btn-round',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('bannerbutton12', this.bannerbutton12);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}