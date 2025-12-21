interface Image {
  id: number;
  image: string;
  alt?: string;
  width: string;
}

export const Status: Image[] = [
  {
    id: 0,
    image: "/Østfold.jpeg",
    width: "",
  },
  { id: 1, image: "/NavFredrikstad.jpeg", width: "w-40 md:w-52" }, // Increased width
  { id: 2, image: "/Sparebank1.jpeg", width: "w-40 md:w-52" },
  {
    id: 3,
    image: "/LNUU.jpeg",
    width: "",
  },
  {
    id: 4,
    image: "/GjensidigeStiftelsen.jpeg",
    width: "",
  },
  {
    id: 5,
    image: "/FriFond.png",
    width: "",
  },
  {
    id: 6,
    image: "/FredrikstadKommune.png",
    width: "",
  },
  {
    id: 7,
    image: "/Bufdir.jpeg",
    width: "",
  },
  {
    id: 8,
    image: "/BergensenStiftels.png",
    width: "",
  },
];
