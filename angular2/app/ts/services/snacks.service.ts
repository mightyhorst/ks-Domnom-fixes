import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Snacks } from '/app/js/models/snacks';
import '/app/js/rxjs-operators';

@Injectable()
export class SnacksService { 
	snacks: Array<Snacks> = new Array<Snacks>();
	url: string = '/api/snack';

	constructor (private _http: Http){}

	getSnacks(domain:string) {
		this._http.get('http://'+domain+this.url).map(res => res.json()).subscribe(data => this.createSnacksModels(data), error => console.error(error));
	}
	getSnacksData(rowNum: number){
		return this.snacks[rowNum];
	}
	createSnacksModels(data:Array<any>) {
		for (var d of data) {
			var model: Snacks = new Snacks(d.id, d.title, d.description, d.price, d.type);
			this.snacks.push(model);
		}
	}
}