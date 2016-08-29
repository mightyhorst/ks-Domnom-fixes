import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Mynewtable } from '/app/js/models/mynewtable';
import '/app/js/rxjs-operators';

@Injectable()
export class MynewtableService { 
	mynewtable: Array<Mynewtable> = new Array<Mynewtable>();
	url: string = '/api/mynewtable';

	constructor (private _http: Http){}

	getMynewtable(domain:string) {
		this._http.get('http://'+domain+this.url).map(res => res.json()).subscribe(data => this.createMynewtableModels(data), error => console.error(error));
	}
	getMynewtableData(rowNum: number){
		return this.mynewtable[rowNum];
	}
	createMynewtableModels(data:Array<any>) {
		for (var d of data) {
			var model: Mynewtable = new Mynewtable(d.id, d.personal data);
			this.mynewtable.push(model);
		}
	}
}