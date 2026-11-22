# AURÉVAN Perfume Storefront

Responsive Next.js storefront starter for an affordable-premium Indian fragrance brand. Built for GitHub + Vercel.

## Features
- Premium responsive landing page and mobile-friendly layout
- Brand story, collection, discovery-kit concept, journal and newsletter section
- Four editable product concepts: Monsoon, Noir, Bloom and Santal
- Fragrance family filters, product detail modal and shopping bag
- Quantity controls and email-based order enquiry
- CSS bottle mockups, so the site does not depend on stock image assets

## Important limitations
This is a pre-launch marketing storefront, not a fully operational e-commerce backend:
- Product names, scent profiles, prices, sizes and discovery kit are illustrative.
- Checkout sends an email enquiry only. It does not collect payment, store orders, reserve inventory or calculate shipping/tax.
- Newsletter sign-up is a demo and does not store email addresses.
- There is no customer account, order database, payment gateway or shipping integration.
Before accepting paid orders, integrate a payment provider, order database, inventory, customer notifications and shipping workflow. Publish accurate privacy, terms, returns and shipping policies.

## Run locally
Use Node.js 20 LTS:
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy to GitHub + Vercel
1. Create a GitHub repository, e.g. `aurevan-perfume-store`.
2. Upload the contents of this folder to the repository root (package.json must be at root).
3. In Vercel choose Add New → Project and import the GitHub repository.
4. Keep framework preset as Next.js and deploy.
5. Optional Vercel environment variable:
   - `NEXT_PUBLIC_CONTACT_EMAIL` = your real order enquiry email address.
6. Redeploy after setting the environment variable.

## Customise
- Product names, notes, prices, descriptions: `app/page.tsx`, in the `products` array.
- Brand name and page copy: `app/page.tsx`.
- Styling and colours: `app/globals.css`.
- SEO title and description: `app/layout.tsx`.

AURÉVAN is a working brand concept only. Check trademark, domain and social handle availability before adopting it. Replace CSS mockups with approved photographs of the actual manufactured products before launch.
