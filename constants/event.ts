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
      "Bli med på vårt årlige 5-manns knockout-mesterskap. Trofeer venter på vinnerlaget! Perfekt",
    image: "/fotbal1.JPG",
  },
  {
    id: 2,
    title: "Bowlingmesterskap",
    description:
      "Vennlig lagbowling med kosmiske lys og musikk. Premier for høyeste poengsum og flest",
    image: "/bowling.jpeg",
  },
  {
    id: 3,
    title: "Hytteomvisning",
    description:
      "Utforsk naturskjønne fjellhytter med guidede turer i naturen. Opplev ro og fantastisk utsikt i villmarken.",
    image: "/cabin.jpg",
  },

  {
    id: 4,
    title: "Kinokveld",
    description:
      "Eksklusiv privatvisning av en storfilmpremiere. Nyt gourmetpopcorn, drikke og luksuriøse sitteplasser.",
    image: "/cinema.jpeg",
  },
];
