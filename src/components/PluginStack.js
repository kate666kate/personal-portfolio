import { Container } from "react-bootstrap";

export const PluginStack = () => {
  const stacks = [
    {
      group: "SEO & search visibility",
      plugins: ["Yoast SEO", "Rank Math", "Redirection", "Schema Pro", "Search Console"],
      use: "Improve page titles, descriptions, redirects, schema, indexability and keyword-focused content hygiene.",
    },
    {
      group: "Analytics & tracking",
      plugins: ["GA4", "Google Tag Manager", "MonsterInsights", "UTM tracking", "Looker Studio"],
      use: "Track forms, product actions, campaign sources and drop-off points so marketing results are measurable.",
    },
    {
      group: "Speed & performance",
      plugins: ["WP Rocket", "LiteSpeed Cache", "Autoptimize", "Perfmatters", "Cloudflare"],
      use: "Improve loading speed, Core Web Vitals, caching, script control and user experience on mobile and desktop.",
    },
    {
      group: "Security & backup",
      plugins: ["Wordfence", "Sucuri", "UpdraftPlus", "Solid Security", "reCAPTCHA"],
      use: "Protect logins, reduce spam, monitor risk and keep recoverable backups before major website changes.",
    },
    {
      group: "Forms & lead generation",
      plugins: ["Gravity Forms", "WPForms", "HubSpot forms", "Conditional fields", "CRM handover"],
      use: "Make enquiries easier to complete and easier for sales or customer service teams to qualify.",
    },
    {
      group: "Content editing & landing pages",
      plugins: ["Elementor", "ACF", "Kadence Blocks", "Reusable blocks", "Landing-page templates"],
      use: "Build campaign pages, product content and reusable sections while keeping brand consistency across sites.",
    },
    {
      group: "Image & media optimisation",
      plugins: ["ShortPixel", "Imagify", "Smush", "WebP conversion", "Lazy loading"],
      use: "Keep product images sharp but lightweight, supporting better speed, SEO and mobile browsing.",
    },
    {
      group: "Shopify & ecommerce",
      plugins: ["Product options", "Collections", "Reviews", "Abandoned cart email", "Shopify reporting"],
      use: "Keep product information clear, reduce option confusion and support customer follow-up.",
    },
    {
      group: "Campaign & EDM",
      plugins: ["Mailchimp", "Klaviyo", "Shopify email", "Landing pages", "Event follow-up lists"],
      use: "Connect product launches, exhibitions and trade campaigns with measurable digital actions.",
    },
    {
      group: "LMS, compliance & QA",
      plugins: ["LearnDash", "Tutor LMS", "CookieYes", "Broken Link Checker", "Accessibility checks"],
      use: "Keep training content organised, consent handled clearly and publishing quality checked before launch.",
    },
  ];

  return (
    <section className="plugin-stack" id="plugin-stack">
      <Container>
        <div className="plugin-heading">
          <span className="section-kicker">Plugin & SEO stack</span>
          <h2>Good websites need the right plugin stack, not just good-looking pages</h2>
          <p>
            I choose plugins around business outcomes: faster pages, cleaner SEO, stronger security, better lead capture, useful reporting and easier handover between marketing, sales and technical teams.
          </p>
        </div>
        <div className="plugin-grid">
          {stacks.map((item) => (
            <div className="plugin-card" key={item.group}>
              <h3>{item.group}</h3>
              <div className="plugin-list">
                {item.plugins.map((plugin) => <span key={plugin}>{plugin}</span>)}
              </div>
              <p>{item.use}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
