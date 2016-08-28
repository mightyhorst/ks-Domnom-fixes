import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'mainmenuitem33',
	templateUrl: '/app/html/pages/Menu/elements/mainmenuitem33.html',
})

export class MainMenuItem33 {


	mainmenuitem33 = { 
		name : 'Poached Pollock',
		description : 'with Dandelion Greens, Buchot Mussels, Yellow Eye Beans & Anduja',
		price : '$19.00',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('mainmenuitem33', this.mainmenuitem33);
		}





}