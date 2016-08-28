import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'reservationformmessage46',
	templateUrl: '/app/html/pages/ReservationsWaitlist/elements/reservationformmessage46.html',
})

export class ReservationFormMessage46 {


	reservationformmessage46 = { 
		message : 'test',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('reservationformmessage46', this.reservationformmessage46);
		}





}