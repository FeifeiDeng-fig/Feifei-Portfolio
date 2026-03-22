# Portfolio Story Drafts — FF

---

## Case Study 1: HappyPath → MiniPath
### Designing How Designers Create with AI
*Lead UX Designer · Amazon · Dec 2024 – Present (Intermittently)*

**Where it started**

At Amazon, the ratio of UX designers to PMs averages about 1 to 5. That imbalance means designers spend a lot of time on simple prototype requests that could be handled faster. HappyPath started as a volunteer project with a clear goal: build an AI prototyping tool embedded with Amazon's internal design system so PMs could create quick prototypes for straightforward requests — freeing designers for more strategic work.

As the only UX designer on a volunteer team that worked intermittently, I delivered the end-to-end experience: prototype creation, evaluation insights, history and version control, generation from existing products. HappyPath beta launched in April 2025 and became the first AI prototyping tool for Amazon operations.

**The honest retro**

We had initial success, but reality caught up. Resources were constrained and implementation was slow. Meanwhile, the technology landscape was moving fast — tools emerging, paradigms shifting. We reached a point where we needed to stop and ask: what do we actually want to build, and does our current direction still make sense?

When the team wanted to pick HappyPath back up, I didn't show up ready to continue. I showed up with a full retro of my own work.

I went through every design decision I'd made — not defensively, but honestly. I pointed out gaps in my own thinking, places where my assumptions hadn't held up, directions where the technology had outgrown my original mental model. While others were ready to pick up where we left off, I made the case that the foundation needed rethinking.

This wasn't easy. It's one thing to critique someone else's work. It's another to stand in front of a team and say: here's what I got wrong, and here's why we shouldn't keep building on it.

A few things I challenged:

**Flip the model.** We were asking people to slow down and answer questions before they could generate anything. But how many people actually want to do that? The original model was: ask questions first, then generate. What if we flipped it — generate first, critique second, educate continuously. Instead of making PMs fill out forms before they could see a prototype, the tool should give them something immediately — then ask the right questions, surface evaluation, call out gaps and opportunities.

**Rethink how evaluation communicates.** The original framing was educational — teaching people UX best practices. But behavioral psychology tells us loss aversion works better than education. Don't say "let me teach you UX best practices." Say "your current flow will cost you $50K in lost conversions." Make the stakes concrete.

**Question the design system constraint.** Meridian doesn't have components for every use case. If the tool only generates what existing components can express, it's limiting the output to what the system already knows — not what users actually need. Is the tool creating good UX for users, or only UX that fits existing design components?

**Two audiences, one system.** From the beginning, I saw HappyPath as two-sided. The general user comes in to generate prototypes — that's the visible side. But every prompt, every generation, every workaround is also a signal. What components are people reaching for that don't exist? Where does the design system fall short?

My original idea (2024) was straightforward: track usage patterns and surface them in a dashboard for the DS team. But the DS team would still have to manually decide what's worth adding, design the component from scratch, document it, and add it. The signal was there, but the action gap was huge.

During the retro, I enhanced this into something more ambitious: a dynamic, context-aware design system. Instead of just reporting what's missing, the tool would detect emerging patterns, propose component specifications automatically, generate alternatives that meet DS guidelines, and show confidence levels. The DS team would review, approve or refine — and approved patterns would feed back into the system.

Three layers: a core design system that's always enforced (tokens, foundational components), a contextual pattern layer for domain-specific patterns that AI can generate and validate, and a community pattern layer where new AI-generated patterns get stored, promoted after repeated use, and reviewed by the DS team. The design system stops being a static library and starts growing with the organization.

**Building to think**

There was another reason I felt the urgency to build something better. As more people started using AI prototyping tools, I noticed a quiet decline in quality. Not dramatic failures — just a steady drift toward 70–80% output. People were lowering their bar because they couldn't figure out how to push AI tools further. The unfamiliarity became a ceiling.

I recognized this pattern because I'd lived it. In college, my 3D modeling skills couldn't support my design ambitions — so I ended up designing what I could build in Rhino, not what I actually envisioned. The tool shaped the output. I watched the same thing happening with AI prototyping: people designing what the tool could produce, not what users needed.

