import { Component, OnInit } from '@angular/core';
import { DataBody } from '/app/js/pages/Homepage/databody.component';


declare var AppController: any;
@Component({
	selector: 'homepage1',
	templateUrl: '/app/html/pages/Homepage/homepage1.html',
	directives: [
		DataBody,
	],
})

export class Homepage1 {


	



		_appController

		ngOnInit() {

			this._appController = new AppController();

			this._appController.main();

		}







}