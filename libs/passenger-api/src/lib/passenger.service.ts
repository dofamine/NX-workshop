import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class PassengerService {
  constructor(private readonly http: HttpClient) {
  }

  getPassengers() {
    this.http.get('http://www.angular.at/api/passenger');
  }
}
