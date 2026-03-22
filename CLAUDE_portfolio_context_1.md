# CLAUDE.md — Portfolio Project Context

## What this is
FF (Feifei Deng) is building her portfolio to apply for a Product Designer role at Anthropic. This file captures the strategy, decisions, and drafts from a deep planning conversation so work can continue in Claude Code.

## Portfolio Strategy

### Target role
Product Designer at Anthropic. Active openings as of March 2026 in Seattle (hybrid, 25% in-office). Requires 8+ years product design experience, strong portfolio, prototyping in code, comfort with ambiguity. Anthropic values: interaction invention for AI, trust/safety thinking, design craft + research + product intuition.

### Portfolio principles
- Senior+ level = short case studies, strong point of view, clear judgment. NOT step-by-step process documentation.
- No "Research Phase → User Flows → Lo-fi → Hi-fi" progressions. Show decisions, not process.
- Each piece answers one question in under 2 minutes of reading.
- Depth happens in the interview conversation. The portfolio's job is to get her into that conversation and give interviewers hooks to ask about.

### Structure: 4 case studies + About

**Case Study 1 (60% of portfolio): "HappyPath → MiniPath"**
- Question it answers: "Can she invent new interaction patterns for AI?"
- Story arc: Built HappyPath as volunteer project → 15 months of deepening AI expertise → honest retro of own work when team wanted to resume → rebuilt from first principles as MiniPath
- Key design moves to highlight: (1) Component-level sandbox isolation (new interaction pattern), (2) Transparent AI reasoning/plan execution, (3) Four modes for prototype lifecycle (Exploration/Working/Communication/Artifact), (4) Three-layer design system model
- Ends with open research question about AI convergence vs. innovation — what "creation" means when AI is constrained by design systems
- Has strong screenshots showing the working product

**Case Study 2 (separate, concise): "AI Workflow Transformation"**
- Question it answers: "Can she lead organizational change?"
- Story: In 4 months went from personal AI exploration → designed context architecture (markdown system, CLAUDE.md, memory structures) → shipped vibe-coded React prototype handoff using real DS components → built tools/extensions/skills for team → created learning program with differentiated JTBD paths → proved skeptics wrong by building prototypes others said couldn't be done
- Reads as leadership narrative, not process doc. Short paragraphs, clear arc.

**Case Study 3 (one page): "Autonomous Delivery Robot UX"**
- Question it answers: "Can she operate in ambiguity and complex technical domains?"
- Broad overview of 5 spaces: simulation, teleoperation, fleet management, last-mile integration, HRI exploration
- Key moments: UX Framework doc in 2 weeks with no PM, HRI research synthesis (Chen et al., Lee & See, Rea & Seo, Boker et al.), navigating engineer pushback
- Ends with personal thesis: physical operations + AI + trust

**Case Study 4 (brief): "DSP Business Health Dashboard"**
- Question it answers: "Can she use research to challenge assumptions?"
- 6 DSP owner interviews → 80% PRD misalignment → gap analysis → redirected product conversation from "what metrics to show" to "how to help DSP owners make better decisions"
- Punchline: knowing when to stop designing and challenge the premise matters more than craft

**About section**
- Senior UX Designer, complex systems + physical operations + AI
- Currently: Amazon ADR team
- Interest: how humans and AI work together — trustworthy, controllable, genuinely useful AI
- Background in interior design and landscape architecture (systems thinking, spatial relationships)
- Maomao Squad mention for personality/craft range (one line, not a full section)

## Key files

- `/portfolio_stories.md` — Full drafted copy for all 4 case studies + About section. Ready for refinement and adaptation to whatever format FF chooses (website, deck, Notion, etc.)

## FF's background (relevant to portfolio decisions)

