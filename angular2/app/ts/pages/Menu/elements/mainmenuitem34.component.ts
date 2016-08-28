import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'mainmenuitem34',
	templateUrl: '/app/html/pages/Menu/elements/mainmenuitem34.html',
})

export class MainMenuItem34 {


	mainmenuitem34 = { 
		name : 'Brook Trout',
		description : 'with Spaghetti Squash, Sweet Potatoes & Apple Cider Sauce',
		price : '$19.00',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('mainmenuitem34', this.mainmenuitem34);
		}





}