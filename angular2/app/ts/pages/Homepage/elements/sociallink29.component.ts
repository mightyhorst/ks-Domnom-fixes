import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { Router } from '@angular/router';


@Component({
	selector: 'sociallink29',
	templateUrl: '/app/html/pages/Homepage/elements/sociallink29.html',
})

export class SocialLink29 {


	sociallink29 = { 
		href : '#',
		title : 'Twitter',
		iconClass : 'fa fa-twitter',
	};

	constructor(
		private _sharedData: SharedData,
		private _router: Router
	) {}

	ngOnInit() {
		this._sharedData.addData('sociallink29', this.sociallink29);
		}



	gotoRoute(url:string) {
		this._router.navigate([url]);
	}

}