- Senior UX Designer at Amazon, Delivery Experience Studio team
- ~15 months on HappyPath/MiniPath journey
- Doesn't write code herself — vibe codes entirely through AI (Claude Code, Kiro)
- MiniPath built with Claude Code, has React app with real AI, design system (Signal identity with terracotta/sage/charcoal palette)
- ADR work spans 5 spaces, no PM support, navigated engineer pushback on UX process
- DSP work included 6 user interviews that revealed 80% PRD misalignment
- Runs Maomao Squad (illustration/stationery, hand-drawn cat & dog art, hot pink #E8368F accent)
- Background in interior design and landscape architecture
- Based in Seattle

## What to do next

FF planned to work on this over the weekend. Likely next steps:
1. Choose portfolio format (website vs deck vs Notion)
2. Refine the drafted copy in portfolio_stories.md — adjust for NDA sensitivity, add/remove details
3. Integrate actual screenshots and images (MiniPath UI screenshots, retro board, ADR framework excerpts)
4. Build out the actual portfolio pages/slides
5. Review for length — each case study should be scannable in under 2 minutes

## Important framing notes from our conversation

- MiniPath IS a design project even though the primary artifact is a system, not screens. The case study needs to make visible the design work: information architecture (context system), interaction design (sandbox model), service design (prototype lifecycle modes), product design (the tool itself).
- The sandbox isolation pattern (click component → isolate → scoped conversation → merge back) is genuinely new and doesn't exist in other tools. Highlight this.
- The retro board image is powerful — it shows her questioning her own work BEFORE anyone else did. One image + caption is enough.
- The "innovation vs. convergence" open question at the end of the MiniPath story is intentionally unresolved. Anthropic values sitting with hard questions over premature conclusions.
- Her vibe-coding approach should be framed as a strength: "I use AI-assisted prototyping to explore design spaces at a pace traditional hand-coding can't match." Not something to explain away.
- The AI workflow transformation story should NOT be merged into MiniPath — keep them separate. MiniPath is a product story. The transformation is an organizational leadership story.

---

## Appendix: FF's Raw Messages (preserving original voice and context)

### On the AI workflow transformation journey (the 4-month arc)

"Some other details - I stated with using AI, exploring use case to help with my work -> refining workflow rather than using AI adjacent -> experiment a markdown doc system to manage all my projects and create context pool for my tool -> create knowledge/memory/process for AI to understand my expectations so it can perform better and more consistent-> working with my new tech teams to experiment and build the new handoff process, my newest design handoff was vibe coded react prototype using components from our DS  ->I have been sharing my experience and creating guidance for team to try out my successful use case -> start building tools for the team to use, extension/app/skills etc -> create programs to facilitate positive learning environments for integrating AI  -> when people are asking around and wondering if AI can build certain type of prototype to meet their research needs, I jumped in to vibe code and approve it would work while some people thought it wouldn't work."

"All these happened in about 4 months"

### On the HappyPath → MiniPath journey

"I think Happy Path + Mini Path can show my design skills. The evolution of them reflects my whole journey. I started working on it as volunteer 15 months ago while my knowledge about AI is limited. I created the design that works for lots of people based my UX expertise, however as my understanding and familiarity of AI grew and changed, I kept going back to do honest retro about my own works. The beginning of this year when the team wanted to pick up happy path again, people coming in without much thinking but I showed up with a full retro of my works. I questioned my mental model, challenged my thoughts about what Happy Path should do, I pointed out my own gaps."

"Later when I need to brainstorm about Happy Path again. I vibe coded MiniPath using Claude code and connected with Claude code CLI to actually show what I think what Happy Path should've been. Even though I'm not familiar with it yet, still need polishing, I started with sharing my concepts, end to end thinking, planning for core features and flows, quick html prototype to validate interactions and flows, then build the react app that has real AI, I ran QA and code audit to check if there is any cache or stale data. I brainstormed a design system/style guide for MiniPath as well."

"This is only one layer of what I did for Happy Path + MiniPath, building the tool with the right features; another layer is I started thinking and brainstorming with Claude - why AI outputs are always similar, especially when there DS constraints? How do I enable innovation if going wild and explore the unfamiliar territories is needed? Would it be helpful if I feed AI good app/tools/website as examples? Then I realized it's not about providing visual example to the AI, that's one layer, but what I need to do is to teach AI the output strategy, the domain focused context. My thinking about Happy/Mini Path is not done yet, I'm exploring what 'creation' and 'innovation' mean, how does it happens in human brain and behavior, how do I translate that to AI tool?"

### On portfolio structure concerns

"I'm worry this is gonna make the case study too long, that's why I was thinking separated them. I noticed lots of senior to higher level UXD, would keep their portfolio very short, they don't show all steps like research -> user flow -> lo-fi -> hi-fi etc etc anymore."

### On what she considered including

"I'm thinking Happy/MiniPath, my thinking and process changing of design workflow and for my team, one of the ADR projects (or I can list out everything I did for ADR spaces with limited details since I'm across 5 spaces - simulation, teleoperation, fleet management, intergration to Last mile system and HRI exploration), only thing is - it's lots of communication and less design crafts since they are still ongoing and they are new. I have more design craft for DSP business health dashboard - that's where I gave out UX strategy, tested early concept with users, identify pain points and gaps, push conversation etc, but it's not a super exciting design craft either, just a one page dashboard."

### On whether the MiniPath story counts as a "design project"

FF asked: "You think this could be the core piece in my portfolio even though it's not a design project?"

Key context: This question revealed FF was undervaluing the MiniPath work because it doesn't fit the traditional "screens and flows" definition of design. The conversation established that MiniPath IS design work — information architecture (context system), interaction design (sandbox model), service design (prototype lifecycle), product design (the tool itself). The artifact is a system rather than screens, and the user is a designer working with AI rather than an end consumer, but the design thinking is sophisticated and demonstrable.

### Key decisions made during the conversation

1. Separate MiniPath (product story) from workflow transformation (organizational story) — don't merge them
2. Keep everything short — senior-level portfolio = judgment not process
3. ADR goes broad across 5 spaces rather than deep on one project
4. DSP dashboard included for the "research redirected a product" story, not for visual craft
5. Each case study answers one specific question in under 2 minutes
6. MiniPath is the anchor/differentiator — no other Anthropic candidate will have this story
7. The "innovation vs. convergence" question stays intentionally unresolved
8. Retro board = one image + caption, not a full section
9. Maomao Squad mentioned in About for personality, not a portfolio piece
10. Portfolio format TBD — FF will decide between website/deck/Notion this weekend
