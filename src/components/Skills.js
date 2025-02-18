import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  return (
    <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Experienced in full-stack development with expertise in C#, .NET, ReactJS, TypeScript, and Azure. Passionate about building scalable, efficient applications.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={meter3} alt="Web Development" />
                                    <h5>Full-Stack Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt=".NET & C# Development" />
                                    <h5>ASP.NET & C# Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Cloud & Azure Services" />
                                    <h5>Cloud & Azure Services</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="API Integration" />
                                    <h5>RESTful & GraphQL APIs</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Event-Driven Architecture" />
                                    <h5>Event-Driven & Microservices Architecture</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Database Management" />
                                    <h5>SQL & MongoDB</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Background" />
        </section>
  )
}