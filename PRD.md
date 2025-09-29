# DxO Newsletters PRD (Lean Draft)

## 1. Objective & Scope
- Publish two DxO newsletters (`Coding & Research`, `All`) on a single GitHub Pages site.
- Author issues in Markdown with YAML front matter; Jekyll renders them without custom backend code.
- Keep design minimal (white background, system fonts, one accent color) and navigation frictionless.

## 2. Core Requirements
- **Navigation**: Static header with links to `Coding & Research` and `All`; homepage lists the latest issue per rubric.
- **Rubric pages**: Reverse chronological issue list (title, date, summary). Liquid pagination optional once >10 posts.
- **Issue pages**: Render Markdown body, metadata block (title, date, authors, rubric), optional hero image, quick back link.
- **Assets**: Responsive images (`max-width: 100%`, `loading="lazy"`), alt text required. No custom JS beyond simple menu toggle.
- **Accessibility & performance**: Semantic headings, keyboard-friendly nav, minified CSS, Lighthouse target ≥ 90.

## 3. Repository Structure
```
.
├─ _config.yml              # collections, navigation, theme colors
├─ _layouts/
│  ├─ default.html          # base HTML shell
│  ├─ newsletter.html       # single issue layout
│  └─ rubric.html           # listing layout for each rubric
├─ _includes/
│  ├─ header.html           # global nav
│  ├─ footer.html
│  └─ issue-card.html       # teaser used on lists
├─ _newsletters/
│  ├─ coding-research/      # Markdown issues for Coding & Research
│  └─ all/                  # Markdown issues for DxO All
├─ assets/
│  ├─ css/site.css          # typography, spacing, color tokens
│  ├─ js/site.js            # lightweight mobile menu toggle (optional)
│  └─ images/newsletters/   # hero + inline images grouped by rubric/date
└─ pages/
   ├─ index.md              # homepage
   ├─ coding-research.md    # rubric list page
   └─ all.md
```

## 4. Markdown & Front Matter Convention
- File path: `_newsletters/<rubric>/YYYY-MM-DD-slug.md`.
- Required fields: `layout`, `rubric`, `title`, `date`, `summary`.
- Optional fields: `authors` (array of `{ name, role }`), `hero_image`, `reading_time`, `tags`.
- Keep headings simple: H2 for main sections, H3 for subsections. Short paragraphs (2–4 sentences).

```yaml
---
layout: newsletter
rubric: coding-research
title: "Noise Reduction Breakthroughs"
date: 2024-05-17
summary: "Latest lab findings on denoising and optics calibration."
authors:
  - name: "Alex Calvi"
    role: "Lead Researcher"
hero_image: /assets/images/newsletters/coding-research/2024-05-17-lab.jpg
---
```

### Images & Media
- Store images under `assets/images/newsletters/<rubric>/<issue-slug>/`.
- Reference with absolute paths (e.g., `/assets/images/...`).
- Use Markdown syntax `![Alt text](path "Optional caption")`; add captions via emphasized text directly below if needed.
- Videos or embeds out of scope for MVP; link out instead.

## 5. Rendering & Deployment Flow
1. Install dependencies locally (`bundle install`) and run `bundle exec jekyll serve` to preview.
2. Authors create or update Markdown files and commit any new assets.
3. Open PR; GitHub Action runs `bundle exec jekyll build` and optional markdown/link linting.
4. Merge to `main`; GitHub Pages rebuilds and publishes automatically within ~5 minutes.
5. Share permalink to issue via internal channels.

## 6. Future Enhancements (Optional)
- RSS/Atom feeds per rubric using `jekyll-feed`.
- Email signup module (Mailchimp, Buttondown) in footer.
- Archive page grouped by year if issue count grows.

## 7. Outstanding Questions
- Should we calculate `reading_time` automatically during build or set it in front matter?
- Do we need analytics on day one (e.g., Plausible) or defer?
- Any constraints for hero image formats/size (e.g., WebP vs JPEG)?
