import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'navigationitem37',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/navigationitem37.html',
})

export class NavigationItem37 {


	navigationitem37 = { 
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem37', this.navigationitem37);
		}





}