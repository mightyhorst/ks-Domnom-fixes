import { Component, OnInit } from '@angular/core';


declare var AppController: any;
@Component({
	selector: 'campaigns5',
	templateUrl: '/app/html/pages/Campaigns/campaigns5.html',
})

export class Campaigns5 {


	



		_appController

		ngOnInit() {

			this._appController = new AppController();

			this._appController.main();

		}







}