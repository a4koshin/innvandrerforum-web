interface Boards {
  id: number;
  name: string;
  title: string;
  img: string;
}

export const boards: Boards[] = [
  {
    id: 0,
    name: "Hassan Mude",
    title: "Styreleder",
    img: "/Roble.jpeg",
  },

  {
    id: 1,
    name: "Hassan Mohamoud",
    title: "Styremedlem",
    img: "/Hassan.jpeg",
  },
  {
    id: 2,
    name: "Nura Mohamed Ali",
    title: "Styremedlem",
    img: "/Nura.jpeg",
  },
  {
    id: 3,
    name: "Roble Shine",
    title: "Styremedlem",
    img: "/User.jpg",
  },
];

export const administration: Boards[] = [
  {
    id: 0,
    name: "Ahmed Warsame",
    title: "Daglig leder",
    img: "/Ahmed.jpeg",
  },
  {
    id: 1,
    name: "Munasar Abdullah",
    title: "Prosjektkoordinator",
    img: "/Munasar.jpeg",
  },
  {
    id: 2,
    name: "Abdi Fatah Bile",
    title: "Aktivitetsansvarlig",
    img: "/Abdi.jpeg",
  },
  {
    id: 3,
    name: "Khalid Abdulahi",
    title: "ungdomshus",
    img: "/User.jpg",
  },
];

export const volunteers: Boards[] = [
  {
    id: 0,
    name: "Ayan Adan",
    title: "Ressursperson – familiekontakt",
    img: "/User.jpg",
  },
  {
    id: 1,
    name: "Mahmud Abdulahi",
    title: "Ressursperson – ungdomshus og arrangementer",
    img: "/User.jpg",
  },
  {
    id: 2,
    name: "Said Ali",
    title: "Ressursperson – ungdomshus",
    img: "/User.jpg",
  },
  {
    id: 3,
    name: "Nafiso Farah",
    title: "Ressursperson – kvinnegruppe",
    img: "/User.jpg",
  },
  {
    id: 4,
    name: "Paul Stronegger",
    title: "Frivillig – språkkafé / ungdomskafé",
    img: "/User.jpg",
  },
  {
    id: 5,
    name: "Simon Martin",
    title: "Frivillig – språkkafé og aktiviteter",
    img: "/User.jpg",
  },
];
