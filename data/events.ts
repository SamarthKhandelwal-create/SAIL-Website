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
     * UPCOMING — calendar only. No `article`, so there is no page to read yet;
     * see `calendarOnly` in data/types.ts. After the session, write the recap,
     * add real photos, and remove the flag.
     */
    id: "sycamore-fall-workshop",
    title: "Fall AI Literacy Workshop at Sycamore High School",
    date: "2026-09-25",
    location: "Sycamore High School · Cincinnati, OH",
    summary:
      "Our fall term opens at Sycamore High School with a hands-on session on how AI works, where it fails, and how to use it honestly in schoolwork.",
    cover: "/outreach/img-8493.jpg",
    calendarOnly: true,
    article: [],
    photos: [],
  },
  {
    /**
     * Not a workshop — a partnership write-up. It sits in this file because
     * /outreach is the only place the site tells stories, and the museum
     * relationship is the same kind of news. The $500 grant is also listed in
     * data/sponsors.ts; update both if the amount or status changes.
     */
    id: "voa-museum-partnership",
    title: "SAIL Joins the National Voice of America Museum of Broadcasting",
    date: "2026-09-04",
    location: "National Voice of America Museum of Broadcasting · West Chester, OH",
    summary:
      "A $500 grant, a permanent display in the museum, and a forthcoming press release — SAIL's first partnership with a museum dedicated to the history of how information travels.",
    cover: "/outreach/voa-poster.jpg",
    article: [
      "SAIL has partnered with the National Voice of America Museum of Broadcasting in West Chester, Ohio, which has awarded us a $500 grant and given our work a permanent spot on its floor. Our display — a poster on the museum's three pillars of our work, alongside a stand of brochures visitors can take with them — now greets people as they move through the galleries.",
      "The fit is better than it might first appear. The museum exists to tell the story of how information reaches people: the transmitters that carried news across oceans, the decisions about what got broadcast, and the question of who gets to be believed. That is not a different subject from ours. AI literacy is the current chapter of the same story — a new set of systems producing information at scale, and a new generation trying to work out what to trust.",
      "The display lays out what SAIL is and how to reach us: our mission and vision, the case for AI literacy, and the survey findings we keep returning to — that 72% of students say guidance on how to use generative AI responsibly would be helpful, and 79% of teachers say their district has no clear policy on AI in education. Between those two numbers is the gap our volunteers step into every time they teach a session.",
      "The brochures carry our tagline — AI literacy for students, by students — and the three ways into the organization: apply to lead a chapter, get the curriculum guide, or bring a workshop to your own students. Every role is open to high schoolers, and the guide is free.",
      "The museum plans to publish a press release about the partnership. We will link it here once it is out.",
      "For SAIL, the value is reach of a kind we cannot manufacture ourselves. Our workshops put us in front of a classroom at a time. A display in a museum puts us in front of families, teachers, and students who came for something else entirely and leave having encountered the idea that AI literacy is something a young person can learn — and teach.",
    ],
    photos: [
      {
        src: "/outreach/voa-poster.jpg",
        alt: "SAIL's display board at the VOA Museum, headed 'Our 3 Pillars' and 'SAIL AI Literacy', with mission, statistics, and program panels",
      },
      {
        src: "/outreach/voa-display.jpg",
        alt: "The SAIL display in a museum gallery, with the poster board mounted above a plinth of brochures",
      },
      {
        src: "/outreach/voa-flyers.jpg",
        alt: "SAIL brochures and a flyer dispenser arranged on the display plinth, reading 'AI literacy for students, by students'",
      },
    ],
  },
  {
    id: "hyde-park-school-assembly",
    title: "200 Students in a Day at Hyde Park School",
    date: "2026-09-04",
    location: "Hyde Park School · Cincinnati, OH",
    summary:
      "Our largest single day yet — back-to-back sessions that brought AI literacy to roughly 200 elementary students, one classroom at a time.",
    cover: "/outreach/hyde-park-class.jpg",
    article: [
      "On September 4, SAIL volunteers spent the day at Hyde Park School in Cincinnati, running back-to-back sessions that reached roughly 200 students — the most we have taught in a single day. Rather than gather everyone into one hall, we worked class by class, which kept every session small enough for students to actually talk.",
      "This was also our youngest audience to date. Most of our curriculum was built for middle and high schoolers, and teaching elementary students meant finding out quickly which parts survive the change and which do not. The mechanics of a language model predicting the next word can be explained to a fifth grader. The vocabulary we normally use to explain it cannot.",
      "So we leaned on the demonstrations. The drawing game does the same work in any room: a neural network guesses a bicycle instantly, then insists a perfectly good cat is a lion. Younger students find that funnier than older ones do, and they arrive at the same conclusion faster — the computer is sure, and the computer is wrong, and those two things can be true at once.",
      "What changed was the discussion. With older students we spend the last stretch on academic honesty and where AI crosses from helping into doing the work for you. With this group the more useful question was simpler and, we think, more fundamental: how would you check? Students traded answers — ask a teacher, look it up somewhere else, see if it sounds right — and built a rough version of source-checking out of their own instincts.",
      "Teaching the same material eight or nine times in a day is its own education for our volunteers. The explanations that work get sharper with each repetition, and the ones that do not get quietly abandoned by the third session. Several of the simplifications our instructors invented on the fly at Hyde Park are going straight into the curriculum.",
      "Our thanks to the teachers and administrators at Hyde Park School, who organized the schedule that made a day like this possible. Schools interested in hosting a session, at any grade level, can reach us through the contact page — there is no cost.",
    ],
    photos: [
      {
        src: "/outreach/hyde-park-class.jpg",
        alt: "A class of Hyde Park School students gathered for a group photo with SAIL volunteers at the end of their session",
      },
    ],
  },
  {
    id: "termcon-privacy-article",
    title: "Before You Prompt: A Co-Authored Article with TermCon",
    date: "2026-09-07",
    location: "Published online · termcon.app",
    summary:
      "SAIL and TermCon co-authored an article on why privacy belongs in AI literacy — and built a joint workshop around reading the terms of service students agree to without reading.",
    cover: "/outreach/img-8479.jpg",
    article: [
      "SAIL has co-authored an article with TermCon, published September 7 under the title \"Before You Prompt: Why Privacy Belongs in AI Literacy.\" It argues for something our own curriculum had been treating as a footnote: that what happens to what you type into a chatbot is part of AI literacy, not a separate subject.",
      "The case is straightforward once stated. Students talk to chatbots the way they would talk to a search bar or a friend, and the feeling of privacy is strong — it is a text box, the reply comes back only to you, nothing seems to be recorded. But every one of those tools operates under terms that spell out what is collected, how long it is kept, and what it may be used for. A 2026 Pew survey found 64% of American teens use AI chatbots, for everything from homework to conversations they would not have out loud. Almost none of them have read a word of those terms.",
      "This is recognized ground, not a fringe worry. UNESCO's 2024 AI Competency Framework for students names privacy as part of AI ethics, and the FTC has opened an inquiry into seven chatbot companies over how they handle personal data and what safeguards exist for minors. The gap is not that the issue is unacknowledged; it is that almost nobody is teaching it to the students actually using these tools.",
      "The article's practical half is where our two organizations meet. TermCon builds tools for analyzing policy documents — the dense, deliberately unreadable text that nobody gets through. SAIL runs discussion-based workshops for students. Together we built sessions where students use TermCon's tools to actually read what a chatbot's terms say, then decide as a group whether that tool belongs anywhere near a particular assignment.",
      "The technique we keep coming back to is data minimization, and it teaches well because it is concrete. Before sending a prompt, take out what the model does not need: your full name, your school, the name of the friend the situation is actually about. Students grasp it immediately, and it is a habit rather than a rule — it survives contact with whatever tool replaces the current one.",
      "A school can do a version of this in one class period. Take a chatbot's privacy policy, put students in groups, and have them find one thing that surprises them. Then run a redaction exercise: here is a prompt a student might really send, cross out everything that does not need to be there. That is the whole lesson, and it changes how students type for a long time afterward.",
      "The full article is available at termcon.app/before-you-prompt.",
    ],
    photos: [
      {
        src: "/outreach/img-8479.jpg",
        alt: "A SAIL student lead presenting from a podium beside a screen during a workshop",
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
