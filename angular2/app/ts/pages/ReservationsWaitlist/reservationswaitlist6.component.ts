import { Component, OnInit } from '@angular/core';
import { DataBody } from '/app/js/pages/ReservationsWaitlist/databody.component';


declare var AppController: any;
@Component({
	selector: 'reservationswaitlist6',
	templateUrl: '/app/html/pages/ReservationsWaitlist/reservationswaitlist6.html',
	directives: [
		DataBody,
	],
})

export class ReservationsWaitlist6 {


	



		_appController

		ngOnInit() {

			this._appController = new AppController();

			this._appController.main();

		}







}