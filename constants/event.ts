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
    title: "Football Tournament",
    description:
      "Join our annual 5-a-side knockout championship. Trophies await the winning team! Perfect for competitive spirits and team building.",
    image: "/fotbal1.JPG",
  },
  {
    id: 2,
    title: "Cabin Tour",
    description:
      "Explore scenic mountain cabins with guided nature walks. Experience tranquility and breathtaking views in the wilderness.",
    image: "/fotbal1.JPG",
  },
  {
    id: 3,
    title: "Bowling Championship",
    description:
      "Friendly team bowling with cosmic lights and music. Prizes for highest scores and most creative team outfits!",
    image: "/fotbal1.JPG",
  },
  {
    id: 4,
    title: "Cinema Night",
    description:
      "Exclusive private screening of a blockbuster premiere. Enjoy gourmet popcorn, drinks, and luxury seating.",
    image: "/fotbal1.JPG",
  },
];
