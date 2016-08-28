import { Component, OnInit } from '@angular/core';
import { SharedData } from '/app/js/static-services/shareddata.services';


@Component({
	selector: 'featureitem21',
	templateUrl: '/app/html/pages/Homepage/elements/featureitem21.html',
})

export class FeatureItem21 {


	featureitem21 = { 
		iconClass : 'icon-hotairballoon',
		title : 'Quality Guarantee',
		desc : 'Curabitur iaculis accumsan augue, nec finibus mauris pretium eu. Duis placerat ex gravida nibh tristique porta. Nulla facilisi. Suspendisse ultricies eros blandit.',
	};

	constructor(
		private _sharedData: SharedData
	) {}

	ngOnInit() {
		this._sharedData.addData('featureitem21', this.featureitem21);
		}





}