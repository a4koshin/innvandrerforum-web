import { Children } from "react";

export const Navigations = [
  {
    id: 0,
    name: "Hjem",
    href: "/",
  },
  {
    id: 2,
    name: "Om Oss",
    href: "/omoss",
    Children: [
      {
        id: 21,
        name: "Våre sponsorer",
        href: "/varsponsorer",
      },
    ],
  },

  {
    id: 3,
    name: "Arrangementer",
    href: "/arrangementer",
  },
  {
    id: 4,
    name: "Fritidsaktiviteter",
    href: "/fritidsaktiviteter",
  },

  {
    id: 5,
    name: "Kontakt",
    href: "/kontakt",
  },
];
