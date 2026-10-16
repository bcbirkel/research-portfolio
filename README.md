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

- Research findings and methods: the author-provided dissertation, *Multiscale Computational Modeling and Seismic Imaging Across Complex Geologic Domains* (2026), Chapters 1–3. Ground-motion findings follow Sections 1.2–1.5; GDANT methods and field interpretation follow Chapter 2 and Section 2.5.3; the current benchmark table uses the defense averages described below; the Nepal description follows Sections 3.2 and 3.5. [Dissertation DOI](https://doi.org/10.25549/USCTHESES-OUC11399O3HY).
- The Nepal application explicitly uses the author's GDANT method, as confirmed by the author and Chapter 3. Do not link the private GDANT repository.
- Microseismicity descriptions use the CV and the author-supplied workflow diagram: ObsPy; PhaseNet + REAL or QuakeMigrate; VELEST, Hypoinverse, or a combined location route; and hypoDD. No model-training, detection-accuracy, or catalog-size claim is made.
- Software capabilities follow the public [spatial-vtk README](https://github.com/bcbirkel/spatial-vtk). The software appears in its own homepage section and is linked from ground-motion validation.
- PHYS 135A teaching experience was supplied by the author. Its title is verified in the [USC Physics course listing](https://dornsife.usc.edu/physics/general-education/), and course topics follow the [Fall 2024 syllabus](https://web-app.usc.edu/soc/syllabus/20243/50342.pdf): mechanics, fluids, waves, and thermodynamics, with lecture and laboratory components.
- Student reviews, their attribution, and the selection shown by default are restored verbatim from the original portfolio. Do not edit or synthesize testimonial wording.
- Interface sounds have been removed, including their unused hook and audio implementation.

The microseismicity figure is the author's supplied `nepal_seismicity.png`, used unchanged in `public/images/nepal-seismicity.png`.

The author-supplied tectonic-context PDF is rendered at 2400 × 1600 pixels in `public/images/nepal-tectonic-framework.webp`; the supplied workflow screenshot is preserved as lossless WebP in `public/images/microseismicity-workflow.webp`. Original figure labels and references are retained. Each figure opens at full size.

Project pages share a type scale: 24px section headings, 20px subheadings, 18px body and summary text, and 16px captions/tables/source notes. The separate Interpretation and limits blocks have been removed.

### Defense figures and project narratives

The four author-uploaded parts were reassembled into the 168-slide defense PowerPoint and its archive integrity was verified. The deck is source material only and is not committed to the website.

- Validation: slide 10 establishes basin/population context; both rotations from slide 14 illustrate the model meshes; slides 21–22 explain metric selection; slide 29 illustrates reference-site amplification; slide 32 links event locations to missing surface-wave packets. Study counts and simulation settings follow slides 18–19.
- GDANT: slide 43 introduces finite-frequency sensitivity; the embedded animation from slide 46 shows kernel accumulation; slide 47 supplies the static method comparison; slide 49 provides the recovery figure and average NRMSE table; slide 50 adds independent field validation; slide 120 supplies the optimization objective and interpretation of its terms.
- Nepal: the source figure used on slides 56–57 supplies regional and array context; slide 65 replaces the old profile on the homepage and project page; slide 66 provides shallow velocity measurements; slides 71 and 73 support the stress/fracturing interpretation; slides 128 and 132–133 provide detailed workflow and phase-selection figures.

Figures were extracted from the original embedded media. For the EMF assets, the embedded PDF representation was extracted and rendered to retain readable scientific labels. Plot images use lossless WebP; map backgrounds use high-quality WebP. Animations are H.264 MP4 with poster frames, explicit playback controls, no autoplay, no audio track, and preload disabled. All figures have descriptive alternative text, captions, and full-size links. Figure provenance and the selected source slide are recorded in data/projects.json.

Project pages present short findings, then figures within the scientific narrative. Each detailed method has its own expandable section. A page navigation bar links directly to the overview, findings, evidence, and methods. The synthetic summary table now reproduces the four-method averages from defense slide 49, replacing the previous selected-case dissertation table.
