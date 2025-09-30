PRD – Aagya Ethics Clothing Website (Landing Page)
1. Overview

Aagya Ethics is an online clothing brand specializing in selling quality kurthas and ethnic wear. While the brand does not manufacture the clothes, it curates and sells only the best-quality products. The website’s primary purpose in its first version is to serve as a landing page that showcases the brand, highlights products, and establishes credibility.

This PRD outlines the functional and non-functional requirements, design guidelines, and technical stack to ensure a smooth, modern, and responsive website—optimized especially for mobile users.

2. Goals & Objectives

Build a clean, minimal, and responsive landing page.

Showcase curated clothing products in a visually appealing manner.

Highlight the brand identity (logo, hero section, story).

Provide a smooth mobile experience as the majority of users will browse on smartphones.

Set a foundation for future expansion (e-commerce, authentication, cart, etc.).

3. Target Audience

Young adults (18–35) interested in ethnic wear.

Women in Australia and global markets who seek quality and affordable clothing.

Fashion-conscious customers browsing on mobile-first platforms (Instagram, X, etc.) who click through to the site.

4. Key Features (Phase 1 – Landing Page)
4.1 Hero Section

Full-width landscape hero image featuring a girl wearing a kurtha.

Text overlay (brand tagline, e.g., “Where Tradition Meets Modern Elegance”).

Theme colors subtly blend with the image (overlay gradient for readability).

CTA button: “Explore Collection” (smooth scroll to products section).

Optimized for mobile-first viewing with text placed in the upper/lower area instead of the middle.

4.2 About Brand Section

Short paragraph describing Aagya Ethics as a curated fashion brand.

Mention focus on quality, authenticity, and curated selection.

Minimal illustration or secondary brand image.

4.3 Product Showcase

Grid-based product display (3–4 featured products for now).

Each product card:

Cloudinary-hosted image (optimized for web).

Product name & short description.

Price (optional at this stage or “Coming Soon”).

Hover/scroll animation (using Framer Motion).

Responsive for 2-column mobile grid, 3–4 columns on desktop.

4.4 Value Proposition / Why Choose Us

Three to four points (with icons) like:

✔️ Curated Selection

✔️ Premium Quality

✔️ Trend Meets Tradition

✔️ Delivered with Care

4.5 Footer

Brand logo & tagline.

Links: About, Contact (placeholder).

Social media icons (Instagram, X, Facebook).

Copyright © Aagya Ethics 2025.

5. Non-Functional Requirements
5.1 Performance & Responsiveness

Fast loading times (< 2s).

Images optimized via Cloudinary.

Fully responsive on mobile, tablet, and desktop.

5.2 Accessibility

High contrast for text readability.

Alt text for all images.

Font size scalable for mobile.

5.3 Scalability & Future-Proofing

Initial static landing page, but structured to expand into full e-commerce.

Database-ready (Supabase) for future product listings, user accounts, and orders.

6. Tech Stack

Framework: Next.js (for SEO-friendly, fast rendering).

Styling: Tailwind CSS (utility-first design system).

Animations: Framer Motion (smooth transitions).

Database (Future): Supabase (for authentication, product data).

Image Storage: Cloudinary (responsive image delivery, optimization).

Language: TypeScript (type safety, scalability).

Deployment: Vercel (for fast hosting and serverless support).

7. Design Guidelines

Theme: Minimal, clean, elegant.

Typography: Serif for headings (ethnic elegance) + sans-serif for body (modern feel).

Colors:

Primary: Warm earthy tone (beige/terracotta).

Secondary: Dark charcoal/black.

Accent: Soft pastel (matching hero image palette).

Layout: Mobile-first, simple grid system.

Hero Section Focus: Seamless blending of the background image with the theme.

8. Future Enhancements (Post-MVP)

Full product catalog with filters (categories, sizes, prices).

Shopping cart & checkout with payment gateway.

User authentication (Supabase + social login).

Reviews & ratings system.

Blog / fashion tips section.

Newsletter signup.