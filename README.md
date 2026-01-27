# SeaForth Strategies (Next.js)

This site is built with **Next.js (App Router)** + **TypeScript** + **Tailwind CSS**.

## Project structure

```text
/
├── public/                # static assets (images, favicon, etc.)
├── src/
│   ├── app/               # routes (App Router)
│   │   ├── page.tsx       # /
│   │   ├── about/page.tsx # /about
│   │   └── ...            # /contact, /services, etc.
│   ├── components/        # shared React components
│   └── styles/            # shared CSS (design system)
├── package.json
└── pnpm-lock.yaml
```

## Commands (PNPM)

```sh
pnpm install
pnpm dev     # http://localhost:3000
pnpm lint
pnpm build
pnpm start
```
