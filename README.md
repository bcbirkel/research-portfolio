# Brianna Birkel — research portfolio

Personal portfolio built with Next.js. Research content lives in `data/projects.json`, shared links in `lib/profile.ts`, and homepage sections in `components/`.

## Development

Use Node.js 22 and pnpm 10.11.0:

```sh
corepack pnpm@10.11.0 install --frozen-lockfile
corepack pnpm@10.11.0 dev
```

Normal builds continue to support the existing Vercel deployment:

```sh
corepack pnpm@10.11.0 build
```

## GitHub Pages preparation

```sh
GITHUB_PAGES=true corepack pnpm@10.11.0 build
```

This exports HTML and assets to `out/`, including each project route. The workflow builds this export for pull requests and main-branch updates. In `bcbirkel/portfolio` it only uploads an artifact; it does not replace the live GitHub Pages site.
