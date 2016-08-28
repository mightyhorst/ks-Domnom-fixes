import { Component, OnInit } from '@angular/core';


declare var AppController: any;
@Component({
	selector: 'rewards4',
	templateUrl: '/app/html/pages/Rewards/rewards4.html',
})

export class Rewards4 {


	



		_appController

		ngOnInit() {

			this._appController = new AppController();

			this._appController.main();

		}







}