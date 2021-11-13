import { createReducer, on, Action } from '@ngrx/store';
import { TicketState } from './tickets.state';
import * as ticketsActions from './tickets.actions';

export const initialTicketState: TicketState = {
  tickets: [],
  isLoading: false,
  error: null,
};

const _ticketsReducer = createReducer(
  initialTicketState,

  on(ticketsActions.requestTickets, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(ticketsActions.successTickets, (state, { tickets }) => {
    return {
      ...state,
      tickets,
      isLoading: false,
    };
  }),
  on(ticketsActions.failureTickets, (state, { error }) => {
    return {
      ...state,
      error: error.message,
      isLoading: false,
    };
  })
);

export function TicketsReducers(
  state: TicketState | undefined,
  action: Action
) {
  return _ticketsReducer(state, action);
}
