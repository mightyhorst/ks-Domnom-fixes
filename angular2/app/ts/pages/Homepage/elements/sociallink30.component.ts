import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'sociallink30',
	templateUrl: '/app/html/pages/Homepage/elements/sociallink30.html',
})

export class SocialLink30 {


	sociallink30 = { 
		href : '#',
		title : 'Pinterest',
		iconClass : 'fa fa-pinterest',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('sociallink30', this.sociallink30);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}