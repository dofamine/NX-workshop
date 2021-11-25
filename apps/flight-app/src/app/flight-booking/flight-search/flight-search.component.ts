/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import {Component, OnInit} from '@angular/core';
import {FlightService} from '@flight-workspace/flight-lib';
import { Store } from "@ngrx/store";
import { loadFlightBookings } from "../+state/flight-booking.actions";
import { FlightBookingAppState } from "../+state/flight-booking.reducer";

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;
  flights$ = this.store.select(s => s.flightBooking.flights);

  get flights() {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(
    private flightService: FlightService,
    private store: Store<FlightBookingAppState>) {
  }

  ngOnInit() {
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.store.dispatch(loadFlightBookings({
      from: this.from,
      to: this.to,
      urgent: this.urgent,
    }));
  }

  delay(): void {
    this.flightService.delay();
  }

}
