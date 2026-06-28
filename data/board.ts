import type { BoardMember } from "./types";

/**
 * SAIL Executive Board.
 *
 * Photos live in /public/board. To update a member, edit the fields below; to
 * add one, copy a block and drop their headshot in /public/board.
 *
 * `feature: true` makes a member span the wide hero card at the top of the grid.
 */
export const board: BoardMember[] = [
  {
    id: "samarth-khandelwal",
    name: "Samarth Khandelwal",
    role: "President & Founder",
    photo: "/board/samarth.png",
    bio: "Founded SAIL after noticing how many students used AI irresponsibly. Plans to major in computer science and finance; enjoys piano, cello, and running.",
    link: "mailto:sail.national.youth@gmail.com",
    feature: true,
  },
  {
    id: "armaan-tindni",
    name: "Armaan Tindni",
    role: "Vice President",
    photo: "/board/armaan.png",
    bio: "A finance enthusiast who finds enjoyment in building people up — and that's also his goal in SAIL.",
  },
  {
    id: "kayla-ofosu",
    name: "Kayla Ofosu",
    role: "Director of Curriculum",
    photo: "/board/kayla.jpeg",
    bio: "Women's and mental-health advocate, InHerVision founder, epidemiology champion, and aspiring AI-health innovator driving impact.",
  },
  {
    id: "dharshenee-kasiviswanathan",
    name: "Dharshenee Kasiviswanathan",
    role: "Director of Outreach",
    photo: "/board/dharshenee.jpg",
    bio: "An active person who loves to read, roller skate, and listen to music.",
  },
  {
    id: "ariv-sharma",
    name: "Ariv Sharma",
    role: "Director of Marketing & Communications",
    photo: "/board/ariv.jpeg",
    bio: "Aspires to run his own tech business. Into coding, photography, casual gaming, music production, and tennis.",
  },
  {
    id: "kushagra-khandelwal",
    name: "Kushagra Khandelwal",
    role: "Director of Chapter Expansion",
    photo: "/board/kushagra.jpg",
    bio: "Enjoys playing video games and aspires to become an engineer.",
  },
  {
    id: "jason-bronson",
    name: "Jason Bronson Jr.",
    role: "Director of Treasury",
    photo: "/board/jason.jpeg",
    bio: "Cincinnati entrepreneur and professional photographer who also serves with the Cincinnati Fire Department as a Fire Cadet.",
  },
  {
    id: "emmy-schulert",
    name: "Emmy Schulert",
    role: "Outreach",
    photo: "/board/emmy.jpeg",
    bio: "A senior who plays flute and tuba in concert and marching band, and aspires to be a museum curator or historian.",
  },
];
