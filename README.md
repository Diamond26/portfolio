# Portfolio — Davide Secci

Portfolio personale sviluppato come progetto autonomo per dimostrare competenze in sviluppo web front-end con tecnologie moderne.

**Live:** https://davidesecci.com

---

## Tecnologie utilizzate

| Tecnologia | Versione |
|---|---|
| Next.js (App Router) | 15 |
| TypeScript | 5 |
| Tailwind CSS | 3 |
| Node.js | ≥ 18 |

---

## Funzionalità implementate

- Architettura **one-page** con sezioni Hero, About, Projects, Tech Stack e Contact
- **Supporto multilingua** italiano / inglese gestito tramite React Context (`LanguageContext`)
- **SEO** ottimizzata: metadata statici, sitemap generata automaticamente, robots.txt
- **Header HTTP di sicurezza** configurati in `next.config.ts`: CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy
- **Deploy continuo** su Vercel con build automatica ad ogni push su `main`

---

## Struttura del progetto

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout con metadata SEO
│   ├── page.tsx          # Entry point, composizione sezioni
│   ├── globals.css       # Stili globali
│   ├── providers.tsx     # Wrapper context lato client
│   └── sitemap.ts        # Generazione sitemap automatica
├── components/           # Componenti React per sezione
│   ├── Navbar.tsx        # Navbar con toggle lingua IT/EN
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── TechStack.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── context/
│   └── LanguageContext.tsx
├── lib/
│   ├── data.ts           # Dati personali e stack
│   ├── i18n.ts           # Traduzioni IT/EN
│   └── types.ts          # Interfacce TypeScript
└── public/
    └── robots.txt
```

---

## Avvio in locale

```bash
git clone https://github.com/Diamond26/portfolio.git
cd portfolio
npm install
npm run dev
```

Il server sarà disponibile su `http://localhost:3000`.

```bash
npm run build   # Build di produzione
npm start       # Avvia il server di produzione
npm run lint    # Linting ESLint
```

---

## Deploy

Il progetto è deployato su Vercel. Ogni push su `main` avvia automaticamente una nuova build. Non sono necessarie variabili d'ambiente.

---

## Licenza

Tutti i diritti riservati © Davide Secci.
