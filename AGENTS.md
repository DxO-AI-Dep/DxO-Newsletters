# Repository Guidelines

## Project Structure & Module Organization
- Jekyll config and site metadata live in `_config.yml` and `Gemfile`.
- Layouts, includes, and Liquid components are under `_layouts/` and `_includes/`.
- Newsletter issues reside in `_newsletters/<rubric>/YYYY-MM-DD-slug.md` (e.g., `_newsletters/coding-research/2024-06-03-ai-adoption.md`).
- Static assets belong in `assets/css/`, `assets/js/`, and `assets/images/newsletters/<rubric>/`.
- Public pages (home + rubric listings) live in `pages/`.

## Build, Test, and Development Commands
- `bundle install` – install Ruby gems, including `github-pages`.
- `bundle exec jekyll serve` – run the site locally at `http://localhost:4000`.
- `bundle exec jekyll build` – produce the static site in `_site/`; use for CI verification.
- Optional: add `bundle exec htmlproofer ./_site` once HTML Proofer is configured for link and accessibility checks.

## Coding Style & Naming Conventions
- Use two-space indentation in Liquid/HTML and standard Ruby/Jekyll conventions.
- Keep front matter minimal: `layout`, `rubric`, `title`, `date`, `summary`, optional `authors`, `hero_image`, `tags`.
- Markdown files should use ASCII punctuation (`--` for em dash) and descriptive headings (H2 for sections, H3 for subsections).
- Assets under `assets/images` should follow `YYYY-MM-DD-slug/filename.ext` for traceability.

## Testing Guidelines
- Validate builds via `bundle exec jekyll build` before opening a PR.
- When available, run HTML/link checks (`htmlproofer`) and Markdown lint (e.g., `markdownlint`).
- Author preview: inspect pages in a browser to confirm navigation, images, and metadata render as expected.

## Commit & Pull Request Guidelines
- Favor concise, imperative commit messages (e.g., “Add Coding & Research issue outline”).
- Include context in PR descriptions: summary of changes, testing performed, screenshots of new layouts when relevant.
- Link to issue tracker items when applicable and request review from domain owners (content vs. layout).

## Security & Configuration Notes
- No secrets should reside in this repo; GitHub Pages builds from `main` only.
- Keep `_config.yml` navigation and collection settings in sync with new rubrics.
- Large media files should be optimized before committing (SVG preferred for hero art).
