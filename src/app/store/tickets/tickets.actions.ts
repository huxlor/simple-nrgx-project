import { createAction, props } from '@ngrx/store';
import {
  Tickets,
  ITicketsList,
  Ticket,
} from '../../core/models/tickets.models';

export const requestTickets = createAction('[API Tickets] RequestTickets');

export const successTickets = createAction(
  '[API Tickets] SuccessTickets',
  props<{ tickets: Ticket[] }>()
);

export const failureTickets = createAction(
  '[API Tickets] failureTickets',
  props<{ error: Error }>()
);
