import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WhiteWine } from '/app/js/models/whitewine';
import '/app/js/rxjs-operators';

@Injectable()
export class WhiteWineService { 
	whiteWine: Array<WhiteWine> = new Array<WhiteWine>();
	url: string = '/api/whitewine';

	constructor (private _http: Http){}

	getWhiteWine(domain:string) {
		this._http.get('http://'+domain+this.url).map(res => res.json()).subscribe(data => this.createWhiteWineModels(data.data), error => console.error(error));
	}
	getWhiteWineData(rowNum: number){
		return this.whiteWine[rowNum];
	}
	createWhiteWineModels(data:Array<any>) {
		for (var d of data) {
			var model: WhiteWine = new WhiteWine(d.id, d.title, d.description, d.price, d.type);
			this.whiteWine.push(model);
		}
	}
}