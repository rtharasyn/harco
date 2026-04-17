# harasyn.design

Personal portfolio and blog built with [Astro](https://astro.build).

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Adding content

### New project

Create a Markdown file in `src/content/projects/`:

```markdown
---
title: Project Name
client: Client Co.
headline: Short headline
description: One-sentence summary
tags: "Tag One・Tag Two・Tag Three"
url: https://example.com
coverImage: /assets/cover.jpg
coverImageMobile: /assets/cover-mobile.jpg
order: 1
featured: false
---

Full project description in Markdown.
```

### New blog post

Create a Markdown file in `src/content/blog/`:

```markdown
---
title: Post Title
date: 2026-04-11
excerpt: A short summary shown on the listing page.
coverImage: /assets/post-cover.jpg
---

Write your article content here in Markdown.
```

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds and deploys to GitHub Pages at [harasyn.design](https://harasyn.design).
