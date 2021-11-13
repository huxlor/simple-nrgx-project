import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from '../../core/models/tickets.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() tickets: Ticket[];

  constructor() {}

  ngOnInit(): void {}
}
