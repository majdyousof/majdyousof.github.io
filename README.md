# Majd Yousof

A personal website for projects and Markdown-based articles, built with React, TypeScript, Vite, and Bun.

## Development

Install dependencies and start the local server:

```bash
bun install
bun run dev
```

Useful commands:

- `bun run build` — generates the RSS feed, type-checks, and creates a production build.
- `bun run lint` — checks source quality.
- `bun run format` — formats source files.
- `bun run preview` — serves the production build locally.

## Articles

Each article is a folder in `src/content/articles`. The folder name becomes the URL slug; its Markdown lives in `index.md`, with any article-specific images beside it:

```text
src/content/articles/my-new-note/
├── index.md
└── diagram.png
```

Start `index.md` with frontmatter:

```md
---
title: Article title
description: A concise summary for the article index and search previews.
date: 2026-09-05
tags: Topic, Another topic
---

# Article title
```

Articles are discovered automatically, listed by date, and available at `/articles/<folder-name>`. Reading time is calculated from the body; no manual field is needed. Reference local images with standard relative Markdown paths, such as `![Diagram](./diagram.png)`.

Markdown supports GitHub-flavoured features, including tables and task lists. Maths use KaTeX syntax: `$E = mc^2$` inline, or `$$` on separate lines for display equations.

The RSS feed at `/rss.xml` is regenerated during every build.

## Deployment

GitHub Actions deploys the site to GitHub Pages when changes are pushed to `main`. Direct links work through a lightweight `404.html` fallback for the single-page app.
