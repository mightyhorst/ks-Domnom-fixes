import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'navigationitem8',
	templateUrl: '/app/html/pages/Homepage/elements/navigationitem8.html',
})

export class NavigationItem8 {


	navigationitem8 = { 
		href : 'rewards',
		name : 'Gallery',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('navigationitem8', this.navigationitem8);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}