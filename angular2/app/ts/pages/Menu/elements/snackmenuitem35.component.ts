import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'snackmenuitem35',
	templateUrl: '/app/html/pages/Menu/elements/snackmenuitem35.html',
})

export class SnackMenuItem35 {


	snackmenuitem35 = { 
		name : 'Bread & Housemade Cultured Butter',
		description : 'with Spaghetti Squash, Sweet Potatoes & Apple Cider Sauce',
		price : '$19.00',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('snackmenuitem35', this.snackmenuitem35);
		}





}