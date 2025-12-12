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

const events: Event[] = [
  {
    id: 1,
    title: "Football Tournament",
    description:
      "Join our annual 5-a-side knockout championship. Trophies await the winning team! Perfect for competitive spirits and team building.",
    date: "Day 1 • June 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Central Sports Field",
    icon: "⚽",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    buttonText: "Join Tournament",
    spotsLeft: 12,
    featured: true,
  },
  {
    id: 2,
    title: "Cabin Tour",
    description:
      "Explore scenic mountain cabins with guided nature walks. Experience tranquility and breathtaking views in the wilderness.",
    date: "Day 2 • June 16, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Pinewood Mountains",
    icon: "🏔️",
    color: "from-amber-600 to-orange-500",
    bgColor: "bg-amber-50",
    buttonText: "Book Tour",
    spotsLeft: 8,
    featured: false,
  },
  {
    id: 3,
    title: "Bowling Championship",
    description:
      "Friendly team bowling with cosmic lights and music. Prizes for highest scores and most creative team outfits!",
    date: "Day 3 • June 17, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Strikes & Spares Alley",
    icon: "🎳",
    color: "from-purple-600 to-pink-500",
    bgColor: "bg-purple-50",
    buttonText: "Register Team",
    spotsLeft: 5,
    featured: false,
  },
  {
    id: 4,
    title: "Cinema Night",
    description:
      "Exclusive private screening of a blockbuster premiere. Enjoy gourmet popcorn, drinks, and luxury seating.",
    date: "Day 4 • June 18, 2024",
    time: "8:00 PM - 11:00 PM",
    location: "Grand Theater",
    icon: "🎬",
    color: "from-blue-600 to-indigo-500",
    bgColor: "bg-blue-50",
    buttonText: "Get Tickets",
    spotsLeft: 20,
    featured: false,
  },
];
