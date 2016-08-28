import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ConfigService } from '/app/js/static-services/config.service';
import { SharedData } from '/app/js/static-services/shareddata.services';
import { UsersService } from '/app/js/services/users.service';
import { BlogPostsService } from '/app/js/services/blogposts.service';
import { FoodService } from '/app/js/services/food.service';
import { DrinksService } from '/app/js/services/drinks.service';
import { SnacksService } from '/app/js/services/snacks.service';
import { WhiteWineService } from '/app/js/services/whitewine.service';
import { BeerService } from '/app/js/services/beer.service';
import { MynewtableService } from '/app/js/services/mynewtable.service';


@Component({
	selector: 'app',
	template: '<router-outlet></router-outlet>',
	directives: [
		ROUTER_DIRECTIVES,
	],
	providers: [
		ConfigService,
		SharedData,
		UsersService,
		BlogPostsService,
		FoodService,
		DrinksService,
		SnacksService,
		WhiteWineService,
		BeerService,
		MynewtableService,
	]
})

export class AppComponent {


	

	constructor(
		private _configService: ConfigService,
		private _sharedData: SharedData,
		private _usersService: UsersService,
		private _blogPostsService: BlogPostsService,
		private _foodService: FoodService,
		private _drinksService: DrinksService,
		private _snacksService: SnacksService,
		private _whiteWineService: WhiteWineService,
		private _beerService: BeerService,
		private _mynewtableService: MynewtableService
	) {}

	ngOnInit() {
		this._configService.getConfig().subscribe(
			data  => this._configService.configFile = data.data,
			error => console.error(error),
			()    => {
				this._sharedData.getSharedData(this._configService.getDomain());
				this._usersService.getUsers(this._configService.getDomain());
				this._blogPostsService.getBlogPosts(this._configService.getDomain());
				this._foodService.getFood(this._configService.getDomain());
				this._drinksService.getDrinks(this._configService.getDomain());
				this._snacksService.getSnacks(this._configService.getDomain());
				this._whiteWineService.getWhiteWine(this._configService.getDomain());
				this._beerService.getBeer(this._configService.getDomain());
				this._mynewtableService.getMynewtable(this._configService.getDomain());
			}
		);
	}





}