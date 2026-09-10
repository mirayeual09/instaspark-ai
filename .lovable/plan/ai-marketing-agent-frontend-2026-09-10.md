# AI Marketing Agent Frontend

## What I’ll build
- A polished AI Agent control center at `/` with a command composer, four prompt starters, workflow progress, and a realistic output preview.
- A `/news` workspace for trending topics, industry updates, and AI-generated hook ideas.
- A `/planner` editorial calendar with Draft, Scheduled, and Published states.
- An `/analytics` dashboard with an Instagram profile summary, growth metrics, and recent post performance.
- One floating pill navigation shared across all four pages, with exactly the requested menu items and clear active states.

## Visual direction
- Bright white and cool-gray surfaces with restrained purple/indigo accents.
- Clean typography, subtle borders, soft shadows, compact radii, and generous whitespace.
- Purposeful micro-interactions on navigation, prompt starters, and primary actions, with reduced-motion support.
- Fully usable layouts across desktop and mobile, including a compact mobile navigation treatment.

## Technical details
- Use TanStack Router route files for `/`, `/news`, `/planner`, and `/analytics`.
- Keep all content as frontend mock data with reusable shared navigation and page primitives.
- Extend the existing semantic token system in `src/styles.css`; avoid hardcoded page colors.
- Add unique metadata for every route and validate the finished screens in the browser at desktop and mobile sizes.
