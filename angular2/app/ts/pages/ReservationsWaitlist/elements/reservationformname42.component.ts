import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'reservationformname42',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/reservationformname42.html',
})

export class ReservationFormName42 {


	reservationformname42 = { 
		name : 'test',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('reservationformname42', this.reservationformname42);
		}





}