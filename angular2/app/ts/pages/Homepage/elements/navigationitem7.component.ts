import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navigationitem7',
	templateUrl: '/app/html/pages/Homepage/elements/navigationitem7.html',
})

export class NavigationItem7 {


	navigationitem7 = { 
		href : 'menu',
		name : 'Menu',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem7', this.navigationitem7);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}