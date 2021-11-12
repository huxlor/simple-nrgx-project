import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ticketsActions from './tickets.actions';
import { AppService } from '../../app.service';
import {
  map,
  switchMap,
  tap,
  catchError,
  withLatestFrom,
} from 'rxjs/operators';
import { throwError, of } from 'rxjs';

@Injectable()
export class TicketEffects {
  constructor(private actions$: Actions, private _ticketsService: AppService) {}

  requestTickets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ticketsActions.requestTickets),
      switchMap((_) =>
        this._ticketsService.getTickets().pipe(
          map((tickets: any) => {
            return ticketsActions.successTickets({ tickets });
          }),
          catchError((error) => {
            return of(ticketsActions.failureTickets({ error }));
          })
        )
      )
    )
  );
}
