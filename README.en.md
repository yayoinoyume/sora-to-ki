<div align="center">

<img src="public/favicon.svg" width="72" alt="Example Site logo" />

# Example Site

**Nothing else here: only the night, white ink, and a faint light.**

A personal-site template you can take as-is: technical notes, short moments, photos and a reading list,
works and collections, all strung together in one sky. Everything author-specific has been emptied into
empty states — put your own data in and it is ready to ship.

[繁體中文](README.md) · **English**

[**example.com**](https://example.com) · [Notes](https://example.com/en/blog) · [Colophon](https://example.com/en/about-site) · [Log](https://example.com/en/history) · [RSS](https://example.com/rss)

[![CI](https://img.shields.io/github/actions/workflow/status/example-user/sora-to-ki/ci.yml?branch=main&label=CI&logo=githubactions&logoColor=white)](https://github.com/example-user/sora-to-ki/actions/workflows/ci.yml)
[![License: AGPL-3.0](https://img.shields.io/badge/license-AGPL--3.0-blue)](LICENSE)
[![frontend cov](https://img.shields.io/codecov/c/github/example-user/sora-to-ki/main?flag=frontend&label=frontend%20cov&logo=codecov&logoColor=white)](https://app.codecov.io/gh/example-user/sora-to-ki?flags%5B0%5D=frontend)
[![e2e cov](https://img.shields.io/codecov/c/github/example-user/sora-to-ki/main?flag=e2e&label=e2e%20cov&logo=playwright&logoColor=white)](https://app.codecov.io/gh/example-user/sora-to-ki?flags%5B0%5D=e2e)
[![backend cov](https://img.shields.io/codecov/c/github/example-user/sora-to-ki/main?flag=backend&label=backend%20cov&logo=rust&logoColor=white)](https://app.codecov.io/gh/example-user/sora-to-ki?flags%5B0%5D=backend)

[![React 19](https://img.shields.io/badge/React_19-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![TanStack Start](https://img.shields.io/badge/TanStack_Start-EF4444?logo=react&logoColor=white)](https://tanstack.com/start)
[![Rust](https://img.shields.io/badge/Rust_·_axum-000000?logo=rust&logoColor=white)](https://github.com/tokio-rs/axum)
[![SQLite](https://img.shields.io/badge/SQLite-003B57?logo=sqlite&logoColor=white)](https://sqlite.org/)
[![Docker](https://img.shields.io/badge/Docker_Compose-2496ED?logo=docker&logoColor=white)](https://docs.docker.com/compose/)

</div>

---

The frontend is **React 19 + TanStack Start (SSR + ISR)**, the backend is **Rust (axum + sqlx + SQLite)**, deployed with Docker Compose. Every third-party integration (GitHub / Steam / Spotify / WakaTime / Simkl / TMDb) is optional: leave its env vars empty and that block degrades to an empty state instead of breaking the site.


## 🌌 Design

The whole site rests on one idea: **every page is one kind of thing in the same night sky**, all made from the dots and lines of the dotted Saturn on the home page. The full explanation, where you can also watch Saturn being drawn step by step, is the site's [Colophon](https://example.com/en/about-site).

### Only three materials

| | | |
|---|---|---|
| ⬛ | **Black is the paper** | the ground of every page |
| ⬜ | **White is the ink** | text, lines and dots |
| 🟧 | **Amber is the signal** | only ever on a single point: where you are, or what is happening. Never a fill colour |

### Three typefaces

- **Source Han Serif**: Chinese and every mixed sentence. Subset per page to the characters actually used, so a page downloads only a few dozen KB
- **Instrument Serif**: only large all-English display text, never bold
- **Monospace**: dates and numbers

Articles can also be read in a sans, a handwritten-style or a modern sans face, each served per language by the site.

### Three rules

1. **One signal per screen**: amber lights up one place at a time
2. **Only dots and lines**: no filled blocks, no drop shadows, no frosted glass; right angles, hairlines, dotted dividers
3. **Grown from data**: on the Works page a planet's size is its code size, its surface is its main language, and its moons are GitHub stars

### One sky

| Page | is, in the sky |
|---|---|
| Home | moons around Saturn (five moons for the five sections) |
| Notes | rings of star trails, one trail per article |
| Moments | passing comets; the newest moment is the comet's head |
| Works | a spiral course outward |
| Collection | signals sent from Earth: each one leaves at the moment something was finished, travels at the speed of light, so its distance is how long ago that was |
| Photos | pictures downlinked from deep space, received line by line |
| Setup | a spacecraft's blueprints |
| Friends | stars around one center |
| Messages | radio waves received |
| Log | a launch from the ground |
| About | a free fall |

## 📸 Screenshots

The screenshots in this repo's history belong to the original author; the template ships none
(`public/illustrations/` keeps the generic space art). Once your own site is up, drop shots into
`.github/screenshots/` and add a table like this:

```markdown
| Home | Notes |
|:---:|:---:|
| ![Home](.github/screenshots/home.jpg) | ![Notes](.github/screenshots/notes.jpg) |
```

## 🚀 Starting from the template

```bash
cp .env.example .env.backend      # this is the filename compose reads (see env_file in docker-compose.yml)
```

Fill in at least `JWT_SECRET`, `ADMIN_USERNAME`, `ADMIN_PASSWORD` and `OWNER_EMAIL`
(whoever signs in with that address gets the OWNER role), then:

```bash
docker compose up -d --build
# → http://localhost:8080
```

`SITE_URL`, `DATABASE_URL` and `BIND_ADDR` are pinned in compose for the containers, so editing
them in `.env.backend` has no effect; they only matter when you run `cargo run` locally
(see "Running frontend and backend separately" below).

Works, experience, gear and journey are empty arrays — those pages render an empty state instead
of someone else's data. To fill them, look at the matching `src/data/*.ts` and
`src/components/about/*Gear.ts`; each file explains its shape at the top.
The colophon Q&A keeps the site's own explanations (stack, photo wall, easter eggs, audience);
the three entries about the name's origin are gone.


## ✨ Features

### Notes and moments

- **MDX articles**: GFM plus twenty-odd custom blocks (code tabs, diffs, file trees, charts, polls, Excalidraw sketches, Japanese furigana, spoilers, author's notes…)
- **Five languages**: Traditional Chinese, Simplified Chinese, English, Japanese and Korean. Simplified Chinese is converted automatically with OpenCC; every article can be translated separately
- **Syntax highlighting**: Shiki on its JavaScript regex engine (article pages don't download wasm); Oniguruma is loaded only for C-family languages
- **Mermaid diagrams**: zoom, pan and full screen, themed to match the site
- **No layout shift from images**: a thumbhash and the original dimensions are computed at upload, so a blurred placeholder shows before the image loads
- **Comments, likes, series, table of contents, reading progress**, plus RSS and a newsletter (Resend)
- **Moments**: short posts that can carry a link card, or a film, book or track picked from the synced records, shown as "watched / read / listened to"

### Collection and life log

- **Watching**: Bahamut Anime Crazy history synced automatically; films and series synced through Simkl and TMDb
- **Music**: Spotify now playing, recently played and favourite genres
- **Bookshelf**: ISBN lookups use Taiwan's National Central Library data
- **Photos**: EXIF details, CLIP auto-tagging and a zoomable full-screen viewer; titles, tags, featured and hidden flags are edited in the admin and survive a NAS re-sync
- **Activity**: WakaTime coding time, GitHub activity, Steam profile and playtime
- **Setup**: the machine's parts and the home network, drawn as engineering sheets

### The site itself

- **Space backdrop**: the starfield and the home page's Saturn are rendered by three.js (WebGPU, falling back to WebGL2) on an OffscreenCanvas inside a Web Worker; devices found to be software-rendering get a pure-CSS version
- **Custom admin**, grouped like the site:
  - **Now**: an overview of what needs attention and the last 28 days of Web Vitals
  - **Write**: Monaco editor (night theme, Vim mode, slash commands, drag-and-drop upload) with live preview; **scheduled publishing** (posts go out on time, and the newsletter is sent then too); deleted posts go to a **trash** first and can be restored for 30 days; for **moments**, the synced records from Bahamut, Simkl, Spotify and the bookshelf are listed alongside, and "Write" pulls one into the composer
  - **Keep**: hide watched titles or played tracks from the public site and arrange the favourites row; the bookshelf; photo titles, tags and featured picks
  - **Reply**: comment moderation (keyboard j / k / a / s / r), **link-exchange requests** (the form on the Friends page submits straight in, with one-click checks that the site is reachable, links back and has an RSS feed), newsletter subscribers
  - **Station**: accounts and roles
- **MCP server**: [`packages/mcp-server`](packages/mcp-server) exposes 27 tools so an AI assistant can write posts (including scheduling and the trash), post moments, upload images and manage categories through the admin API
- **Also**: GitHub / Google sign-in, a command palette (`Ctrl+K`), a PWA offline page, a sitemap and hreflang per language, a strict CSP, self-hosted error tracking (GlitchTip) and Core Web Vitals reporting

## 🏗️ Architecture

```mermaid
flowchart LR
  user([Browser]) --> nginx[nginx<br/>TLS / gzip / static images]
  nginx -->|pages| fe[frontend<br/>TanStack Start · Nitro<br/>SSR + ISR]
  nginx -->|/api| be[backend-rs<br/>axum · sqlx]
  fe -->|SSR data| be
  be --> db[(SQLite)]
  be -->|cached, stale on error| ext[Third-party APIs<br/>GitHub · Spotify · Steam<br/>WakaTime · TMDb · Simkl · Bahamut]
  be -.purges ISR cache on post updates.-> fe
  backup[db-backup<br/>daily SQLite backup] --- db
```

- **Types are written once**: the backend's Rust structs generate TypeScript types with [specta](https://github.com/specta-rs/specta) ([`packages/api-types`](packages/api-types)), which the frontend imports directly; CI checks that both sides match
- **Third-party APIs go through the backend**: keys never reach the frontend. Responses are cached, and stale data is served when an upstream fails, so a section never goes blank
- **ISR**: pages are cached by Nitro, and the backend tells the frontend to purge them when a post changes
- **Design tokens are enforced**: spacing, font sizes, line heights, radii, opacity… must use the tokens in `src/index.css`; `pnpm check:css-tokens` rejects ad-hoc values

## 🛠️ Stack

| | |
|---|---|
| **Frontend** | React 19 · TanStack Start / Router / Query · Vite+ (vite, vitest, oxlint, oxfmt) · Tailwind CSS v4 · Framer Motion · three.js · MDX · Shiki · beautiful-mermaid · Excalidraw · i18next · Radix UI / shadcn |
| **Backend** | Rust 2024 · axum · tokio · sqlx (SQLite) · JWT + bcrypt · image / resvg / thumbhash (images and share images) · ferrous-opencc · utoipa (OpenAPI at `/api/docs`) · Sentry SDK |
| **Type** | Source Han Serif (subset per page) · Instrument Serif · monospace |
| **Infra** | Docker Compose · nginx · GitHub Actions · Codecov · self-hosted GlitchTip |

## 🧪 Quality gates

Every PR has to pass these before it can merge (the full list is in [`.github/workflows/ci.yml`](.github/workflows/ci.yml)):

- **Types and lint**: `tsc`, oxlint (with type-aware rules and `@shadcn/lint`), Biome (CSS), the CSS token check, knip (unused files and exports)
- **Tests**: vitest unit tests; Playwright e2e (21 specs, including accessibility checks, admin round trips, and computed-style comparisons of 11 public routes × 3 widths plus the admin pages); backend cargo-nextest with a coverage threshold
- **API**: Schemathesis generates requests from the OpenAPI spec and checks the responses against the declared schemas
- **Backend**: `cargo clippy` (pedantic), `cargo audit`, `cargo shear`, `typos`
- **Performance**: Lighthouse CI budgets
- **Also** (manual, not in CI): mutation testing (Stryker, cargo-mutants) to find code that tests run through but don't actually check

## ⚙️ Local development

You need **Node.js ≥ 26**, **pnpm 12** and **Rust stable** (edition 2024), or just Docker.

```bash
git clone https://github.com/example-user/sora-to-ki.git
cd sora-to-ki
pnpm install
```

### Run everything with Docker (easiest)

```bash
cp .env.example .env.backend   # fill in JWT_SECRET
docker compose up -d --build
# → http://localhost:8080
```

### Run frontend and backend separately (for development)

```bash
# Backend: reads backend/.env
cp backend/.env.example backend/.env
#   set DATABASE_URL to a local path, e.g. sqlite://./dev.sqlite
#   set BIND_ADDR to 127.0.0.1:3009 (the frontend dev server's default)
cd backend && cargo run

# Frontend: http://localhost:13998
pnpm dev
```

The database is created if it doesn't exist, and the schema in [`backend/migrations/`](backend/migrations) is applied on startup.

### Environment variables

Only `DATABASE_URL` and `JWT_SECRET` are required (both are in the example file). Anything else that's unset turns the related feature off or shows an empty state.

| Purpose | Variables |
|---|---|
| Basics | `DATABASE_URL` `BIND_ADDR` `JWT_SECRET` `SITE_URL` |
| Admin account | `ADMIN_USERNAME` `ADMIN_PASSWORD` |
| OAuth sign-in | `GITHUB_CLIENT_ID` `GITHUB_CLIENT_SECRET` `GOOGLE_CLIENT_ID` `GOOGLE_CLIENT_SECRET` |
| Activity page | `GITHUB_TOKEN` `WAKATIME_API_KEY` `STEAM_API_KEY` `STEAM_ID` |
| Spotify | `SPOTIFY_CLIENT_ID` `SPOTIFY_CLIENT_SECRET` `SPOTIFY_REFRESH_TOKEN` `SPOTIFY_REDIRECT_URI` |
| Film and TV | `TMDB_API_TOKEN` `SIMKL_CLIENT_ID` `SIMKL_ACCESS_TOKEN` `BAHAMUT_UID` `BAHAMUT_PASSWORD` |
| Bookshelf | `GOOGLE_BOOKS_API_KEY` `ENABLE_TW_ISBN_SYNC` |
| Newsletter | `RESEND_API_KEY` |
| Error tracking | `SENTRY_DSN` `SENTRY_FRONTEND_DSN` |
| Admin traffic (Plausible) | `PLAUSIBLE_API_KEY` `PLAUSIBLE_SITE_ID` |
| ISR purge | `FRONTEND_REVALIDATE_URL` `REVALIDATE_SECRET` |

## 📜 Common commands

```bash
pnpm dev              # frontend dev server
pnpm build            # production build
pnpm test             # unit tests
pnpm e2e              # Playwright e2e (runs the last build; run pnpm build after changing src/)
pnpm lint:css         # CSS lint (Biome)
pnpm check:css-tokens # CSS token check
pnpm export:types     # regenerate TS types from Rust

cd backend
cargo nextest run --no-fail-fast   # backend tests (use nextest, not cargo test)
cargo clippy --all-targets -- -D warnings
```

## 📂 Project layout

```
.
├── backend/                 # Rust API
│   ├── src/router.rs        # route table
│   ├── src/handlers/        # split by domain (posts, thoughts, watch, gallery, spotify…)
│   ├── migrations/          # SQLite schema
│   └── STRANGLER.md         # Express → Rust migration log
├── packages/
│   ├── api-types/           # TS types generated from Rust (don't edit by hand)
│   ├── mdx-core/            # MDX compile settings shared by frontend and backend
│   └── mcp-server/          # MCP server for the admin API
├── src/
│   ├── routes/              # TanStack Router file routes (including the $locale/ prefix)
│   ├── components/          # grouped by feature; each page's sky is in a matching *Sky.ts
│   ├── data/ i18n/ seo/     # API queries, locale routing, meta and JSON-LD
│   ├── hooks/ store/ lib/
│   └── locales/             # translations for the five languages
├── server/routes/           # Nitro routes: sitemap, robots, rss, llms.txt
├── tests/e2e/               # Playwright
├── Dockerfile
└── docker-compose.yml
```

Working notes for AI assistants (Claude Code and the like) live in [`CLAUDE.md`](CLAUDE.md) (in Chinese); it also records a lot of past pitfalls and the reasons behind design decisions.

## 🍴 Borrowing or forking

Feel free to borrow any of the code or fork it to run your own site. A few things first:

- The code is **AGPL-3.0**: if you modify it and **run it as a public website**, you have to publish your modified source under the same licence
- The site's **articles, photos, moments, avatar and logo are not covered by the licence** (see below); replace them with your own after forking
- Third-party syncs (Steam / GitHub / WakaTime / Spotify / Simkl / Bahamut) need your own credentials; leave them empty and that block simply stays off
- When you swap the site over, also change `SITE_URL` / `SITE_NAME` in `src/lib/site.ts`, `OWNER_EMAIL` in `.env`, and the copy in the five `src/locales/` bundles
- Questions and bug reports are welcome as [issues](https://github.com/example-user/sora-to-ki/issues)

## 📄 License

- **Code**: [GNU Affero General Public License v3.0](LICENSE)
- **Content**: articles, photos, moments, book reviews, the avatar, the logo and other site content © Example Site, **all rights reserved**; please don't republish or reproduce them without permission

## 🙏 Thanks

The site relies on a lot of open source, with special thanks to
[TanStack](https://tanstack.com/), [axum](https://github.com/tokio-rs/axum), [sqlx](https://github.com/launchbadge/sqlx),
[three.js](https://threejs.org/), [Shiki](https://shiki.style/), [MDX](https://mdxjs.com/),
[Excalidraw](https://excalidraw.com/), [Radix UI](https://www.radix-ui.com/), [shadcn/ui](https://ui.shadcn.com/),
[OpenCC](https://github.com/BYVoid/OpenCC), [thumbhash](https://github.com/evanw/thumbhash),
[Source Han Serif](https://github.com/adobe-fonts/source-han-serif), [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif),
and the [Vite+](https://viteplus.dev/) and oxc toolchain.

## 🌌 More

- Colophon (the full design write-up): <https://example.com/en/about-site>
- The road the site has taken: <https://example.com/en/history>
- The old site (v1, read-only): <https://example.com>
- Link exchange (apply with the form on the page): <https://example.com/en/friends>
