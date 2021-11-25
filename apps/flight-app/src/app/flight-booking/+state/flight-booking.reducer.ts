import { Action, createReducer, on } from '@ngrx/store';
import * as FlightBookingActions from './flight-booking.actions';
import { Flight } from "@flight-workspace/flight-lib";
import { State as RootState } from "../../+state";
import { userFeatureKey, UserState } from "../../+state";

export const flightBookingFeatureKey = 'flightBooking';

export interface State {
  flights: Flight[]
}

export const initialState: State = {
  flights: [],
};

export interface FlightBookingAppState extends Pick<RootState, 'user'> {
  [flightBookingFeatureKey]: State,
}

export const reducer = createReducer(
  initialState,

  on(FlightBookingActions.loadFlightBookings, state => state),
  on(FlightBookingActions.loadFlightBookingsSuccess, (state, { flights }) => ({ ...state, flights })),
  on(FlightBookingActions.loadFlightBookingsFailure, (state, action) => state),

);

