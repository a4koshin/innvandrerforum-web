// app/annual-event/types/event.ts
export interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Fotballturnering",
    description:
      "En årlig fotballturnering som samler ungdom, familier og frivillige til en sosial og inkluderende dag.",
    image: "/fotbal1.JPG",
  },
  {
    id: 2,
    title: "Bowlingmesterskap",
    description:
      "Årlig bowlingkveld for ungdom og familier, med fokus på sosialt samvær og fellesskap.",
    image: "/bowling.jpeg",
  },
  {
    id: 3,
    title: "Hytteomvisning",
    description:
      "Årlige turer med overnatting i naturen, hvor deltakerne får oppleve friluftsliv, mestring og fellesskap.",
    image: "/cabin.jpg",
  },

  {
    id: 4,
    title: "Kinokveld",
    description:
      "Årlig film- eller kinokveld som gir barn, ungdom og familier en felles sosial opplevelse.",
    image: "/cinema.jpeg",
  },
];
