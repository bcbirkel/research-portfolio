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
- Confirm whether the existing PDF should remain labeled CV or be replaced with separate academic CV and industry résumé downloads. Its original file path is preserved.

The Scholar profile was taken from the existing GitHub Pages site's configuration. The dissertation link uses the USC DOI supplied by the author.

## Content sources and editorial decisions

- Research findings and methods: the author-provided dissertation, *Multiscale Computational Modeling and Seismic Imaging Across Complex Geologic Domains* (2026), Chapters 1–3. Ground-motion findings follow Sections 1.2–1.5; the selected GDANT benchmark values are from Table 2.3, with field interpretation from Section 2.5.3; the Nepal description follows Sections 3.2 and 3.5. [Dissertation DOI](https://doi.org/10.25549/USCTHESES-OUC11399O3HY).
- The Nepal application explicitly uses the author's GDANT method, as confirmed by the author and Chapter 3. Do not link the private GDANT repository.
- Microseismicity descriptions are based on the CV and emphasize integration of machine-learning phase picking with association and relocation. No model-training, detection-accuracy, or catalog-size claim is made.
- Software capabilities follow the public [spatial-vtk README](https://github.com/bcbirkel/spatial-vtk). The software appears in its own homepage section and is linked from ground-motion validation.
- PHYS 135A teaching experience was supplied by the author. Its title is verified in the [USC Physics course listing](https://dornsife.usc.edu/physics/general-education/).
- Student reviews, their attribution, and the selection shown by default are restored verbatim from the original portfolio. Do not edit or synthesize testimonial wording.
- Interface sounds have been removed, including their unused hook and audio implementation.
