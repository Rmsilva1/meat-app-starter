import { Injectable } from "@angular/Core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import { MEAT_API } from "../app.api";


@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }

  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json());
  }
}