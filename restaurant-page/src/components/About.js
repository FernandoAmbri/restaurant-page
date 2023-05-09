import { FaAward, FaLocationArrow, FaLeaf } from "react-icons/fa";

const cards = [
  <FaAward className="fa-award icon-grid" />,
  <FaLocationArrow className="fa-location-dot icon-grid" />,
  <FaLeaf className="fa-leaf icon-grid" />,
];

function About() {
  return (
    <>
      <div className="main-content-about">
        <section className="tittle">
          <div className="image-legacy">
            <div className="about-introduction">
              <p>Servicio de calidad</p>
              <div id="buttons-introduction">
                <button>Click 1</button>
                <button>Click 2</button>
              </div>
            </div>
          </div>
        </section>
        <section className="company-info">
          <div id="about-info">
            <h2>¿Qué hacemos?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              repellat itaque id amet eius quidem quibusdam accusantium
            </p>
          </div>
        </section>
        <section className="about-topics">
          <div className="topics-background">
            <div id="grid-about">
              {cards.map((card, i) => (
                <div id="card" key={`card${i}`}>
                  {card}
                  <h3>Título</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Unde odit numquam harum, cum dolorem adipisci, ab est
                    possimus non ullam nam et, vero maiores eveniet! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
