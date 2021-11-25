import { createAction, props } from '@ngrx/store';
import { Flight } from "@flight-workspace/flight-lib";

export const loadFlightBookings = createAction(
  '[FlightBooking] Load FlightBookings',
  props<{
    from: string,
    to: string,
    urgent: boolean
  }>()
);

export const loadFlightBookingsSuccess = createAction(
  '[FlightBooking] Load FlightBookings Success',
  props<{ flights: Flight[] }>()
);

export const loadFlightBookingsFailure = createAction(
  '[FlightBooking] Load FlightBookings Failure',
  props<{ error: any }>()
);
