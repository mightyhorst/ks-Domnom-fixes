import { Component, OnInit } from '@angular/core';


declare var AppController: any;
@Component({
	selector: 'orderspayments3',
	templateUrl: '/app/html/pages/OrdersPayments/orderspayments3.html',
})

export class OrdersPayments3 {


	



		_appController

		ngOnInit() {

			this._appController = new AppController();

			this._appController.main();

		}







}