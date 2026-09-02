# Delhi Steel Website (DMC) — Architecture

## Stack

- Next.js 16.3 App Router with TypeScript and React 19.
- Tailwind CSS v4, GSAP animations, and `next/font/google` for JetBrains Mono.
- Content is maintained in `src/data/company.ts`.
- Production deployments are managed through Dokploy.

## Application structure

- `src/app/layout.tsx` — global layout and metadata.
- `src/app/page.tsx` — server-rendered home page composition.
- `src/app/products/page.tsx` — product catalogue page.
- `src/app/globals.css` — design tokens, utilities, and keyframes.
- `src/components/home/*` — home page sections.
- `src/components/products/*` — catalogue interactions.
- `src/components/reactbits/*` — focused client-side visual components.
- `src/components/ui/*` — reusable navigation, buttons, labels, and marquee UI.
- `src/lib/gsap.ts` — shared client-side GSAP plugin registration.
- `src/data/company.ts` — company, product, process, and contact content.

## Runtime notes

The enquiry form opens a WhatsApp deep link in the browser; no server-side contact API or email service is configured. Images are served from `public/images`. The repository does not define ISR or remote image configuration.
