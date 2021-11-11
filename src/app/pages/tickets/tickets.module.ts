import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [TicketsComponent],
  imports: [CommonModule, TicketsRoutingRoutingModule, ComponentsModule],
})
export class TicketsRoutingModule {}
