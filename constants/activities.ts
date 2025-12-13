import { Gamepad2, Film } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface WeeklyActivity {
  name: string;
  time: string;
  location: string;
  description: string;
  type: string;
  image: string;
}

export interface Weekly {
  id: number;
  day: string;
  activities: WeeklyActivity[];
}

export const weeklyActivities: Weekly[] = [
  {
    id: 1,
    day: "Mandag",
    activities: [
      {
        name: "Futsal Trening",
        time: "20:30 - 22:00",
        location: "Kongstenhallen",
        description: "Futsal trening for alle nivåer",
        type: "sport",
        image: "/fotbal3.jpeg",
      },
      {
        name: "Svømming (Kvinner)",
        time: "19:00 - 20:00",
        location: "Gressvik ungdomsskole",
        description: "Svømmetrening for kvinner",
        type: "sport",
        image: "/swimming.jpeg",
      },
    ],
  },
  {
    id: 2,
    day: "Torsdag",
    activities: [
      {
        name: "Futsal Trening",
        time: "20:00 - 22:00",
        location: "Kongstenhallen",
        description: "Intensiv futsal trening",
        type: "sport",
        image: "/fotbal1.JPG",
      },
    ],
  },
  {
    id: 3,
    day: "Fredag",
    activities: [
      {
        name: "Futsal Trening",
        time: "19:30 - 21:30",
        location: "Kongstenhallen",
        description: "Ukeavslutning med futsal",
        type: "sport",
        image: "/fotbal4.JPG",
      },
    ],
  },
];

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
  {
    id: 2,
    name: "FIFA Tournament",
    description: "Månedlig FIFA-konkurranse med premier",
    schedule: "En gang i måneden",
    icon: Film,
    image: "/PCGaming.jpg",
    location: "Ungdomshuset",
    registration: "Åpen for alle",
  },
];
