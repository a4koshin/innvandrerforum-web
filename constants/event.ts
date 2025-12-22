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
      "Turnering for barn, ungdom og familier med fokus på inkludering og fair play.",
    image: "/fotbal1.JPG",
  },
  {
    id: 2,
    title: "Bowlingmesterskap",
    description: "Sosial aktivitet for ungdom og familier.",
    image: "/bowling.jpeg",
  },
  {
    id: 3,
    title: "Hyttetur og friluftslivsaktiviteter",
    description:
      "Turer med overnatting, matlaging ute og naturaktiviteter for barn, ungdom og familier.",
    image: "/cabin.jpg",
  },

  {
    id: 4,
    title: "Kinokveld",
    description: "Felles filmkvelder for barn, ungdom og familie",
    image: "/kino.jpeg",
  },
];
