# Portfolio — Davide Secci

Portfolio personale one-page sviluppato con **Next.js 15** (App Router), **TypeScript** e **Tailwind CSS**.

## Stack

| Tecnologia | Versione |
|---|---|
| Next.js | 15 (App Router) |
| TypeScript | 5 |
| Tailwind CSS | 3 |
| Node.js | ≥ 18 |

## Struttura del progetto

```
├── app/
│   ├── layout.tsx        # Root layout con SEO metadata
│   ├── page.tsx          # Entry point — composizione sezioni
│   ├── globals.css       # Stili globali + utility Tailwind
│   ├── providers.tsx     # Client-side context wrapper
│   └── sitemap.ts        # Sitemap generata automaticamente
├── components/           # Componenti per sezione
│   ├── Navbar.tsx        # Navbar con toggle IT/EN
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── TechStack.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── context/
│   └── LanguageContext.tsx  # Context multilingua IT/EN
├── lib/
│   ├── data.ts           # Dati personali e stack tecnologico
│   ├── i18n.ts           # Tutte le traduzioni IT/EN
│   └── types.ts          # Interfacce TypeScript
└── public/
    └── robots.txt
```

## Personalizzazione

Per aggiornare i contenuti modifica solo questi due file:

- **`lib/data.ts`** — nome, email, GitHub, stack tecnologico
- **`lib/i18n.ts`** — tutti i testi del sito in italiano e inglese (bio, progetti, titoli, label)

## Avvio locale

```bash
# Installa dipendenze
npm install

# Avvia dev server
npm run dev
# → http://localhost:3000

# Build di produzione
npm run build
npm start
```

## Deploy su Vercel

### 1. Push su GitHub

```bash
git init          # se non già inizializzato
git add .
git commit -m "initial commit"
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

### 2. Import su Vercel

1. Vai su [vercel.com](https://vercel.com) → **Add New → Project**
2. Seleziona il repository GitHub
3. Framework preset: **Next.js** (rilevato automaticamente)
4. Clicca **Deploy**

> Il build command e l'output directory sono già configurati correttamente in `package.json`.

### 3. Dominio personalizzato (opzionale)

1. Nel dashboard Vercel → **Settings → Domains**
2. Aggiungi il tuo dominio
3. Configura i DNS come indicato da Vercel (record A o CNAME)
4. Aggiorna `metadataBase` in `app/layout.tsx` con il dominio reale:
   ```ts
   metadataBase: new URL("https://tuo-dominio.com"),
   ```
5. Aggiorna l'URL in `app/sitemap.ts` e `public/robots.txt`

## Sicurezza

Gli header HTTP di sicurezza (CSP, X-Frame-Options, HSTS, Referrer-Policy, Permissions-Policy) sono configurati in `next.config.ts` e vengono applicati automaticamente su Vercel.

## Licenza

Codice sorgente a uso personale. Tutti i diritti riservati.
