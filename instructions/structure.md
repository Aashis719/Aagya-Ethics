aagya-ethics/
│
├── public/               # static files (logo, favicon, etc.)
│   └── logo.png
│
├── src/
│   ├── app/              # (if Next.js App Router) or pages/ for Pages Router
│   │   ├── layout.tsx
│   │   ├── page.tsx      # Landing page
│   │   └── globals.css   # Tailwind base styles
│   │
│   ├── components/       # All UI components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── ProductShowcase.tsx
│   │   ├── ValueProps.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── MotionWrapper.tsx   # Wrapper for Framer Motion animations
│   │
│   ├── lib/
│   │   ├── cloudinary.ts # Config for Cloudinary image URLs
│   │   └── supabase.ts   # (future) DB setup placeholder
│   │
│   └── types/
│       └── product.ts    # TypeScript interfaces
│
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
