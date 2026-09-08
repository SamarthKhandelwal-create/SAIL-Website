import type { OutreachEvent } from "./types";

/**
 * SAIL outreach events — the single source of truth for the outreach section,
 * the event calendar, and each article page (/outreach/[slug]).
 *
 * NOTE: The write-ups below are drafts built around the real photos, dates, and
 * the activities in our workshop curriculum — they are not transcripts. Read
 * them before a funder or reviewer does and correct anything that did not
 * happen the way it is described, particularly specific claims about what
 * students said or did in a given session.
 *
 * To add an event, copy a block, set a unique `id` (this becomes the article
 * URL), drop photos in /public/outreach, and list them here. The calendar and
 * cards update automatically.
 */
export const events: OutreachEvent[] = [
  {
    /**
     * UPCOMING. Written in the future tense on purpose — it has not happened
     * yet. After the session, rewrite `article` in the past tense and swap in
     * real photos; the calendar and the "Next session" banner move on by
     * themselves once the date passes.
     */
    id: "sycamore-fall-workshop",
    title: "Fall AI Literacy Workshop at Sycamore High School",
    date: "2026-09-25",
    location: "Sycamore High School · Cincinnati, OH",
    summary:
      "Our fall term opens at Sycamore High School with a hands-on session on how AI works, where it fails, and how to use it honestly in schoolwork.",
    cover: "/outreach/img-8493.jpg",
    article: [
      "SAIL opens its fall programming at Sycamore High School on September 25, 2026. The session follows the format our student instructors have refined over a year of workshops: no lecture, no jargon, and no assumption that anyone in the room has a technical background.",
      "Students will start with the drawing game — a neural network guessing doodles in real time, getting a bicycle instantly and then insisting a perfectly good cat is a lion. That gap between confident and correct is the lesson, and students reach it themselves before anyone defines a term.",
      "From there the group works through how a language model actually produces text: not by looking things up, but by predicting which word tends to come next. We run the human-or-AI exercise, where students read short passages and vote on which were machine-written. Most groups are confident, and most groups are wrong.",
      "The last stretch is about judgment rather than mechanics — where AI genuinely helps with schoolwork, where it crosses into doing the work for you, and how to check a claim from a tool that has no way of knowing whether it is true.",
      "Teachers and administrators at Sycamore who would like to send a class, and students interested in starting a chapter of their own, can reach us through the contact page.",
    ],
    photos: [
      {
        src: "/outreach/img-8493.jpg",
        alt: "Students gathered in front of a screen displaying the SAIL logo at an earlier workshop",
      },
    ],
  },
  {
    id: "hands-on-ai-workshop",
    title: "A Hands-On Day of AI Literacy",
    date: "2026-06-22",
    location: "Boys & Girls Club Summer Camp · Cincinnati, OH",
    summary:
      "Students explored how AI really works — then put it to the test with a hands-on session and take-home smart notebooks.",
    cover: "/outreach/img-8493.jpg",
    article: [
      "For our second summer session, SAIL volunteers returned to lead a full afternoon of hands-on AI literacy. Under the SAIL banner on the big screen, students dug into how everyday AI tools actually make decisions — and why understanding those tools matters more than ever.",
      "We opened the way we usually do: with a game. Students played a drawing game where a neural network tries to guess their doodles in real time. It gets a bicycle right immediately, then insists a perfectly good drawing of a cat is a lion. That gap — confident and wrong — is the whole lesson, and students find it themselves before anyone defines a single term.",
      "One of our student leads then walked the group through how a language model actually produces text: not by looking up facts, but by predicting what word tends to come next. We ran the human-or-AI exercise, where students read short passages and vote on which were machine-written. Most groups are confident and most groups are wrong, which is the point. One passage recommends a food bank as a must-visit tourist attraction — fluent, well-structured, and completely false.",
      "From there, participants worked through guided activities, filling clipboards with their own predictions and reflections before comparing notes as a group. The questions that came up were the ones we hope for: how would I check this, and who decided what the model learned?",
      "We spent the last stretch on judgment rather than mechanics — where AI helps with schoolwork and where it crosses into doing the work for you, why a model can sound authoritative about something it has invented, and what it means that these systems are trained on text written by people with their own blind spots.",
      "Every participant went home with a reusable smart notebook to keep experimenting on their own. We closed the day with a group photo — a room full of young people who now think a little more critically about the technology shaping their world.",
    ],
    photos: [
      {
        src: "/outreach/img-8493.jpg",
        alt: "Students gathered in front of a screen displaying the SAIL logo at the Boys & Girls Club",
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
    location: "Boys & Girls Club Summer Camp · Cincinnati, OH",
    summary:
      "An interactive workshop where students learned to question, understand, and responsibly use the AI tools they meet every day.",
    cover: "/outreach/img-8340.jpg",
    article: [
      "SAIL kicked off its summer programming with an interactive workshop for local students. Rather than a lecture, the session was built around discussion and note-taking — students sketched out what they already believed about AI, then tested those ideas against how the technology actually behaves.",
      "We started by asking the room what artificial intelligence is. The answers ranged from robots to ChatGPT to a general sense of something watching. All of those are reasonable starting points, and none of them are quite it, so we worked from there toward something more useful: systems that recognize patterns, make predictions, and generate content — tasks that used to require a person.",
      "Our volunteers guided the group through real examples: where AI is genuinely useful, where it falls short, and how to spot the difference. Hands shot up throughout as students connected the concepts to the apps and assistants already part of their daily lives — the recommendation feeds deciding what they watch, the autocomplete finishing their sentences, the homework help that sometimes invents a source.",
      "A good stretch of the session went to prompting. Students saw how much the phrasing of a request changes what comes back, and how a vague prompt produces a vague answer that can still sound authoritative. Asking a model to explain photosynthesis to a five-year-old produces something genuinely different from asking it to explain photosynthesis — and noticing that difference is a skill.",
      "We closed on the part that matters most: what to do when you cannot tell whether an answer is right. Check it against a source you trust. Notice when a tool is confident about something it has no way to know. Treat the output as a draft rather than an answer.",
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
    title: "Bringing AI Literacy to the Boys & Girls Club",
    date: "2026-03-24",
    location: "Boys & Girls Club Summer Camp · Cincinnati, OH",
    summary:
      "Our first community session — small-group conversations that met students where they are and made AI approachable.",
    cover: "/outreach/img-7552.jpg",
    article: [
      "SAIL's outreach began with a simple idea: meet students where they already gather. At the Boys & Girls Club, our volunteers set up around the tables and started a conversation about artificial intelligence — no jargon, no pressure, just questions.",
      "This was our first session, and we had planned it as a presentation. That lasted about five minutes. The students had more to say than we expected, so we abandoned the slides and moved to the tables, and the session became a set of small-group conversations instead. Nearly every workshop we have run since is built that way, because of what happened in that room.",
      "Working in small groups, students talked through where they'd already run into AI and what they wished they understood about it. Several were using AI tools for schoolwork and were unsure whether they were allowed to, or where the line was. Some had been told simply not to. Almost none had been taught how the tools work or how to tell when one is wrong, which is the gap the whole organization exists to close.",
      "The relaxed setting made it easy to ask the honest questions that a formal classroom sometimes discourages — including the ones students are reluctant to raise in front of a teacher who might be grading them on it. Being high school students ourselves is most of why those questions got asked at all.",
      "That first afternoon set the tone for everything since — approachable, student-led, and rooted in real conversation. It is also where our curriculum started: nearly every activity we now use came out of noticing what actually held a room's attention here, and what did not.",
    ],
    photos: [
      {
        src: "/outreach/img-7552.jpg",
        alt: "SAIL volunteers leading a discussion around tables at the Boys & Girls Club",
      },
      {
        src: "/outreach/img-7553.jpg",
        alt: "Students working through an activity in small groups at the Boys & Girls Club",
      },
    ],
  },
];
