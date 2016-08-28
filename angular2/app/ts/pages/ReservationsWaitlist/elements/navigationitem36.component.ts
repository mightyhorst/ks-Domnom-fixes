import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'navigationitem36',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/navigationitem36.html',
})

export class NavigationItem36 {


	navigationitem36 = { 
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem36', this.navigationitem36);
		}





}