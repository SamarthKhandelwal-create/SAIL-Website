import type { OutreachEvent } from "./types";

/**
 * SAIL outreach events — the single source of truth for the outreach section,
 * the event calendar, and each article page (/outreach/[slug]).
 *
 * NOTE: The write-ups below are drafts built around the real photos and dates.
 * Tune the wording, venue names, and any figures to match what actually
 * happened, then commit. To add an event, copy a block, set a unique `id`
 * (this becomes the article URL), drop photos in /public/outreach, and list
 * them here. The calendar and cards update automatically.
 */
export const events: OutreachEvent[] = [
  {
    id: "hands-on-ai-workshop",
    title: "A Hands-On Day of AI Literacy",
    date: "2026-06-22",
    location: "Youth Center · Cincinnati, OH",
    summary:
      "Students explored how AI really works — then put it to the test with a hands-on session and take-home smart notebooks.",
    cover: "/outreach/img-8493.jpg",
    article: [
      "For our second summer session, SAIL volunteers returned to lead a full afternoon of hands-on AI literacy. Under the SAIL banner on the big screen, students dug into how everyday AI tools actually make decisions — and why understanding those tools matters more than ever.",
      "One of our student leads walked the group through a live demo, breaking down how an AI model generates text and where it can get things wrong. From there, participants worked through guided activities, filling clipboards with their own predictions and reflections before comparing notes as a group.",
      "Every participant went home with a reusable smart notebook to keep experimenting on their own. We closed the day with a group photo — a room full of young people who now think a little more critically about the technology shaping their world.",
    ],
    photos: [
      {
        src: "/outreach/img-8493.jpg",
        alt: "Students gathered in front of a screen displaying the SAIL logo at the youth center",
      },
      {
        src: "/outreach/img-8479.jpg",
        alt: "A SAIL student lead presenting from a podium beside a screen during the workshop",
      },
      {
        src: "/outreach/img-8490.jpg",
        alt: "Participants smiling together beneath the SAIL Students For AI Literacy screen",
      },
      {
        src: "/outreach/img-8496.jpg",
        alt: "A young participant holding the reusable smart notebook she received at the session",
      },
    ],
  },
  {
    id: "summer-ai-literacy-session",
    title: "Summer AI Literacy Session",
    date: "2026-06-08",
    location: "Youth Center · Cincinnati, OH",
    summary:
      "An interactive workshop where students learned to question, understand, and responsibly use the AI tools they meet every day.",
    cover: "/outreach/img-8340.jpg",
    article: [
      "SAIL kicked off its summer programming with an interactive workshop for local students. Rather than a lecture, the session was built around discussion and note-taking — students sketched out what they already believed about AI, then tested those ideas against how the technology actually behaves.",
      "Our volunteers guided the group through real examples: where AI is genuinely useful, where it falls short, and how to spot the difference. Hands shot up throughout as students connected the concepts to the apps and assistants already part of their daily lives.",
      "The afternoon wrapped with a group photo and a lot of new questions — exactly the goal. AI literacy isn't about memorizing answers; it's about learning to ask better questions of the tools around us.",
    ],
    photos: [
      {
        src: "/outreach/img-8340.jpg",
        alt: "Group photo of students at the summer AI literacy session",
      },
      {
        src: "/outreach/img-8330.jpg",
        alt: "A SAIL volunteer leading a discussion with students seated in a semicircle",
      },
      {
        src: "/outreach/img-8335.jpg",
        alt: "Students taking notes on clipboards, one raising a hand to answer",
      },
      {
        src: "/outreach/img-8339.jpg",
        alt: "Participants gathered together at the end of the workshop",
      },
    ],
  },
  {
    id: "teen-center-first-session",
    title: "Bringing AI Literacy to the Teen Center",
    date: "2026-03-24",
    location: "Teen Center · Cincinnati, OH",
    summary:
      "Our first community session — small-group conversations that met students where they are and made AI approachable.",
    cover: "/outreach/img-7552.jpg",
    article: [
      "SAIL's outreach began with a simple idea: meet students where they already gather. At a local teen center, our volunteers set up around the tables and started a conversation about artificial intelligence — no jargon, no pressure, just questions.",
      "Working in small groups, students talked through where they'd already run into AI and what they wished they understood about it. The relaxed setting made it easy to ask the honest questions that a formal classroom sometimes discourages.",
      "That first afternoon set the tone for everything since — approachable, student-led, and rooted in real conversation. It's where the SAIL outreach program found its footing.",
    ],
    photos: [
      {
        src: "/outreach/img-7552.jpg",
        alt: "SAIL volunteers leading a discussion around tables at the teen center",
      },
      {
        src: "/outreach/img-7553.jpg",
        alt: "Students working through an activity in small groups at the teen center",
      },
    ],
  },
];
