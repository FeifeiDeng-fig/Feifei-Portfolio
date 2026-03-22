# Feifei Deng — Portfolio

Personal portfolio for Feifei Deng, Senior UX Designer.

## Project Structure

```
content/
  projects/              ← Markdown file per project (your case studies)
    happy-path.md
    wyze-air.md
    delivery-safety.md
    robot-teleoperation.md
    fleet-management.md
    robotic-integration.md
  about.md               ← Bio, skills, timeline
  site-config.md         ← Global copy: hero text, nav, footer, social links
design-spec.md           ← Visual language: typography, color, spacing, animation
```

## How to Update Content

### Add a new project
1. Create a new `.md` file in `content/projects/`
2. Copy the frontmatter structure from any existing project file
3. Fill in the `---` frontmatter (title, role, tags, etc.)
4. Write your case study in the body using the section template
5. Set `status: "published"` when ready, or `"draft"` / `"coming-soon"`
6. Set `order` to control position in the project grid

### Edit an existing project
Open the `.md` file and edit directly. The frontmatter controls card display; the body is your case study.

### Update global copy
Edit `content/site-config.md` — hero headline, description, nav links, social links.

### Update about page
Edit `content/about.md` — bio paragraphs, skills, experience timeline.

## Planning Workflow

1. **Content first** — Fill in the Markdown project briefs with your actual content
2. **Design decisions** — Review `design-spec.md` and answer the open questions (accent color, font pairing, etc.)
3. **Build** — Set up Astro project and implement using the spec as reference
4. **Polish** — Add animations, responsive tweaks, deploy

## Tech Stack (Planned)

- **Astro** — Static site generator, Markdown content
- **GSAP + ScrollTrigger** — Animations
- **Netlify or Vercel** — Hosting (free tier)
- **No frameworks** — Astro components are plain HTML/CSS with slots

## Status

- [x] Content structure and project briefs
- [x] Design specification
- [ ] Fill in actual project content (your writing)
- [ ] Finalize design decisions (accent color, font, etc.)
- [ ] Scaffold Astro project
- [ ] Build pages and components
- [ ] Add animations
- [ ] Deploy