If everyone is producing 70% quality and accepting it, the overall bar drops — and nobody notices because the new normal feels normal.

That's what MiniPath is for. Not just fast prototyping, but fast prototyping that's also high quality and domain-relevant. A tool that packages proven best practices so people don't have to rediscover them, that understands the specific domain it's generating for, and that produces prototypes good enough to actually deliver — not just good enough to demo.

By this point, I wasn't just using AI to assist my design work — I was building things with it to test whether my ideas held up. One day, thinking about what HappyPath should become, I decided to just build it. I used Claude Code to create MiniPath from scratch: a fully functional local version that calls Claude Code CLI to generate prototypes.

MiniPath isn't just a redesign. It's a bundle of everything I learned — and everything my AI-driven coworkers learned — about how designers actually work with AI. The processes, the prototypes, the workflows we spent months exploring and refining — I packaged them into built-in features.

**1 — Component-level sandbox isolation**
Click any component to isolate it into a floating sandbox window. Iterate on just that piece through scoped conversation. Changes merge back without regenerating the rest of the page. This came from watching how designers actually want to work — not describing changes in words and hoping, but pointing at a thing and saying "change this."

**2 — Transparent AI reasoning**
Before generating, MiniPath shows its plan — what it considered, what tradeoffs it weighed, what decisions shaped the output. You review and redirect before execution, not after. This came from a frustration I saw everywhere: AI as a black box that produces something and you either accept it or start over.

**3 — Exploration and variants**
Four modes for the full prototype lifecycle: Exploration for divergent thinking, Working for focused building, Communication for stakeholder presentation, Artifact for final handoff. The prototype becomes the communication artifact — no separate slide decks or spec documents.

**The question I'm sitting with**

The redirection of HappyPath came from observation — watching how I use AI, how my teammates use AI, feeling people's excitement and their struggles. But building MiniPath surfaced a deeper problem I didn't expect: AI outputs converge toward sameness, especially under design system constraints. Every generation feels competent but familiar.

I started asking: what is "creation" actually? What is "innovation"? How do I build a tool that's deeply familiar with a specific domain — Amazon logistics and operations — while still enabling genuine creative exploration?

This thinking led to MiniPath's three-layer architecture:

- **Layer 1 — Base Design System:** The foundational components and tokens (Meridian, Cloudscape)
- **Layer 2 — Domain Sub-System:** Team-curated patterns specific to a product domain, built on top of Layer 1
- **Layer 3 — Knowledge Base:** Strategic context — PRDs, research, design principles — that guides *why* certain design choices serve users better

I don't have a clean answer yet. But I think the question matters more than a premature conclusion. This project is a journal of me growing — not being afraid to question my own work, challenging myself to go deeper about what we actually want to create with these tools.

---

## Case Study 2: Transforming How a Design Team Works with AI
### From personal experiment to team capability in four months

**The arc**

In November 2025, I started experimenting with AI to help with my own design work. By March 2026, I had architected how my entire team integrates AI into their practice — built the tools, created the learning programs, and proved the approach works by shipping real prototypes.

This wasn't a mandated initiative. There was no AI transformation roadmap. I saw an opportunity, ran experiments, and scaled what worked.

**What I learned: the bottleneck is context, not capability**

Early on, I discovered that using AI "adjacent" to my workflow — asking it questions, generating one-off outputs — produced mediocre results. The shift came when I stopped treating AI as a tool to query and started designing the *context architecture* around it.

I built a markdown documentation system to manage all my projects and create a persistent context pool. I created structured memory, process definitions, and expectation frameworks so AI could understand not just what I wanted, but how I work and what quality means in my domain.

The result: consistent, high-quality output that actually fit into my workflow instead of requiring translation.

**From my workflow to the team's**

Once the approach worked for me, I focused on making it transferable:

**New handoff process** — I worked with my engineering team to experiment with a new design-to-dev handoff. My latest design handoff was a vibe-coded React prototype using components from our actual design system. Not a static spec — a working, interactive artifact that engineers could inspect and build from.

**Tools and extensions** — I built MiniPath, custom skills, and extensions that package my optimized workflow into tools the team can use without replicating months of personal experimentation.

