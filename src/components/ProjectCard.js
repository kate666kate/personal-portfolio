import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, outcome, tags = [], imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={`${title} project preview`} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>{outcome}</p>
          <div className="project-tags">
            {tags.map((tag) => <small key={tag}>{tag}</small>)}
          </div>
        </div>
      </div>
    </Col>
  )
}
