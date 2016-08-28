import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navigationitem5',
	templateUrl: '/app/html/pages/Homepage/elements/navigationitem5.html',
})

export class NavigationItem5 {


	navigationitem5 = { 
		class : 'active',
		href : '#',
		name : 'Home',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem5', this.navigationitem5);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}