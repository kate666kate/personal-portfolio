import { Container } from "react-bootstrap";

export const WorkingFlow = () => {
  const flow = [
    {
      step: "01",
      title: "Clarify the goal",
      body: "Confirm the audience, business objective, priority product or service, required action and approval owner.",
      tools: "Briefing template / stakeholder notes",
    },
    {
      step: "02",
      title: "Audit the current journey",
      body: "Review page structure, mobile experience, forms, SEO basics, content gaps, links and tracking coverage.",
      tools: "WordPress / Shopify / GA4 / GTM",
    },
    {
      step: "03",
      title: "Build and improve",
      body: "Update pages, product content, calls to action, forms, campaign assets and handover notes with clear ownership.",
      tools: "CMS workflow / HTML / CSS / collateral",
    },
    {
      step: "04",
      title: "QA before publishing",
      body: "Check accuracy, links, forms, accessibility basics, mobile layout, plugin risk and brand consistency before launch.",
      tools: "QA checklist / SEO checks / test forms",
    },
    {
      step: "05",
      title: "Launch and coordinate",
      body: "Publish with the right timing, keep sales and marketing aligned, and support EDM, product launch or event follow-up.",
      tools: "Campaign calendar / sales feedback",
    },
    {
      step: "06",
      title: "Measure and learn",
      body: "Track leads, form starts, enquiries, user drop-off and campaign source, then recommend the next improvement.",
      tools: "GA4 / GTM / Shopify reporting",
    },
  ];

  return (
    <section className="working-flow" id="working-flow">
      <Container>
        <div className="flow-heading">
          <span className="section-kicker">Working flow</span>
          <h2>My practical workflow for website and marketing delivery</h2>
          <p>
            I use a clear repeatable process so website updates, product launches and campaigns move from request to measurable outcome without losing quality, ownership or business context.
          </p>
        </div>
        <div className="flow-grid">
          {flow.map((item) => (
            <div className="flow-card" key={item.step}>
              <span className="flow-step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <small>{item.tools}</small>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
