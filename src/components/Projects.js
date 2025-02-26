import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projApiImg1 from "../assets/img/api_sized.png";
import projApiImg2 from "../assets/img/schema_sized.png";
import projApiImg3 from "../assets/img/snapshot_sized.png";
import projMthImg1 from "../assets/img/mthdetail_sized.jpg";
import projMthImg2 from "../assets/img/mthemail_sized.png";
import projMthImg3 from "../assets/img/mthorder_sized.png";
import projRecamImg1 from "../assets/img/mbalbum.png";
import projRecamImg2 from "../assets/img/mbdel.png";
import projRecamImg3 from "../assets/img/mbselect.jpg";
import projBadoImg1 from "../assets/img/bado.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const apiProject = [
    {
      title: "API Swagger Snapshot",
      description: [
        {
          subtitle:"Company API", 
          details:["Manages company-related data and settings."]
        },
        {
          subtitle:"Credit API", 
          details:["Handles financial transactions, credit balances, and statements."]
        },
        {
          subtitle:"Photos API", 
          details:["Supports user-generated content management, including media uploads, metadata handling, and tagging."]
        },
        {
          subtitle:"PhotoUpload API", 
          details:["Implement event streaming for photo uploading"]
        },
      ],
      imgUrl: projApiImg1,
    },
    {
      title: "Database Schemas",
      
      imgUrl: projApiImg2,
    },
    {
      title: "Microservices architecture",
      description: [
        {
          subtitle:"Email Service", 
          details:["Including the email delivery service and notification with different email templates"]
        },
        {
          subtitle:"Media API", 
          details:["Including Photo related operations and message queuing"]
        },
        {
          subtitle:"User API", 
          details:["Including user data and authentication operations"]
        },
      ],
      imgUrl: projApiImg3,
    },
  ];
  const mthProject = [
    {
      title: "Order detail page",
      
      imgUrl: projMthImg1,
    },
    {
      title: "Order comfirmation email",
      
      imgUrl: projMthImg2,
    },
    {
      title: "Order management table",
      imgUrl: projMthImg3,
    },
  ];
  const recamProject = [
    {
      title: "Album view",
      // description: [
      //   {
      //     subtitle:"Company & Employee Management", 
      //     details:["Retrieve, create, update, and delete company details.","Manage employee assignments within companies.", "Track company settings and organizational structures."]
      //   },
      // ],
      imgUrl: projRecamImg1,
    },
    {
      title: "Photos delection",
      // description: [
      //   {
      //     subtitle:"Company & Employee Management", 
      //     details:["Retrieve, create, update, and delete company details.","Manage employee assignments within companies.", "Track company settings and organizational structures."]
      //   },
      // ],
      imgUrl: projRecamImg2,
    },
    {
      title: "Phone uploading",
      // description: [
      //   {
      //     subtitle:"Company & Employee Management", 
      //     details:["Retrieve, create, update, and delete company details.","Manage employee assignments within companies.", "Track company settings and organizational structures."]
      //   },
      // ],
      imgUrl: projRecamImg3,
    },
  ];
  const badoProject = [
    {
      title: "Chatting lobby",
      // description: [
      //   {
      //     subtitle:"Company API: Manages company-related data, employee assignments, and settings.", 
      //     details:["Retrieve, create, update, and delete company details.","Manage employee assignments within companies.", "Track company settings and organizational structures."]
      //   },
      // ],
      imgUrl: projBadoImg1,
    },
    // {
    //   title: "Database Schemas",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Project Structure Snapshot",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some key projects that showcase my expertise in full-stack development, cloud computing, and scalable system design.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center w-100" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">User & Media API</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Media Transfer Hub</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Recam application</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="forth">Bado application</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          apiProject.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          mthProject.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          recamProject.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="forth">
                    <Row>
                        {
                          badoProject.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}