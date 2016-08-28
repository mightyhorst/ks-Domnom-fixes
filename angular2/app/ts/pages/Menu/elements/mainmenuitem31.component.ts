import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'mainmenuitem31',
	templateUrl: '/app/html/pages/Menu/elements/mainmenuitem31.html',
})

export class MainMenuItem31 {


	mainmenuitem31 = { 
		name : 'Buckwheat Orecchiette',
		description : 'with Nettle Purée, Black Trumpets & Smoked Yolk',
		price : '$21.00',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('mainmenuitem31', this.mainmenuitem31);
		}





}