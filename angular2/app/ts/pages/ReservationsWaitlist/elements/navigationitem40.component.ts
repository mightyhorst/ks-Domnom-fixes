import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'navigationitem40',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/navigationitem40.html',
})

export class NavigationItem40 {


	navigationitem40 = { 
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem40', this.navigationitem40);
		}





}