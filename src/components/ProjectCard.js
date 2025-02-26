import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={15} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          
          {description ?description.map((sub, index) => (
            <div key={index}>
              <h5>{sub.subtitle}</h5>
              {sub.details.map((detail, detailIndex) => (
                <span key={detailIndex}>{detail}</span>
              ))}
            </div>
          )):<div></div>}
        </div>
      </div>
    </Col>
  )
}