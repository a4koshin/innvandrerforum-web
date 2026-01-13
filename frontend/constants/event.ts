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
    title: "Forebyggende",
    description:
      "Forebyggende ungdomsarbeid er en sentral del av Innvandrerforum i Østfold sitt arbeid. Vi jobber aktivt for å forebygge utenforskap, ensomhet og negative påvirkninger ved å tilby trygge møteplasser og meningsfulle aktiviteter for ungdom.",
    image: "/wacyi.jpeg",
  },
  {
    id: 2,
    title: "Dialogkvelder",
    description:
      "Dialogkvelder er en sentral del av vårt arbeid for inkludering og fellesskap. Her legger vi til rette for åpne og respektfulle samtaler om temaer som integrering, identitet, likestilling, oppvekst og hverdagsutfordringer.",
    image: "/dailog.jpeg",
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
