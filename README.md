# Meisi Xu Digital Growth Portfolio

A React portfolio website built for interview demonstration. It presents Meisi Xu as a website and digital marketing specialist with experience across WordPress, Shopify, SEO, GA4/GTM, website QA, campaign support and stakeholder coordination.

The project is designed to be opened during an interview and used as a structured demo: business context, front-end result, working method and growth follow-up.

## Key Features

- Interview-ready single-page portfolio structure
- Digital growth positioning for website and marketing roles
- Showcase cards for WordPress, Shopify and portfolio delivery
- Skills section covering website management, SEO, analytics, QA and campaign support
- Role-fit and working-flow sections for interview storytelling
- Demo-flow section for live interview walkthroughs
- Responsive React Bootstrap layout with animation
- Docker production preview served through Nginx

## Technology Stack

- React 18
- JavaScript
- React Bootstrap
- Bootstrap
- React Router
- Animate.css
- React On Screen
- React Multi Carousel
- Docker
- Nginx

## Why This Project Matters

This project is relevant to digital growth and marketing technology roles because it demonstrates:

- Website and campaign positioning
- User-facing content structure
- Responsive portfolio presentation
- Practical demo framing for WordPress and Shopify work
- Analytics, QA and stakeholder workflow awareness
- A repeatable workflow for website and marketing delivery

## Local Setup

```bash
npm install
npm start
```

Then open:

```text
http://localhost:3000
```

## Docker Preview

Build the static site, then run the interview demo in Docker:

```bash
npm run build
docker compose up -d
```

Then open:

```text
http://localhost:8088
```

Stop the container:

```bash
docker compose down
```

## Available Scripts

```bash
npm start
npm test
npm run build
```

## Project Structure

```text
src/components/   Reusable React page sections
src/assets/       Images and visual assets
src/App.js        Main application composition
src/App.css       Main styling
```

## Notes

This portfolio was originally created as a React learning and presentation project. It is now maintained as a practical interview demo for website management, digital marketing and growth-focused web delivery roles.

## Repository Owner

Meisi Xu  
GitHub: https://github.com/kate666kate
