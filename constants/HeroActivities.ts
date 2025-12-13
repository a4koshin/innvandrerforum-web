import { Gamepad2, Film } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface WeeklyActivity {
  id: number;
  name: string;
  time: string;
  location: string;
  description: string;
  image: string;
  icon?: LucideIcon;
  day?: string;
}

export interface MonthlyActivity {
  id: number;
  name: string;
  description: string;
  schedule: string;
  icon: LucideIcon;
  image: string;
  location: string;
  registration: string;
}

/* ✅ Weekly */
export const weeklyActivities: WeeklyActivity[] = [
  {
    id: 1,
    name: "Futsal Trening",
    time: "20:00 – 22:00",
    day: "Mandag",
    location: "Kongstenhallen",
    description: "Intensiv futsal trening",
    image: "/fotbal1.JPG",
    icon: Film,
  },
];

/* ✅ Monthly */
export const monthlyActivities: MonthlyActivity[] = [
  {
    id: 1,
    name: "EA Sports FIFA Turnering",
    description: "Månedlig FIFA-konkurranse med premier",
    schedule: "Siste lørdag i måneden",
    icon: Gamepad2,
    image: "/EAsports.JPG",
    location: "Fredrikstad Flerkulturelt Ungdomshus",
    registration: "Påmelding via WhatsApp",
  },
];
