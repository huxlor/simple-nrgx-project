import { Ticket } from '../../core/models/tickets.models';

export interface TicketState {
  tickets: Ticket[];
  isLoading: boolean;
  error: string;
}
