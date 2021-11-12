import { createAction, props } from '@ngrx/store';
import { Tickets } from '../../core/models/tickets.models';

export const requestTickets = createAction('[API Tickets] RequestTickets');

export const successTickets = createAction(
  '[API Tickets] SuccessTickets',
  props<{ tickets: Tickets[] }>()
);

export const failureTickets = createAction(
  '[API Tickets] failureTickets',
  props<{ error: Error }>()
);
