import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'reservationformdate45',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/reservationformdate45.html',
})

export class ReservationFormDate45 {


	reservationformdate45 = { 
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('reservationformdate45', this.reservationformdate45);
		}





}