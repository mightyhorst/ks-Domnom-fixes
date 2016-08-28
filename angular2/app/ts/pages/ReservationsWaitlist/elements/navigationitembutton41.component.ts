import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'navigationitembutton41',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/navigationitembutton41.html',
})

export class NavigationItemButton41 {


	navigationitembutton41 = { 
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitembutton41', this.navigationitembutton41);
		}





}