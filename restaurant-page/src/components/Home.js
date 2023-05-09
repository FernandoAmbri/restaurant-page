import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const slidesPizzasArr = [
  {
    path: "pizza-hawaina.jpg",
    nombre: "Hawaina",
  },
  {
    path: "pizza-americana.jpg",
    nombre: "Americana",
  },
  {
    path: "pizza-mexicana.jpg",
    nombre: "Mexicana",
  },
  {
    path: "pizza-peperoni.jpg",
    nombre: "Pepperoni",
  },
  {
    path: "pizza-suprema.jpg",
    nombre: "Suprema",
  },
  {
    path: "pizza-veggi.jpg",
    nombre: "Veggi",
  },
];

const slidesLength = slidesPizzasArr.length - 1;

function Home() {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);

  const pizzas = slidesPizzasArr.map(({ path, nombre }) => {
    return (
      <div key={nombre} className="slide">
        <img src={`/img/${path}`} alt={nombre} />
        <p className="description">{nombre}</p>
      </div>
    );
  });

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => {
      slide.classList.remove("show-slide");
    });
    const currentSlide = slides[slide];
    currentSlide.classList.add("show-slide");
  }, [slide]);

  return (
    <>
      <div className="main-content">
        <h2>Las mejores pizzas</h2>
        <section className="slides">
          <div className="container-slides">
            {pizzas}
            <button
              className="prev"
              onClick={() => {
                if (slide > 0) {
                  setSlide(slide - 1);
                } else {
                  setSlide(slidesLength);
                }
              }}
            >
              ❮
            </button>
            <button
              className="next"
              onClick={() => {
                if (slide < slidesLength) {
                  setSlide(slide + 1);
                } else {
                  setSlide(0);
                }
              }}
            >
              ❯
            </button>
          </div>
          <div className="dots">
            {slidesPizzasArr.map(({ nombre }, i) => (
              <span
                key={nombre}
                className={i === slide ? "dot active" : "dot"}
                onClick={() => setSlide(i)}
              ></span>
            ))}
          </div>
        </section>
        <button className="show-menu" onClick={() => navigate("/menu")}>
          Menú
        </button>
      </div>
    </>
  );
}
export default Home;
