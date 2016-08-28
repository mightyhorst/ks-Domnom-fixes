import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'navigationitem39',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/navigationitem39.html',
})

export class NavigationItem39 {


	navigationitem39 = { 
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem39', this.navigationitem39);
		}





}