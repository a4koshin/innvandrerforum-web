interface Image {
  id: number;
  image: string;
  alt?: string;
  width: string;
  name: string;
}

export const Status: Image[] = [
  {
    id: 0,
    image: "/Østfold.jpeg",
    width: "",
    name: "Østfold fylkeskommune",
  },
  {
    id: 1,
    image: "/NavFredrikstad.jpeg",
    width: "w-40 md:w-52",
    name: "Nav Fredrikstad",
  }, // Increased width
  {
    id: 2,
    image: "/Sparebank1.jpeg",
    width: "w-40 md:w-52",
    name: "Sparebank1 Stiftelsen DNB",
  },
  {
    id: 3,
    image: "/LNUU.jpeg",
    width: "",
    name: "LNU",
  },
  {
    id: 4,
    image: "/GjensidigeStiftelsen.jpeg",
    width: "",
    name: "GjensidigeStiftelsen",
  },
  {
    id: 5,
    image: "/FriFond.png",
    width: "",
    name: "FriFond",
  },
  {
    id: 6,
    image: "/FredrikstadKommune.png",
    width: "",
    name: "Fredrikstad Kommune",
  },
  {
    id: 7,
    image: "/Bufdir.jpeg",
    width: "",
    name: "Bufdir",
  },
  {
    id: 8,
    image: "/BergensenStiftels.png",
    width: "",
    name: "BergensenStiftelsen",
  },
];
