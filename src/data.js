import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Hope It's Not",
      cover:
        "https://cms.chillhop.com/media/79291/squarel4416fe0abb0ce765cb58be4812a4ee0578ad794f.jpg",
      artist: "J.Folk",
      audio: "https://stream.chillhop.com/mp3/77541",
      color: ["#413851", "#508B32"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Impulse",
      cover:
        "https://cms.chillhop.com/media/77074/squarelc1284a87fb0e47c518ccaec1df4f732a2f50230f.jpg",
      artist: "Enough Cereals",
      audio: "https://stream.chillhop.com/mp3/75137",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Seu Trio",
      cover:
        "https://cms.chillhop.com/media/78387/squarel9cfe1a9f1dbf76a04cf4c343dbdb6049acb11147.jpg",
      artist: "Psalm Trees",
      audio: "https://stream.chillhop.com/mp3/75541",
      color: ["#D0866F", "#7E5A6C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Lemon",
      cover:
        "https://cms.chillhop.com/media/824/squarel53eef8b1ac9bf40038b2b5dc7ca2d13fc19cf95e.jpg",
      artist: "Tom Doolie",
      audio: "https://stream.chillhop.com/mp3/7977",
      color: ["#E15A76", "#6FABCF"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Early June",
      cover:
        "https://cms.chillhop.com/media/79293/squarele8ade07103d3d6d04fad3a0d1d6c668df8295115.jpg",
      artist: "lloom",
      audio: "https://stream.chillhop.com/mp3/79272",
      color: ["#F0D59E", "#485246"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Meadow Terrain",
      cover:
        "https://cms.chillhop.com/media/75412/squarel256102801cdd93947be7735c697926d9d3fe1c0a.jpg",
      artist: "Mama Aiuto",
      audio: "https://stream.chillhop.com/mp3/74265",
      color: ["#95451C", "#FFED9C"],
      id: uuidv4(),
      active: false,
    },
    {
      name: " Squid Game (Let's Play)",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/34/f3/17/34f317e9-3654-62d2-d0d6-44020bfc4725/21UM1IM54437.rgb.jpg/600x600bb.webp",
      artist: "Alok",
      audio: "/squid.mp3",
      color: ["#EA5089", "#010103"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
