import { Container, Row, Col } from "react-bootstrap";

export const RoleFit = () => {
  const priorities = [
    {
      title: "Website confidence",
      body: "Keep WordPress sites stable, secure, current and easy for users to navigate.",
    },
    {
      title: "Lead generation",
      body: "Improve forms, calls to action, product pathways and tracking so enquiries can be measured properly.",
    },
    {
      title: "Campaign delivery",
      body: "Support product launches, EDM, collateral, exhibitions and trade-event follow-up with consistent messaging.",
    },
    {
      title: "Team rhythm",
      body: "Create clear briefs, QA checklists and handover notes so sales, technical and marketing teams move faster.",
    },
  ];

  const plan = [
    ["30 days", "Audit websites, analytics, plugins, forms, campaign calendar and stakeholder needs."],
    ["60 days", "Fix high-impact content, SEO, form and tracking issues; standardise repeatable QA."],
    ["90 days", "Report lead-path learnings, support launches/events and recommend the next growth experiments."],
  ];

  return (
    <section className="role-fit" id="role-fit">
      <Container>
        <Row className="align-items-end role-fit-heading">
          <Col lg={7}>
            <span className="section-kicker">Role fit</span>
            <h2>How I would create value in this digital marketing role</h2>
          </Col>
          <Col lg={5}>
            <p>
              My strength is sitting between website operations and marketing delivery: I can make digital channels reliable, useful for customers and easier for the business to measure.
            </p>
          </Col>
        </Row>
        <Row className="role-priority-row">
          {priorities.map((item) => (
            <Col md={6} xl={3} key={item.title}>
              <div className="role-priority">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="role-plan">
          {plan.map(([label, body]) => (
            <div key={label}>
              <strong>{label}</strong>
              <span>{body}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
