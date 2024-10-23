export interface Event {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  status: string;
}

export interface SearchResponse {
  events: Event[];
  error?: string;
}