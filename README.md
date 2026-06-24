# Diabolical Scents — Next.js Starter

This repository contains an initial Next.js + Tailwind CSS scaffold for the DIABOLICAL luxury fragrance site. It includes animated hero, signature collection, about, testimonials, and newsletter sections. The project is prepared for Three.js bottle scenes and Framer Motion animations.

What I pushed
- Next.js app scaffold (pages, components)
- Tailwind CSS configuration
- Framer Motion setup for page transitions
- Placeholder 3D / bottle placeholders
- Newsletter form wired to Formspree placeholder (replace with your Formspree form id)

Immediate next steps (what I need from you)
1. Enable the empty GitHub repository (you created it already) and confirm this repository exists at:
   https://github.com/pridesibeko3-oss/diabolical-scents

2. Vercel deployment
   - I can deploy the site for you, but I need access to your Vercel project. The simplest path is:
     a) Visit https://vercel.com and sign in with your GitHub account.
     b) Click "New Project" → Import from GitHub → select the `diabolical-scents` repo.
     c) Use the default settings and click "Deploy".

   If you'd like me to deploy the site for you directly, invite me (your collaborator) to your Vercel project OR share temporary deployment access. If you prefer to do it yourself, I'll provide any follow-up changes and redeploy instructions.

3. Formspree (newsletter & contact forms)
   - Register at https://formspree.io (free tier) and create a form. Replace the `action` attribute in `components/Newsletter.js` with the new Formspree endpoint (it looks like `https://formspree.io/f/xxxxx`). I prefilled your email as the reply target.

4. Images
   - Add your bottle images to `/public/images/` (names like `bottle1.jpg`, `bottle2.jpg`, etc.). I left placeholders in the UI. When you upload them I can update the product cards and bottle showcase and push updates.

Deployment notes
- The project is configured to build on Vercel. After you (or I) deploy, share the Vercel project link and I'll perform final polish and replace placeholders with the bottle photos you provide.

If you'd like me to proceed with customizations (SVG logo refinement, full Three.js bottle model, loading animation, and more polish), say "Please continue — refine visuals and deploy" and invite me to your Vercel project or let me know you'll deploy and I'll watch for the live URL.
