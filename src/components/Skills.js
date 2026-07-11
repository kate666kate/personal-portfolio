import meter1 from "../assets/img/meter1.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    "WordPress: pages, forms, plugins, mobile QA",
    "Shopify: products, options, content and EDM",
    "SEO + GA4/GTM: performance and lead tracking",
    "Website QA: accessibility, links and user paths",
    "Campaigns: launches, collateral and events",
    "HTML/CSS + Docker: practical demo delivery"
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Website, Digital and Marketing Skills</h2>
              <p>I bring a balanced technical and marketing skill set: enough web capability to manage platforms and QA confidently, plus enough marketing judgement to connect content, campaigns and sales enquiries.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill) => (
                  <div className="item" key={skill}>
                    <img src={meter1} alt="Skill meter" />
                    <h5>{skill}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Decorative background" />
    </section>
  )
}
