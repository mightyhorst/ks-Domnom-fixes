import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'reservationformbutton47',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/reservationformbutton47.html',
})

export class ReservationFormButton47 {


	reservationformbutton47 = { 
		buttonName : 'Reserve Table',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('reservationformbutton47', this.reservationformbutton47);
		}





}