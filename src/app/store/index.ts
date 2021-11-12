import { TicketState } from './tickets/tickets.state';
import { TicketsReducers } from './tickets/tickets.reducers';
import { TicketEffects } from './tickets/tickets.effects';

export interface RootState {
  ticket: TicketState;
}

export const appReducers = {
  ticket: TicketsReducers,
};

export const appEffects = [TicketEffects];
