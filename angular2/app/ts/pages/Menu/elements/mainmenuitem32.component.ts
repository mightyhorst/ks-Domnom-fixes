import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'mainmenuitem32',
	templateUrl: '/app/html/pages/Menu/elements/mainmenuitem32.html',
})

export class MainMenuItem32 {


	mainmenuitem32 = { 
		name : 'Squid Ink Spaghetti',
		description : 'with Red Shrimp, Brussels Sprouts, & Saffron',
		price : '$19.00',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('mainmenuitem32', this.mainmenuitem32);
		}





}