import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'navigationitem38',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/navigationitem38.html',
})

export class NavigationItem38 {


	navigationitem38 = { 
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem38', this.navigationitem38);
		}





}