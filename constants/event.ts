// app/annual-event/types/event.ts
export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  icon: string;
  color: string;
  bgColor: string;
  buttonText: string;
  spotsLeft?: number;
  featured?: boolean;
}
