import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'reservationformemail43',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/reservationformemail43.html',
})

export class ReservationFormEmail43 {


	reservationformemail43 = { 
		email : 'test@test',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('reservationformemail43', this.reservationformemail43);
		}





}