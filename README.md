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

- Confirm whether the existing PDF should remain labeled CV or be replaced with separate academic CV and industry résumé downloads. Its original file path is preserved.

The Scholar profile was taken from the existing GitHub Pages site's configuration. The dissertation link uses the USC DOI supplied by the author.

## Content sources and editorial decisions

- Research findings and methods: the author-provided dissertation, *Multiscale Computational Modeling and Seismic Imaging Across Complex Geologic Domains* (2026), Chapters 1–3. Ground-motion findings follow Sections 1.2–1.5; the selected GDANT benchmark values are from Table 2.3, with field interpretation from Section 2.5.3; the Nepal description follows Sections 3.2 and 3.5. [Dissertation DOI](https://doi.org/10.25549/USCTHESES-OUC11399O3HY).
- The Nepal application explicitly uses the author's GDANT method, as confirmed by the author and Chapter 3. Do not link the private GDANT repository.
- Microseismicity descriptions use the CV and the author-supplied workflow diagram: ObsPy; PhaseNet + REAL or QuakeMigrate; VELEST, Hypoinverse, or a combined location route; and hypoDD. No model-training, detection-accuracy, or catalog-size claim is made.
- Software capabilities follow the public [spatial-vtk README](https://github.com/bcbirkel/spatial-vtk). The software appears in its own homepage section and is linked from ground-motion validation.
- PHYS 135A teaching experience was supplied by the author. Its title is verified in the [USC Physics course listing](https://dornsife.usc.edu/physics/general-education/), and course topics follow the [Fall 2024 syllabus](https://web-app.usc.edu/soc/syllabus/20243/50342.pdf): mechanics, fluids, waves, and thermodynamics, with lecture and laboratory components.
- Student reviews, their attribution, and the selection shown by default are restored verbatim from the original portfolio. Do not edit or synthesize testimonial wording.
- Interface sounds have been removed, including their unused hook and audio implementation.

The microseismicity figure is the author's supplied `nepal_seismicity.png`, used unchanged in `public/images/nepal-seismicity.png`.

The author-supplied tectonic-context PDF is rendered at 2400 × 1600 pixels in `public/images/nepal-tectonic-framework.webp`; the supplied workflow screenshot is preserved as lossless WebP in `public/images/microseismicity-workflow.webp`. Original figure labels and references are retained. Each figure opens at full size.

Project pages share a type scale: 24px section headings, 20px subheadings, 18px body and summary text, and 16px captions/tables/source notes. The separate Interpretation and limits blocks have been removed.

### Pending defense material

The linked `Defense.pptx` (767 MB) exceeds the Drive connector download limit (268 MB), so its slides have not yet been read or incorporated. Request a smaller deck or a PDF plus separate animation files. Preserve the original slide numbers when splitting:

- Validation: 10, 14 (animation), 21–22, 29, 32.
- GDANT: 43, 46 (animation; otherwise 47), 49, 120.
- Nepal imaging: 56–57, 65 (replace the current profile), 66, 71, 73; methods 128, 132–133.

Review the surrounding explanations as well as the selected figures before updating the scientific narrative. The existing dissertation-based descriptions and Nepal profile remain until those source slides are available.
