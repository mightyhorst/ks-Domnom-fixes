import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navigationitembutton10',
	templateUrl: '/app/html/pages/Homepage/elements/navigationitembutton10.html',
})

export class NavigationItemButton10 {


	navigationitembutton10 = { 
		href : 'reservations',
		name : 'Reservations',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitembutton10', this.navigationitembutton10);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}