import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navigationitem6',
	templateUrl: '/app/html/pages/Homepage/elements/navigationitem6.html',
})

export class NavigationItem6 {


	navigationitem6 = { 
		href : 'about',
		name : 'About',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem6', this.navigationitem6);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}