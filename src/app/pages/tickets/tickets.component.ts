import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ticketsActions from './../../store/tickets/tickets.actions';
import * as ticketsSelectors from './../../store/tickets/tickets.selector';

import { Observable } from 'rxjs';
import { Ticket } from '../../core/models/tickets.models';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  public tickets$: Observable<Ticket[]>;

  constructor(private _store: Store) {
    this.tickets$ = this._store.select(ticketsSelectors.selectTickets);
  }

  ngOnInit(): void {
    this._store.dispatch(ticketsActions.requestTickets());
  }
}
