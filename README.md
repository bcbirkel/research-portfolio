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

To move the approved version to `https://bcbirkel.github.io/`:

1. Preserve the current `bcbirkel.github.io` site in a backup branch or tag.
2. Copy the approved portfolio source, lockfile, `public/` assets, and workflow into a migration branch of `bcbirkel.github.io`. Retire the old Jekyll build workflow in that branch.
3. Preserve or redirect old public URLs, particularly `/cv/` and any linked PDFs. Check the old site's assets before replacing files.
4. Review the migration pull request and its build artifact. Select **GitHub Actions** as the Pages source in the destination repository's Settings → Pages.
5. Merge the migration only when ready to replace the old site. The deploy job runs only on `main` in `bcbirkel/bcbirkel.github.io`.

This configuration is for the root user-site URL. Hosting it at `/portfolio/` would also require base-path-aware asset and navigation URLs.

## Content still needing author input

- Replace the explicitly labeled microseismicity schematic with an actual research figure when available.
- Confirm the precise relationship between GDANT and the Nepal imaging work before adding a stronger method-specific claim; the text currently uses the broader term ambient noise imaging.
- Add quantitative findings and associated publications to the project pages after checking them against the dissertation or manuscripts.
- Confirm whether the existing PDF should remain labeled CV or be replaced with separate academic CV and industry résumé downloads. Its original file path is preserved.

The Scholar profile was taken from the existing GitHub Pages site's configuration. The dissertation link uses the USC DOI supplied by the author.
