import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Beer } from '/app/js/models/beer';
import '/app/js/rxjs-operators';

@Injectable()
export class BeerService { 
	beer: Array<Beer> = new Array<Beer>();
	url: string = '/api/beer';

	constructor (private _http: Http){}

	getBeer(domain:string) {
		this._http.get('http://'+domain+this.url).map(res => res.json()).subscribe(data => this.createBeerModels(data.data), error => console.error(error));
	}
	getBeerData(rowNum: number){
		return this.beer[rowNum];
	}
	createBeerModels(data:Array<any>) {
		for (var d of data) {
			var model: Beer = new Beer(d.id, d.title, d.decsription, d.price);
			this.beer.push(model);
		}
	}
}