**Learning program** — Rather than a one-size-fits-all training, I designed differentiated learning paths based on job-to-be-done. Different designers have different entry points and goals with AI — the program meets them where they are.

**Proving it works** — When people across the team wondered whether AI could build certain types of prototypes for their research needs, I jumped in to vibe-code working proofs while others assumed it couldn't be done. Showing beats telling.

**What this taught me about AI adoption**

The hardest part of integrating AI into a design practice isn't the technology. It's designing the system around it — the context structures, the quality expectations, the handoff patterns, the learning pathways. That's design work, even though it doesn't produce screens.

---

## Case Study 3: Autonomous Delivery Robot UX
### First designer, full ecosystem

**The role**

In late February I moved to Amazon's autonomous delivery robot team as the first and only UX designer across the entire ADR ecosystem. My job is to shape a cohesive experience that spans multiple systems and teams — simulation, teleoperation, fleet management, last-mile integration, and next-generation human-robot interaction.

There was no established UX practice and no dedicated PM. I work directly with engineering — iterating, discussing, exploring, and evolving together at the pace the problem demands.

**What I do**

**Early UX assessment** keeps things pointed in the right direction. I evaluate new initiatives before they solidify, flagging structural issues and interaction gaps while decisions are still cheap to change.

**Cross-system coordination.** I coordinate stakeholders and UX designers from different parts of the last-mile system to make sure robotic integration doesn't happen in isolation. The robot touches delivery workflows, driver tools, and customer-facing status — those seams need someone watching them.

**AI-driven handoff process.** I introduced a new handoff process that accelerates the product-to-design-to-engineering pipeline — fewer handoff artifacts, faster shared understanding.

**HRI exploration.** On the research side, I'm exploring human-robot interaction for the next generation of delivery robots. How should a person on a sidewalk understand what the robot intends to do? How do remote operators build calibrated trust — enough to let the system work, not so much that they miss failures?

**The thread that runs through it**

These questions sit at the intersection I keep returning to: physical operations, AI, and trust. Interfaces where decisions have consequences beyond the screen.

---

## Case Study 4: DSP Business Health Dashboard
### Research that redirected a product
*Handed off · Nov 2025 – Feb 2026*

**The situation**

The team was building a Business Health Dashboard for Delivery Service Partners (DSPs) — the independent businesses that operate Amazon's last-mile delivery fleet. The assumption was that DSP owners needed a better data dashboard to track business performance.

**What I found**

I conducted 18 interviews and testing sessions with DSP owners. The finding was stark: there was a 50% misalignment between what the PRD specified and what users actually needed. DSP owners didn't want another dashboard full of metrics. They wanted intelligent guidance — help understanding what the numbers meant for their business and what actions to take.

The gap wasn't missing data. It was missing interpretation.

**What I did with the finding**

I produced a gap analysis comparing the PRD assumptions against actual user needs and distributed it to stakeholders. Rather than quietly adjusting my designs to compensate, I pushed the conversation upstream — making the case that we were solving the wrong problem and needed to reframe before investing in execution.

The research shifted the product conversation from "what metrics should we show" to "how do we help DSP owners make better business decisions."

**Why this matters**

Design craft matters. But knowing when to stop designing and challenge the premise matters more. Eighteen conversations changed the direction of a product — not because the research methodology was fancy, but because the right questions were asked early enough to matter.

---

## About / Intro (draft)

I'm a Senior UX Designer working at the intersection of complex systems, physical operations, and AI. Currently at Amazon, I design for autonomous delivery robots — teleoperation, simulation, fleet management — where interface decisions have real-world consequences.

I'm most interested in how humans and AI work together: how to make AI output trustworthy, controllable, and genuinely useful rather than generically competent. I've spent the past year building tools, workflows, and programs that integrate AI deeply into design practice — not as an adjacent helper, but as a core part of how designers create, iterate, and communicate.

Previously, I designed operational dashboards and business tools for Amazon's Delivery Service Partner ecosystem. I hold a background in interior design and landscape architecture, which taught me to think in systems, spatial relationships, and human behavior within designed environments.

I also run Maomao Squad, a small illustration and stationery business featuring hand-drawn cat and dog art — because craft should be joyful, and not everything needs to be optimized.
