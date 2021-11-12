import { ITicketsList } from '../../core/models/tickets.models';

export interface TicketState {
  tickets: ITicketsList[];
  isLoading: boolean;
  error: string;
}
