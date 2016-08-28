import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navigationitem9',
	templateUrl: '/app/html/pages/Homepage/elements/navigationitem9.html',
})

export class NavigationItem9 {


	navigationitem9 = { 
		href : 'campaings',
		name : 'Location',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem9', this.navigationitem9);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}