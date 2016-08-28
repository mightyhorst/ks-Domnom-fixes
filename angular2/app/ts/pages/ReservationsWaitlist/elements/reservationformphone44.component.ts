import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'reservationformphone44',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/reservationformphone44.html',
})

export class ReservationFormPhone44 {


	reservationformphone44 = { 
		phone : '123123',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('reservationformphone44', this.reservationformphone44);
		}





}