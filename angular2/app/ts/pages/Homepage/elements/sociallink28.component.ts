import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'sociallink28',
	templateUrl: '/app/html/pages/Homepage/elements/sociallink28.html',
})

export class SocialLink28 {


	sociallink28 = { 
		href : '#',
		title : 'Facebook',
		iconClass : 'fa fa-facebook',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('sociallink28', this.sociallink28);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}