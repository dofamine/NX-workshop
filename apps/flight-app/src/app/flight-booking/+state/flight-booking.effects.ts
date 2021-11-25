import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as FlightBookingActions from './flight-booking.actions';
import { FlightService } from "@flight-workspace/flight-lib";
import { loadFlightBookingsSuccess } from "./flight-booking.actions";



@Injectable()
export class FlightBookingEffects {

  loadFlightBookings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FlightBookingActions.loadFlightBookings),
      switchMap(({from, to, urgent}) =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.flightService.find(from, to, urgent).pipe(
          map((flights) => loadFlightBookingsSuccess({flights}))
        )
    ),
    )
  });



  constructor(private readonly actions$: Actions,
              private readonly flightService: FlightService) {}

}
