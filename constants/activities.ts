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
    name: "Spill- og aktivitetskvelder",
    description: "Brettspill, e-sport og sosiale aktiviteter for ungdom.",
    schedule: "En gang i måneden",
    icon: Film,
    image: "/PCGaming.jpg",
    location: "Ungdomshuset",
    registration: "Åpen for alle",
  },
  // {
  //   id: 3,
  //   name: "Dialogkvelder",
  //   description:
  //     "Samtaler om aktuelle temaer som integrering, likestilling og hverdagsutfordringer.",
  //   schedule: "En gang i måneden",
  //   icon: Film,
  //   image: "/dailog.jpeg",
  //   location: "Ungdomshuset",
  //   registration: "Åpen for alle",
  // },
  {
    id: 4,
    name: "Temakvelder og informasjonsmøter",
    description:
      "Vi arrangerer månedlige temakvelder og workshops om inkludering, psykisk helse, rasisme og kunnskap om det norske systemet. Målet er å styrke kunnskap, trygghet og mestring.",
    schedule: "En gang i måneden",
    icon: Film,
    image: "/teamact.jpeg",
    location: "Ungdomshuset",
    registration: "Åpen for alle",
  },
  {
    id: 5,
    name: "Forebyggende ungdomsarbeid",
    description:
      "Forebyggende ungdomsarbeid er en sentral del av Innvandrerforum i Østfold sitt arbeid. Vi jobber aktivt for å forebygge utenforskap, ensomhet og negative påvirkninger ved å tilby trygge møteplasser og meningsfulle aktiviteter for ungdom.",
    schedule: "En gang i måneden",
    icon: Film,
    image: "/wacyi.jpeg",
    location: "Ungdomshuset",
    registration: "Åpen for alle",
  },
  {
    id: 6,
    name: "Friluftsturer i nærområdet",
    description:
      "Én gang i måneden arrangerer vi lavterskel friluftsturer i nærområdet. Turene er tilpasset deltakere med lite eller ingen erfaring og har fokus på mestring, trivsel og fellesskap.",
    schedule: "En gang i måneden",
    icon: Film,
    image: "/walk.jpeg",
    location: "Ungdomshuset",
    registration: "Åpen for alle",
  },
  {
    id: 7,
    name: "Sosiale kvelder på ungdomshuset",
    description:
      "Vi arrangerer sosiale kvelder på ungdomshuset én gang i måneden. Dette er et trygt og rusfritt møtested der ungdom kan delta i aktiviteter, bygge vennskap og oppleve tilhørighet.",
    schedule: "En gang i måneden",
    icon: Film,
    image: "/social.jpeg",
    location: "Ungdomshuset",
    registration: "Åpen for alle",
  },
  {
    id: 8,
    name: " Kompetanseheving – temakvelder og workshops",
    description:
      "Vi arrangerer sosiale kvelder på ungdomshuset én gang i måneden. Dette er et trygt, åpent og rusfritt møtested for ungdom.",
    schedule: "En gang i måneden",
    icon: Film,
    image: "/workshop.jpeg",
    location: "Ungdomshuset",
    registration: "Åpen for alle",
  },
];
